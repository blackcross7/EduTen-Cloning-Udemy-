import React from "react";
import MarketingCourseSection from '../components/MarketingCoursePage/MarketingCourseSection';
import FeaturedCourses from "../components/MarketingCoursePage/FeaturedCourses";
import PopularTopics from "../components/MarketingCoursePage/PopularTopics";
import PopularInstructors from "../components/MarketingCoursePage/PopularInstructors";
import AllMarketingCoursesSection from "../components/MarketingCoursePage/AllMarketingCoursesSection";

const MarketingPage = () => {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] text-gray-800 py-16 min-h-screen">
      <div className="max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 mx-auto">
        <MarketingCourseSection />
        <FeaturedCourses />
        <PopularTopics />
        <PopularInstructors />
        <AllMarketingCoursesSection />
      </div>
    </main>
  );
};

export default MarketingPage; 