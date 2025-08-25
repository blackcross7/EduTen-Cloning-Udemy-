import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { popularInstructors } from './data/mockData';

const PopularInstructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  
  // Determine how many slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
        setIsMobile(false);
      } else {
        setSlidesToShow(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const nextSlide = () => {
    if (currentIndex < popularInstructors.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end
      setCurrentIndex(popularInstructors.length - slidesToShow);
    }
  };

  const visibleInstructors = popularInstructors.slice(currentIndex, currentIndex + slidesToShow);

  // Add empty cards if we don't have enough to fill the grid
  const emptyCardsCount = slidesToShow - visibleInstructors.length;
  const displayInstructors = [
    ...visibleInstructors,
    ...(emptyCardsCount > 0 
      ? Array(emptyCardsCount).fill({ isEmpty: true }) 
      : [])
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Popular Instructors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
          These real-world experts are highly rated by learners like you.
        </p>
      </div>

      <div className="relative">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${slidesToShow} gap-4 sm:gap-6`}>
          {displayInstructors.map((instructor, index) => (
            instructor.isEmpty ? (
              <div key={`empty-${index}`} className="bg-transparent border-0 p-0" aria-hidden="true" />
            ) : (
              <div
                key={instructor.id}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">{instructor.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{instructor.specialty}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-2 mt-auto">
                  <span className="text-xs sm:text-sm font-bold text-gray-900 mr-1">{instructor.rating}</span>
                  <div className="flex mr-2">
                    {renderStars(instructor.rating)}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">Rating</span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  <span className="font-medium">{instructor.students.toLocaleString()}</span> students
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-medium">{instructor.courses}</span> courses
                </p>
              </div>
            )
          ))}
        </div>
        
        {/* Navigation arrows */}
        {popularInstructors.length > slidesToShow && (
          <>
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-full p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow z-10"
              onClick={prevSlide}
              aria-label="Previous instructors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-gray-300 rounded-full p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow z-10"
              onClick={nextSlide}
              aria-label="Next instructors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </>
        )}

        {/* Dots indicator for mobile */}
        {isMobile && popularInstructors.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: popularInstructors.length }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to instructor ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularInstructors;