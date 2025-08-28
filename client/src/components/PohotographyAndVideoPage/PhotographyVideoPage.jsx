import { useState } from "react";
import HeroBanner from "./HeroBanner";
import TabsSection from "./TabSelection";
import DetailView from "./DetailView";
import { photographyCourses } from "./data";
import CardSection from "./CardSection";
import FeaturedCourses from "./FeaturedCourses";
import AllOfficeProductivityCourse from "./AllCourses";
import PopularTopics from "./PopularTopiics";
import PopularInstructors from "./PopularInstructors";

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
  console.log(filteredFeaturedCourses);

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
            label={"Office Productivity Courses"}
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
