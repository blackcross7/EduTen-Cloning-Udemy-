// CourseTooltip.jsx
import React from "react";
import { createPortal } from "react-dom";
import { Check } from "lucide-react";

const CourseTooltip = ({
  course,
  position = "left",
  coords,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!course || !coords) return null;

  return createPortal(
    <div
      // absolute in body; coords.top is the vertical center point, we use -translate-y-1/2 to center
      className="absolute hidden md:block w-72 bg-white border shadow-xl border-gray-300 rounded-md p-4 z-20 -translate-y-1/2"
      style={{
        top: `${coords.top}px`,
        left: `${
          position === "left"
            ? `${coords.left - 100}px`
            : `${coords.left - 2}px`
        }`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* arrow (left or right) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 overflow-hidden   ${
          position === "left"
            ? "-right-2 border-r-2 border-t-2"
            : "-left-2 border-l-2 border-b-2 "
        }`}
        aria-hidden
      />

      {/* content */}
      <h1 className="font-semibold text-gray-900">{course.title}</h1>

      <div className="mb-2 flex gap-2">
        {course.badge && (
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
            {course.badge}
          </span>
        )}
        {course.status && (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            {course.status}
          </span>
        )}
      </div>

      <p className="text-sm mb-2 text-green-700">{course.lastUpdated}</p>
      <p className="mb-2 text-sm text-gray-600">
        {course.duration} • {course.level}
      </p>

      <p className="text-sm mb-2 text-gray-900">{course.description}</p>

      <ul className="text-gray-700 text-sm list-none space-y-1 mb-4">
        {course?.highlights?.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check size={16} className="text-purple-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        Add to cart
      </button>
    </div>,
    document.body
  );
};

export default CourseTooltip;
