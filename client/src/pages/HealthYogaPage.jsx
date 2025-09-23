import React from "react";
import PopularTopics from "../components/LifestylePage/PopularTopics";
import PopularInstructors from "../components/LifestylePage/PopularInstructors";
import AllCourses from "../components/LifestylePage/AllCourses";
import CoursesToGetStarted from "../components/LifestylePage/CoursesToGetStarted";
import FeaturedCourses from "../components/LifestylePage/FeaturedCourses";

import { topics } from "../components/HealthAndFitnessCoursePage/data/mockDataYoga";
import { featuredCourses } from "../components/HealthAndFitnessCoursePage/data/mockDataYoga";
import { popularInstructors } from "../components/HealthAndFitnessCoursePage/data/mockDataYoga";
import { courses as healthandfitnesscourses } from "../components/HealthAndFitnessCoursePage/data/mockDataYoga";
import {
  popularCourses,
  trendingCourses,
  popularHoverDetails,
  trendingHoverDetails,
  popularRatingData,
  trendingRatingData,
} from "../components/HealthAndFitnessCoursePage/data/mockDataYoga";

const HealthYogaPage = () => {
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
        <FeaturedCourses courses={featuredCourses} />
        <PopularTopics topics = {topics}/>
        <PopularInstructors instructors={popularInstructors}/>
        <AllCourses heading="All Health Courses" courses={healthandfitnesscourses} />
      </div>
    </main>
  );
};

export default HealthYogaPage;
