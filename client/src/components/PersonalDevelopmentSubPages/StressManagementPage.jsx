import React from "react";
import CourseCard from "../PersonalDevelopment/CourseCard"; // Adjust path as needed
import { stressManagementCourses } from "./data"; // Adjust path as needed

export default function StressManagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🌿 Stress Management Courses</h1>

      {stressManagementCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stressManagementCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <p>No stress management courses available right now.</p>
      )}
    </div>
  );
}
