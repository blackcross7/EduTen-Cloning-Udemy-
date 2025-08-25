import { useState } from "react";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";
import { CommunicationCourses } from "./data";
import CardSection from "./CardSection";

const CommunicationPage = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = CommunicationCourses.find((c) => c.id === id);
    if (course) {
      setSelectedCourse(course); // opens modal
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {selectedCourse ? (
        // Detail View Modal
        <DetailView
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      ) : (
        <>
          <HeroBanner text="Time Management Courses" />

          {/* Courses Section */}
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={CommunicationCourses}
          />
        </>
      )}
    </div>
  );
};

export default CommunicationPage;
