import { Star } from "lucide-react";
import React, { useState } from "react";

const FeaturedCourses = ({
  onClick = () => {},
  course,
  addToCart = () => {},
}) => {
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
  const [hovered, setHovered] = useState(false);
  function handleCart(course) {
    console.log(course);

    addToCart(course.id);
  }
  return (
    <div className="px-4 py-8 ">
      <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>

      <div
        className="bg-white flex flex-col sm:flex-row justify-start items-start gap-6 rounded-lg border shadow-sm hover:shadow-md transition cursor-pointer relative"
        onClick={onClick.bind(null, id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="w-full sm:w-[30vw] relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
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

          {/* Badge & Button */}
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

            {/* Enroll button */}
            <button
              className={`
      bg-purple-900 text-white mt-2 w-fit inline-block text-xs font-medium px-2 py-1 rounded
      block sm:hidden   /* Always show on small screens */
      ${
        hovered ? "sm:block" : "sm:hidden"
      } /* Toggle on hover for larger screens */
    `}
              onClick={(e) => {
                e.stopPropagation();
                handleCart(course);
              }}
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
