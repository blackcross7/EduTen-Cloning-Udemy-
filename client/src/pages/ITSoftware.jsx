import React from "react";
import ITSoftwareCourseSection from "../components/ITSoftware/ITSoftwareCourseSection";
import PopularTopics from "../components/ITSoftware/PopularTopics";
import PopularInstructors from "../components/ITSoftware/PopularInstructors";
import FeaturedCourses from "../components/ITSoftware/FeaturedCourses";
import AllITSoftwareCoursesSection from "../components/ITSoftware/AllITSoftwareCoursesSection";

const ITSoftware = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    <ITSoftwareCourseSection />
      <PopularTopics />
      <FeaturedCourses />
      <PopularInstructors />
      <AllITSoftwareCoursesSection />
    </div>
  );
};

export default ITSoftware;
