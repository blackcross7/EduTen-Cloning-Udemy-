import React from "react";
import DesignCourseGrid from "../components/DesignPage/DesignCourseGrid";
import FeaturedCoursesDesignPage from "../components/DesignPage/FeaturedCoursesDesignPage";
import DesignPopularTopics from "../components/DesignPage/DesignPopularTopics";
import DesignPopularInstructors from "../components/DesignPage/DesignPopularInstructors";
import AllDesignCoursesSection from "../components/DesignPage/AllDesignCoursesSection";

const DesignPage = () => {
  return (
    <div className="pt-8">
      <DesignCourseGrid />
      <FeaturedCoursesDesignPage />
      <DesignPopularTopics />
      <DesignPopularInstructors />
      <AllDesignCoursesSection />
    </div>
  );
};

export default DesignPage;
