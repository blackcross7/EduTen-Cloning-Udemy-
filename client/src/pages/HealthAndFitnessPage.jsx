import React from "react";
import HealthAndFitnessCourseSection from '../components/HealthAndFitnessCoursePage/HealthAndFitnessCourseSection';
import FeaturedCourses from "../components/HealthAndFitnessCoursePage/FeaturedCourses";
import PopularTopics from "../components/HealthAndFitnessCoursePage/PopularTopics";
import PopularInstructors from "../components/HealthAndFitnessCoursePage/PopularInstructors";
import AllHealthAndFitnessCoursesSection from "../components/HealthAndFitnessCoursePage/AllHealthAndFitnessCoursesSection";

const HealthAndFitnessPage = () => {
  return (
    <main className="bg-white text-gray-800 py-10">
      <div className="max-w-[1440px] w-full px-4 sm:px-8 lg:px-12 mx-auto">
        <HealthAndFitnessCourseSection />
        <FeaturedCourses />
        <PopularTopics />
        <PopularInstructors />
        <AllHealthAndFitnessCoursesSection />
      </div>
    </main>
  );
};

export default HealthAndFitnessPage;
