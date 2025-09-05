import React, { useState } from "react";
import { careerDevelopmentCourses } from "./data"; // adjust path if needed

import CardSection from "../PhotographyAndVideoSubPages/CardSection";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";

export default function LeadershipPage() {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = careerDevelopmentCourses.find((c) => c.id === id);
    if (course) {
      setSelectedCourse(course); // opens modal
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 relative p-2 pt-8">
      {selectedCourse ? (
        // Detail View Modal
        <DetailView
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      ) : (
        <div>
          <HeroBanner label={"🎯 Career Development Courses"} />
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={careerDevelopmentCourses}
          />
        </div>
      )}
    </div>
  );
}
