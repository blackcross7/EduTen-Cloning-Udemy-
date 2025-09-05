import React from "react";
import Card from "./Card";
import HoverCard from "./HoverCard";

const CardSection = ({
  filteredCourses,
  setHoveredCourse,
  hoveredCourse,
  handleCourseClick,
}) => {
  return (
    <div className="px-6 py-6 max-w-7xl mx-4">
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => {
            return (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="relative"
              >
                <Card {...course} onClick={handleCourseClick} />
                {hoveredCourse?.id === course.id && (
                  <HoverCard course={hoveredCourse} />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">No courses found</div>
      )}
    </div>
  );
};

export default CardSection;
