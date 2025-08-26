import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { featuredCourses } from "./data/mockData";

export default function FeaturedCourses() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [wishlistedCourses, setWishlistedCourses] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const extendedCourses = [
    featuredCourses[featuredCourses.length - 1],
    ...featuredCourses,
    featuredCourses[0],
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleWishlistToggle = (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={16} className="text-gray-300" />
            <Star
              size={16}
              className="absolute top-0 fill-yellow-400 text-yellow-400"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-gray-300" />
        ))}
      </div>
    );
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Infinite looping fix
  useEffect(() => {
    if (currentSlide === extendedCourses.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
      return () => clearTimeout(timeout);
    }

    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(extendedCourses.length - 2);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedCourses.length]);

  // --- AUTOPLAY ---
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // 5s per slide
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <section className="mb-12 max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 ">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Featured courses
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl">
          Many learners enjoyed this highly rated course for its engaging content.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {extendedCourses.map((course, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 border rounded-lg p-4 sm:p-6 flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-80 mb-4 md:mb-0 md:mr-6 lg:mr-8">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-md w-full h-40 sm:h-48 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4 line-clamp-2">
                    {course.title}
                  </h3>
                  <button
                    onClick={(e) => handleWishlistToggle(course.id, e)}
                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                  >
                    <Heart
                      size={20}
                      className={
                        wishlistedCourses[course.id]
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                    />
                  </button>
                </div>

                <p className="text-gray-700 mt-2 mb-3 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
                  {course.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">By {course.instructor}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  Updated <span className="font-semibold">{course.updated}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  {course.hours} total hours · {course.lectures} lectures ·{" "}
                  {course.level}
                </p>

                <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-gray-900">
                      {course.rating.toFixed(1)}
                    </span>
                    {renderStars(course.rating)}
                    <span className="text-xs sm:text-sm text-blue-500">
                      ({course.ratingCount})
                    </span>
                  </div>
                  {course.isHotAndNew && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
                      New
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹{course.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹{course.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows - Only show on non-mobile or if explicitly enabled on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous course"
        >
          <ChevronLeft size={isMobile ? 20 : 28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next course"
        >
          <ChevronRight size={isMobile ? 20 : 28} />
        </button>

        {/* Dots indicator for mobile */}
        {isMobile && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {featuredCourses.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index + 1 ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}