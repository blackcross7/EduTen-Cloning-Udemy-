import React, { useState } from "react";
import { emotionalIntelligenceCourses } from "./data"; // Adjust path if needed
import HeroBanner from "./HeroBanner";
import DetailView from "../PhotographyAndVideoSubPages/DetailView";
import CardSection from "../PhotographyAndVideoSubPages/CardSection";

export default function EmotionalIntelligencePage() {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = emotionalIntelligenceCourses.find((c) => c.id === id);
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
          <HeroBanner label={"🧠 Emotional Intelligence Courses"} />

          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={emotionalIntelligenceCourses}
          />
        </div>
      )}
    </div>
  );
}
