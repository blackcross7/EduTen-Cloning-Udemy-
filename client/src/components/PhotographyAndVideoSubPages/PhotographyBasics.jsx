import { useState } from "react";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";
import { PhotographyBasicsCourses } from "./data";
import CardSection from "./CardSection";

const PhotoGraphyBasicsPage = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view
  console.log(PhotographyBasicsCourses.length);

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = PhotographyBasicsCourses.find((c) => c.id === id);
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
            label={"Photography Basics "}
            paragraph={"Explore courses from experienced, real-world experts."}
          />
          {/* Courses Section */}
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={PhotographyBasicsCourses}
          />
        </>
      )}
    </div>
  );
};

export default PhotoGraphyBasicsPage;
