import React from "react";
import { Star } from "lucide-react";

const HorizontalCard = ({
  onClick = () => {},
  onHover = () => {},
  ...data
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
    highlights,
  } = data;

  return (
    <div
      className="bg-white rounded-lg border shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden flex flex-col md:flex-row gap-2"
      onClick={onClick.bind(null, id)}
      onMouseEnter={() => onHover(data)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Image */}
      <div className="md:w-[30vw] md:h-[30vw] w-3/4 ml-[10%] md:ml-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-[100%] h-[100%] object-cover rounded-l-lg"
          onMouseEnter={() => onHover(data)}
          onMouseLeave={() => onHover(null)}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
            {title}
          </h3>
          {badge && (
            <span
              className={`ml-4 w-fit inline-block text-xs font-medium px-2 py-1 rounded-sm border ${
                badge === "Bestseller"
                  ? "bg-yellow-200 text-yellow-800 border-yellow-300"
                  : "bg-purple-200 text-purple-800 border-purple-300"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{instructor}</p>
        <button className="md:hidden w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium shadow-sm">
          Enroll Now
        </button>
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
          <p className="text-xl font-bold text-gray-900">₹{price}</p>
          {originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              ₹{originalPrice}
            </p>
          )}
        </div>
        {highlights && (
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-3">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HorizontalCard;
