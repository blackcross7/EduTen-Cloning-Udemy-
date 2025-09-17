const CourseRow = ({ course }) => {
  return (
    <div className="flex flex-row gap-2 sm:gap-4 border-b py-3">
      {/* Left: Image */}
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-24 h-16 sm:w-40 sm:h-24 object-cover rounded"
      />

      {/* Right: Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold">{course.title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {course.instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500 font-semibold text-xs sm:text-sm">
            {course.rating.toFixed(1)}
          </span>
          <span className="text-gray-600 text-xs sm:text-sm">
            ({course.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Meta Info */}
        <p className="text-xs sm:text-sm text-gray-500">
          {course.duration} • {course.lectures} lectures • {course.level}
        </p>

        {/* Badges */}
        <div className="flex gap-2 mt-1">
          {course.badge && (
            <span
              className={`px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded ${
                course.badge === "Premium"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {course.badge}
            </span>
          )}
          {course.status === "Bestseller" && (
            <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-green-100 text-green-700">
              Bestseller
            </span>
          )}
        </div>
      </div>

      {/* Right: Price */}
      <div className="flex flex-col items-end w-16 sm:w-20 text-right">
        <span className="text-sm sm:text-lg font-bold">
          {course.currency === "INR" ? "₹" : course.currency}
          {course.price}
        </span>
        <span className="text-[10px] sm:text-sm text-gray-500 line-through">
          {course.currency === "INR" ? "₹" : course.currency}
          {course.originalPrice}
        </span>
      </div>
    </div>
  );
};

export default CourseRow;
