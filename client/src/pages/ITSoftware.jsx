import React from "react";
import ITSoftwareCourseSection from "../components/ITSoftware/ITSoftwareCourseSection";
import PopularTopics from "../components/ITSoftware/PopularTopics";
import PopularInstructors from "../components/ITSoftware/PopularInstructors";
import FeaturedCourses from "../components/ITSoftware/FeaturedCourses";
import AllITSoftwareCoursesSection from "../components/ITSoftware/AllITSoftwareCoursesSection";
import CoursesToGetStarted from "../components/LifestylePage/CoursesToGetStarted";

// import { topics } from "../components/HealthAndFitnessCoursePage/data/mockData";
// import { featuredCourses } from "../components/HealthAndFitnessCoursePage/data/mockData";
// import { popularInstructors } from "../components/HealthAndFitnessCoursePage/data/mockData";
// import { courses as healthandfitnesscourses } from "../components/HealthAndFitnessCoursePage/data/mockData";
import {
  popularCourses,
  trendingCourses,
  popularHoverDetails,
  trendingHoverDetails,
  popularRatingData,
  trendingRatingData,
} from "../components/ITSoftware/data/mockData";
const ITSoftware = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CoursesToGetStarted
        title="Health & Fitness"
        popularCourses={popularCourses}
        trendingCourses={trendingCourses}
        popularHoverDetails={popularHoverDetails}
        trendingHoverDetails={trendingHoverDetails}
        popularRatingData={popularRatingData}
        trendingRatingData={trendingRatingData}
      />
      <ITSoftwareCourseSection />
      <PopularTopics />
      <FeaturedCourses />
      <PopularInstructors />
      <AllITSoftwareCoursesSection />
    </div>
  );
};

export default ITSoftware;
