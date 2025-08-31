import { useState } from "react";
import HeroBanner from "../components/PhotographyAndVideoPage/HeroBanner";
import TabsSection from "../components/PhotographyAndVideoPage/TabSelection";
import DetailView from "../components/PhotographyAndVideoPage/DetailView";
import { photographyCourses } from "../components/PhotographyAndVideoPage/data";
import CardSection from "../components/PhotographyAndVideoPage/CardSection";
import FeaturedCourses from "../components/PhotographyAndVideoPage/FeaturedCourses";
import AllOfficeProductivityCourse from "../components/PhotographyAndVideoPage/AllCourses";
import PopularTopics from "../components/PhotographyAndVideoPage/PopularTopiics";
import PopularInstructors from "../components/PhotographyAndVideoPage/PopularInstructors";

const OfficeProductivityPage = () => {
  const [activeTab, setActiveTab] = useState("Most Popular"); // default tab
  const [hoveredCourse, setHoveredCourse] = useState(null); // for hover popup
  const [selectedCourse, setSelectedCourse] = useState(null); // for detail view

  // Filter courses by tab
  const filteredCourses = photographyCourses.filter((course) => {
    if (activeTab === "Most Popular") return course.status === "popular";
    if (activeTab === "New") return course.status === "new";
    if (activeTab === "Trending") return course.status === "trending";
    return true;
  });

  const filteredFeaturedCourses = photographyCourses.filter((course) => {
    return course.badge === "Bestseller";
  });

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = photographyCourses.find((c) => c.id === id);
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
            label={"Photography & Video Courses"}
            paragraph={"Explore courses from experienced, real-world experts."}
          />
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
            courses={photographyCourses}
            hoveredCourse={hoveredCourse}
          />
        </>
      )}
    </div>
  );
};

export default OfficeProductivityPage;
