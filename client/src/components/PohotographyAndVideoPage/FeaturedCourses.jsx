import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const FeaturedCourses = ({
  onClick = () => {},
  courses,
  addToCart = () => {},
}) => {
  const [hovered, setHovered] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCourse = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const course = courses[currentIndex];
  const {
    id,
    title,
    instructor,
    rating,
    reviewCount,
    price,
    originalPrice,
    imageUrl,
    badge,
  } = course;

  function handleCart(course) {
    console.log(course);

    addToCart(course.id);
  }
  return (
    <div className="px-4 py-8 ">
      <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>

      <div
        className="bg-white  flex justify-start place-items-start gap-6 rounded-lg border shadow-sm hover:shadow-md transition cursor-pointer  relative"
        onClick={onClick.bind(null, id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="w-[30vw]  relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col">
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{instructor}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-sm">
            <span className="font-semibold text-gray-800">{rating}</span>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(rating) ? "fill-yellow-500" : "fill-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 ml-1">({reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <p className="text-lg font-bold text-gray-900">₹{price}</p>
            {originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ₹{originalPrice}
              </p>
            )}
          </div>

          {/* Badge & Buttion */}
          <div className="flex items-center gap-2 mt-3">
            {badge && (
              <span
                className={`mt-2 w-fit inline-block text-xs font-medium px-2 py-1 rounded ${
                  badge === "Bestseller"
                    ? "bg-green-700 text-green-100"
                    : "bg-purple-700 text-purple-100"
                }`}
              >
                {badge}
              </span>
            )}
            {hovered && (
              <button
                className="bg-purple-900 text-white mt-2 w-fit inline-block text-xs font-medium px-2 py-1 rounded "
                onClick={(e) => {
                  e.stopPropagation(); // prevent opening detail page
                  handleCart(course); // add to cart only
                }}
              >
                Enroll
              </button>
            )}
          </div>
        </div>
        <button
          onClick={prevCourse}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextCourse}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
