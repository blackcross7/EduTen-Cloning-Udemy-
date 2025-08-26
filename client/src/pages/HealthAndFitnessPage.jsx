import React from "react";
import FeaturedCourses from "../components/HealthAndFitnessCoursePage/FeaturedCourses";
import PopularTopics from "../components/HealthAndFitnessCoursePage/PopularTopics";
import PopularInstructors from "../components/HealthAndFitnessCoursePage/PopularInstructors";
import AllHealthAndFitnessCoursesSection from "../components/HealthAndFitnessCoursePage/AllHealthAndFitnessCoursesSection";
import CoursesToGetStarted from "../components/LifestylePage/CoursesToGetStarted";

import {
  popularCourses,
  trendingCourses,
  popularHoverDetails,
  trendingHoverDetails,
  popularRatingData,
  trendingRatingData,
} from "../components/HealthAndFitnessCoursePage/data/mockData";

const HealthAndFitnessPage = () => {
  return (
    <main className="bg-white text-gray-800 py-10">
      <div className="max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 mx-auto">
        <CoursesToGetStarted
          title="Health & Fitness"
          popularCourses={popularCourses}
          trendingCourses={trendingCourses}
          popularHoverDetails={popularHoverDetails}
          trendingHoverDetails={trendingHoverDetails}
          popularRatingData={popularRatingData}
          trendingRatingData={trendingRatingData}
        />
        <FeaturedCourses />
        <PopularTopics />
        <PopularInstructors />
        <AllHealthAndFitnessCoursesSection />
      </div>
    </main>
  );
};

export default HealthAndFitnessPage;
