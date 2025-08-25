import React from "react";
import CourseCard from "../PersonalDevelopment/CourseCard"; // adjust path if needed
import { careerDevelopmentCourses } from "./data"; // adjust path if needed

export default function CareerPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🎯 Career Development Courses</h1>

      {careerDevelopmentCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {careerDevelopmentCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <p>No courses available at the moment.</p>
      )}
    </div>
  );
}
