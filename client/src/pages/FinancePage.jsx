// src/pages/BusinessPage.jsx
import React from "react";
import FinanceCourseSection from '../components/FinanceCoursePage/FinanceCourceSection';
import FeaturedCourses from "../components/FinanceCoursePage/FeaturedCourses";
import PopularTopics from "../components/FinanceCoursePage/PopularTopics";
import PopularInstructors from "../components/FinanceCoursePage/PopularInstructors";
import AllFinanceCoursesSection from "../components/FinanceCoursePage/AllFinanceCoursesSection";

const FinancePage = () => {
  return (
    <main className="bg-white text-gray-800 py-10">
  <div className="max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 mx-auto">
    <FinanceCourseSection />
    <FeaturedCourses />
    <PopularTopics />
    <PopularInstructors />
    <AllFinanceCoursesSection />
  </div>
</main>
  );
};

export default FinancePage;

 