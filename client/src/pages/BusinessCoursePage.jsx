// src/pages/BusinessPage.jsx
import React from "react";
import BusinessCourseSection from "../components/BusinessCoursePage/BusinessCourseSection";
import FeaturedCourses from "../components/BusinessCoursePage/FeaturedCourses";
import PopularTopics from "../components/BusinessCoursePage/PopularTopics";
import PopularInstructors from "../components/BusinessCoursePage/PopularInstructors";
import AllBusinessCoursesSection from "../components/BusinessCoursePage/AllBusinessCoursesSection";

const BusinessCoursePage = () => {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] text-gray-800 py-16 min-h-screen">
      <div className="max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 mx-auto">
        <BusinessCourseSection />
        <FeaturedCourses />
        <PopularTopics />
        <PopularInstructors />
        <AllBusinessCoursesSection />
      </div>
    </main>
  );
};

export default BusinessCoursePage;

 