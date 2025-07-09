import React from "react";
import CourseFilters from "./CourseFilters";
import "./styles.css";

const mockFilteredCourses = [
    {
      title: "ChatGPT: Complete ChatGPT Course For Work 2025 (Ethically)!",
      instructor: "Steve Ballinger, MBA",
      description:
        "Master ChatGPT for productivity, ethical usage, and smart AI workflows at work.",
      rating: 4.4,
      reviews: 114912,
      duration: "8 total hours",
      lectures: 65,
      level: "All Levels",
      badges: ["Bestseller"],
      price: 659,
      originalPrice: 4129,
    },
    {
      title: "Productivity and Time Management for the Overwhelmed",
      instructor: "Josh Paulsen",
      description:
        "A practical guide to beat procrastination and get more done in less time.",
      rating: 4.6,
      reviews: 94371,
      duration: "2 total hours",
      lectures: 32,
      level: "Beginner",
      badges: [],
      price: 469,
      originalPrice: 3219,
    },
    {
      title: "Psychology of Diversity and Unconscious Bias",
      instructor: "Andrew Luttrell, Ph.D.",
      description:
        "Understand stereotypes, prejudice, and discrimination and how to reduce their influence.",
      rating: 4.6,
      reviews: 29422,
      duration: "2.5 total hours",
      lectures: 33,
      level: "All Levels",
      badges: ["Highest Rated"],
      price: 609,
      originalPrice: 4229,
    },
    {
      title: "Successful Negotiation: Master Your Negotiating Skills",
      instructor: "Chris Croft",
      description:
        "Master powerful negotiation techniques for work and life success.",
      rating: 4.6,
      reviews: 28800,
      duration: "2.5 total hours",
      lectures: 44,
      level: "All Levels",
      badges: ["Bestseller"],
      price: 469,
      originalPrice: 3219,
    },
    {
      title: "Business Communication Skills: Business Writing & Grammar",
      instructor: "Alex Genadinik",
      description:
        "Sharpen your business writing, grammar, and communication skills.",
      rating: 4.5,
      reviews: 28002,
      duration: "19.5 total hours",
      lectures: 301,
      level: "Beginner",
      badges: ["Bestseller"],
      price: 559,
      originalPrice: 3849,
    },
    {
      title: "Goal Setting Mastery Course",
      instructor: "Himesh Trivedi",
      description:
        "Define your WHY and align it to your goals & create a step-by-step blueprint to plan, implement & achieve them.",
      rating: 4.5,
      reviews: 27825,
      duration: "1.5 total hours",
      lectures: 26,
      level: "All Levels",
      badges: [],
      price: 609,
      originalPrice: 3049,
    },
    {
      title: "Workplace Communication: You Can Speak Up at Meetings!",
      instructor: "TJ Walker",
      description:
        "Learn to speak up confidently and look & sound your best in professional meetings.",
      rating: 4.6,
      reviews: 27744,
      duration: "34.5 total hours",
      lectures: 717,
      level: "All Levels",
      badges: ["Bestseller"],
      price: 559,
      originalPrice: 3849,
    }
  ];
  
const FilteredCourses = () => {
  return (
    <div className="filtered-wrapper">
      {/* Section Heading */}
      <h2 className="section-heading">All Personal Development Courses</h2>

      {/* Two-column Layout */}
      <div className="filtered-section">
        <div className="filters-column">
          <CourseFilters />
        </div>

        <div className="results-column">
          <div className="results-header">
            <strong>100 results</strong> • Sort by{" "}
            <span className="sort-pill">Most Popular</span>
          </div>

          {mockFilteredCourses.map((course, idx) => (
            <div key={idx} className="filtered-course-card">
              <h3 className="course-title">
                {course.title}
                {course.badges.length > 0 && (
                  <span
                    className={`badge ${course.badges[0].replace(/\s+/g, "")}`}
                  >
                    {course.badges[0]}
                  </span>
                )}
              </h3>
              <p className="expanded-description">{course.description}</p>
              <p className="filtered-instructor">{course.instructor}</p>
              <p className="filtered-rating">
                <strong>⭐ {course.rating}</strong> (
                {course.reviews.toLocaleString()} reviews)
              </p>
              <p className="filtered-meta">
                <strong>📹 Video Duration:</strong> {course.duration} •{" "}
                {course.lectures} lectures • {course.level}
              </p>
              <p className="filtered-price">
                ₹{course.price}
                <span className="original-price"> ₹{course.originalPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredCourses;
