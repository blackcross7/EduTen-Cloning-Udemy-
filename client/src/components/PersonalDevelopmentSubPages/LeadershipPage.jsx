import React from "react";
import CourseCard from "../PersonalDevelopment/CourseCard"; // adjust the path if needed
import { leadershipCourses } from "./data"; // adjust path based on your file structure

export default function LeadershipPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📘 Leadership Courses</h1>

      {leadershipCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leadershipCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <p>No leadership courses available right now.</p>
      )}
    </div>
  );
}
