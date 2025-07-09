import React, { useState } from "react";
import "./styles.css";

// Section Components
import HeroBanner from "./HeroBanner";
import SubCategoryBar from "./SubCategoryBar";
import TabsSection from "./TabsSection";
import CourseCard from "./CourseCard";
import FeaturedCourseCard from "./FeaturedCourseCard";
import PopularTopics from "./PopularTopics";
import PopularInstructors from "./PopularInstructors";
import FilteredCourses from "./FilteredCourses";
import SkillPromoSection from "./SkillPromoSection"; // ✅ NEW

// Data
import { dummyCourses } from "./categories";

const PersonalDevPage = () => {
  const [activeTab, setActiveTab] = useState("Most Popular");

  const filteredCourses = dummyCourses.filter(
    (course) => course.tag === activeTab
  );

  return (
    <div className="personal-dev-wrapper">
      {/* 🔼 Subcategories Above Hero */}
      <SubCategoryBar />

      {/* 🏁 Hero Section */}
      <HeroBanner />

      {/* 📂 Tabs for Sorting */}
      <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 🧱 Courses Grid */}
      <div className="course-card-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* 📌 Featured Courses Heading */}
      <h2 className="section-heading">Featured Courses</h2>

      {/* 🌟 Highlighted Featured Course */}
      <FeaturedCourseCard />

      {/* 🧭 Popular Topics */}
      <PopularTopics />

      {/* 👨‍🏫 Popular Instructors */}
      <PopularInstructors />

      {/* 🧩 Filtered Courses with Sidebar */}
      <FilteredCourses />

      {/* 🧠 Skill Promotion Section */}
      <SkillPromoSection />
    </div>
  );
};

export default PersonalDevPage;
