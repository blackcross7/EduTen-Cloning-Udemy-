import { useState } from "react";
import HeroBanner from "../components/OfficeProductivityPage/HeroBanner";
import TabsSection from "../components/OfficeProductivityPage/TabSelection";
import DetailView from "../components/OfficeProductivityPage/DetailView";
import { officeProductivityCourses } from "../components/OfficeProductivityPage/data";
import CardSection from "../components/OfficeProductivityPage/CardSection";
import FeaturedCourses from "../components/OfficeProductivityPage/FeaturedCourses";
import AllOfficeProductivityCourse from "../components/OfficeProductivityPage/AllOfficeProductivityCourses";
import PopularTopics from "../components/OfficeProductivityPage/PopularTopiics";
import PopularInstructors from "../components/OfficeProductivityPage/PopularInstructors";

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

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = officeProductivityCourses.find((c) => c.id === id);
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
            courses={filteredFeaturedCourses.slice(0, 3)}
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
