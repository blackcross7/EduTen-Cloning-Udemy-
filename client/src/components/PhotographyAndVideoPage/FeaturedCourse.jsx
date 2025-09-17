import { Star, StarHalf } from "lucide-react";
import { useState } from "react";

const FeaturedCourse = ({ course }) => {
  const [hovered, setHovered] = useState(false);

  if (!course) {
    return <div>EMPTY</div>;
  }

  return (
    <div
      className="mx-6 mt-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Course Box */}
      <div className="border rounded-lg p-2 flex flex-col md:flex-row gap-6 items-start shadow-sm ">
        {/* Left: Image */}
        <div className="w-full md:w-2/5 max-h-56 overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full max-h-auto rounded-md object-cover"
          />
        </div>

        {/* Right: Course Info */}
        <div className="flex flex-col justify-between w-full md:w-3/5">
          <h3 className="text-base font-bold">{course.title}</h3>
          <p className="text-gray-700 text-sm  leading-relaxed line-clamp-3">
            {course.description}
          </p>

          <p className="text-xs  text-gray-500 mt-0.5 ">
            By <span className="font-thin">{course.instructor}</span> <br />
            Updated{" "}
            <span className="text-green-600 font-medium">
              {course.lastUpdated}
            </span>{" "}
            • {course.duration} total hours • {course.lectures} lectures •{" "}
            {course.level}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2 text-sm">
            <span className="text-yellow-500 font-semibold flex items-center gap-1">
              {course.rating.toFixed(1)}
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(course.rating)
                      ? "fill-yellow-500"
                      : "fill-gray-200"
                  }`}
                />
              ))}
            </span>
            <span className="text-gray-600">
              ({course.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Badges */}
          <div className="mt-2 flex gap-2">
            {course?.badge && (
              <span className="px-2 py-1 text-xs font-semibold rounded bg-purple-100 text-purple-700">
                {course.badge}
              </span>
            )}
            {course?.status && (
              <span className="px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-700">
                {course.status}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-base font-semibold">
              {course.currency === "INR" ? "₹" : course.currency}
              {course.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {course.currency === "INR" ? "₹" : course.currency}
              {course.originalPrice}
            </span>
            <button
              className={`bg-purple-900 text-white text-center w-fit inline-block text-xs font-medium px-2 py-1 rounded
      ${hovered ? "md:block" : "md:hidden"} block`}
              onClick={(e) => {
                e.stopPropagation();
                // handleCart(course);
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

export default FeaturedCourse;
