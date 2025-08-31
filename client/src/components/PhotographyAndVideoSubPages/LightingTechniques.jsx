import { useState } from "react";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";
import { LightingTechniquesCourses } from "./data";
import CardSection from "./CardSection";

const LightingTechniquesPage = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = LightingTechniquesCourses.find((c) => c.id === id);
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
        <>
          <HeroBanner
            label={"Lighting Techniques"}
            paragraph={"Explore courses from experienced, real-world experts."}
          />
          {/* Courses Section */}
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={LightingTechniquesCourses}
          />
        </>
      )}
    </div>
  );
};

export default LightingTechniquesPage;
