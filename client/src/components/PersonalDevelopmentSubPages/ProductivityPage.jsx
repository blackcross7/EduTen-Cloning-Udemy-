import React from "react";
import CourseCard from "../PersonalDevelopment/CourseCard"; // Adjust path if needed
import { productivityCourses } from "./data"; // Adjust path if data.js is in the same folder

export default function ProductivityPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📈 Productivity Courses</h1>

      {productivityCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productivityCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <p>No productivity courses available right now.</p>
      )}
    </div>
  );
}
