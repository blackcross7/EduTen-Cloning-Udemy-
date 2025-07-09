// src/pages/BusinessPage.jsx
import React from "react";
import BusinessCourseSection from "../components/BusinessCoursePage/BusinessCourseSection";
import FeaturedCourses from "../components/BusinessCoursePage/FeaturedCourses";
import PopularTopics from "../components/BusinessCoursePage/PopularTopics";
import PopularInstructors from "../components/BusinessCoursePage/PopularInstructors";
import AllBusinessCoursesSection from "../components/BusinessCoursePage/AllBusinessCoursesSection";

const BusinessCoursePage = () => {
  return (
    <div>
      <BusinessCourseSection />
      <FeaturedCourses />
      <PopularTopics />
      <PopularInstructors />
      <AllBusinessCoursesSection />
    </div>
  );
};

export default BusinessCoursePage;
