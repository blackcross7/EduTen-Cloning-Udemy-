import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularInstructors = ({ instructors }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; // scroll almost one full view
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-6xl px-4 py-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Popular Instructors</h2>

      {/* Scroll buttons - always visible */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {instructors &&
          instructors.map((inst, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md hover:bg-slate-100 transition duration-300"
            >
              <div className="text-center w-full">
                <img
                  src={inst.thumbnail}
                  alt={inst.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {inst.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{inst.expertise}</p>
                <p className="text-xs text-gray-500">
                  ⭐ {inst.rating} Instructor rating • {inst.students} students
                  • {inst.courses} courses
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
