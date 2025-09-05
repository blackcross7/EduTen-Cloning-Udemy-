import React, { useState } from "react";
import { stressManagementCourses } from "./data"; // Adjust path as needed
import CardSection from "../PhotographyAndVideoSubPages/CardSection";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";

export default function LeadershipPage() {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = stressManagementCourses.find((c) => c.id === id);
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
          <HeroBanner label={"🌿 Stress Management Courses"} />
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={stressManagementCourses}
          />
        </div>
      )}
    </div>
  );
}
