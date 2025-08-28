import React from "react";
import Card from "./Card";
import HoverCard from "./HoverCard";

const CardSection = ({
  filteredCourses,
  activeTab,
  setHoveredCourse,
  hoveredCourse,
  handleCourseClick,
}) => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{activeTab}</h2>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => {
            let position = "center";
            // if course is in first column → show right
            // 1st card in row → right
            if (index % 3 === 0) position = "right";
            // 2nd & 3rd card in row → left
            else position = "left";
            return (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="relative"
              >
                <Card {...course} onClick={handleCourseClick} />
                {hoveredCourse?.id === course.id && (
                  <HoverCard course={hoveredCourse} position={position} />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No courses found under{" "}
          <span className="font-semibold">{activeTab}</span>.
        </div>
      )}
    </div>
  );
};

export default CardSection;
