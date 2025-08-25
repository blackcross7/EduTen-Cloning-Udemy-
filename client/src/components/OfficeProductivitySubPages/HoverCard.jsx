const HoverCard = ({ course, position = "center" }) => {
  if (!course) return null;

  return (
    <div
      className={`absolute z-50 w-80 bg-white rounded-xl shadow-lg p-4 transition
    ${position === "left" ? "right-full mr-4 top-0" : ""}
    ${position === "right" ? "left-full ml-4 top-0" : ""}
    ${position === "center" ? "top-full mt-4 left-1/2 -translate-x-1/2" : ""}
  `}
    >
      {/* Badge + Updated */}
      <div className="flex items-center gap-2 text-sm mb-2">
        {course.badge && (
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
            {course.badge}
          </span>
        )}
        {course.updated && (
          <span className="text-gray-500">Updated {course.updated}</span>
        )}
      </div>

      <h4 className="font-semibold text-gray-900">{course.title}</h4>
      <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>

      {/* Description */}
      <p className="text-gray-700 text-sm mt-3">{course.description}</p>

      {/* Highlights */}
      {course.highlights && (
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-3">
          {course.highlights.slice(0, 2).map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
        Add to cart
      </button>
    </div>
  );
};

export default HoverCard;
