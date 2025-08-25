import React from "react";
import CourseCard from "../PersonalDevelopment/CourseCard"; // Adjust path as needed
import { emotionalIntelligenceCourses } from "./data"; // Adjust path if needed

export default function EmotionalIntelligencePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        🧠 Emotional Intelligence Courses
      </h1>

      {emotionalIntelligenceCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {emotionalIntelligenceCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <p>No emotional intelligence courses available right now.</p>
      )}
    </div>
  );
}
