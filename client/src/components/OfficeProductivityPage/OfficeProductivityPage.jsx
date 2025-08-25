import { useState } from "react";
import HeroBanner from "./HeroBanner";
import TabsSection from "./TabSelection";
import DetailView from "./DetailView";
import { officeProductivityCourses } from "./data";
import CardSection from "./CardSection";
import FeaturedCourses from "./FeaturedCourses";
import AllOfficeProductivityCourse from "./AllOfficeProductivityCourses";
import PopularTopics from "./PopularTopiics";
import PopularInstructors from "./PopularInstructors";

const OfficeProductivityPage = () => {
  const [activeTab, setActiveTab] = useState("Most Popular"); // default tab
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Filter courses by tab
  const filteredCourses = officeProductivityCourses.filter((course) => {
    if (activeTab === "Most Popular") return course.status === "popular";
    if (activeTab === "New") return course.status === "new";
    if (activeTab === "Trending") return course.status === "trending";
    return true;
  });

  const filteredFeaturedCourses = officeProductivityCourses.filter((course) => {
    return course.badge === "Bestseller";
  });
  console.log(filteredFeaturedCourses);

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = officeProductivityCourses.find((c) => c.id === id);
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
          <HeroBanner />
          {/* Tabs */}
          <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Courses Section */}
          <CardSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={filteredCourses}
            activeTab={activeTab}
          />
          {/* Featured Courses Section */}

          <FeaturedCourses
            key={filteredFeaturedCourses[1].id}
            course={filteredFeaturedCourses[1]}
            onClick={handleCourseClick}
          />
          {/* Popular Topics  */}
          <PopularTopics />
          {/* Popular Instructors */}
          <PopularInstructors />
          {/* All Courses  */}
          <AllOfficeProductivityCourse
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            courses={officeProductivityCourses}
            hoveredCourse={hoveredCourse}
          />
        </>
      )}
    </div>
  );
};

export default OfficeProductivityPage;
