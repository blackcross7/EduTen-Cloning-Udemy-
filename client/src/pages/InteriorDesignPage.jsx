import React from "react";
import InteriorDesignCourseGrid from "../components/InteriorDesignPage/InteriorDesignCourseGrid";
import InteriorFeaturedCourse from "../components/InteriorDesignPage/InteriorFeaturedCourse";
import InteriorPopularTopics from "../components/InteriorDesignPage/InteriorPopularTopics";
import InteriorPopularInstructors from "../components/InteriorDesignPage/InteriorPopularInstructors";
import AllInteriorCoursesSection from "../components/InteriorDesignPage/AllInteriorCoursesSection";

const InteriorDesignPage = () => {
  return (
    <div className="bg-gray-50">
      <InteriorDesignCourseGrid />
      <InteriorFeaturedCourse />
      <InteriorPopularTopics />
      <InteriorPopularInstructors />
      <AllInteriorCoursesSection />
    </div>
  );
};

export default InteriorDesignPage;
