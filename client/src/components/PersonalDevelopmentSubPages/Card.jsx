import React from "react";
import { Star } from "lucide-react";

const Card = ({ onClick = () => {}, onHover = () => {}, ...data }) => {
  const {
    id,
    title,
    instructor,
    thumbnail,
    rating,
    price,
    originalPrice,
    badges,
    reviews,
  } = data;
  console.log(thumbnail);

  return (
    <div
      className="bg-white rounded-lg border shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden relative"
      onClick={onClick.bind(null, id)}
      onMouseEnter={() => onHover(data)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Image */}
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />

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
          <span className="text-gray-500 ml-1">({reviews || 1200})</span>
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

        {/* Badge */}
        {badges && (
          <div
            className={`mt-2 w-fit inline-block text-xs font-medium px-2 py-1 rounded `}
          >
            {badges.map((item, index) => (
              <span
                className={`${
                  index % 2 === 0
                    ? "bg-green-700 text-green-100"
                    : "bg-purple-700 text-purple-100"
                }`}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Enroll Now button (mobile only) */}
        <button className="mt-3 w-fit text-xs font-medium px-2 py-1 rounded bg-blue-600 text-white md:hidden">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Card;
