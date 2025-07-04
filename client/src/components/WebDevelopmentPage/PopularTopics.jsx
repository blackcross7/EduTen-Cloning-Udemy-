import React, { useState } from "react";
import { PlayCircle, Star, Infinity } from 'lucide-react';



// ---------------- Topics Section ----------------
const topics = [
  "Web Development", "React JS", "Next.js", "ASP.NET Core", "HTML",
  "JavaScript", "Angular", "CSS", "Typescript", "Node.Js",
  "HTML", "Redux Framework", "Laravel", "Spring Boot", "Vue JS",
  "Node.Js", "WordPress", "Django", "PHP (programming language)", "Microservices",
];

// ---------------- Instructors Section ----------------
const instructors = [
  {
    name: "Jonas Schmedtmann", skills: "JavaScript, React JS", rating: 4.7,
    students: "2,156,311", courses: 7, image: "/assets/WebDevelopmentPage/INS3.jpeg"
  },
  {
    name: "Maximilian", skills: "Angular, Next.js", rating: 4.6,
    students: "3,363,753", courses: 65, image: "/assets/WebDevelopmentPage/INS1.jpg"
  },
  {
    name: "Academind", skills: "Docker, Django", rating: 4.6,
    students: "3,325,184", courses: 48, image: "/assets/WebDevelopmentPage/INS4.jpeg"
  },
  {
    name: "Colt Steele", skills: "Web Development, HTML", rating: 4.7,
    students: "1,895,214", courses: 30, image: "/assets/WebDevelopmentPage/INS5.jpeg"
  },
    {
    name: "Academind", skills: "Docker, Django", rating: 4.6,
    students: "3,325,184", courses: 48, image: "/assets/WebDevelopmentPage/INS4.jpeg"
  },
  {
    name: "Colt Steele", skills: "Web Development, HTML", rating: 4.7,
    students: "1,895,214", courses: 30, image: "/assets/WebDevelopmentPage/INS5.jpeg"
  },
  {
    name: "Stephen Grider", skills: "React JS, Node.Js", rating: 4.6,
    students: "1,524,958", courses: 37, image: "/assets/WebDevelopmentPage/INS6.jpeg"
  },
  {
    name: "Brad Traversy", skills: "JavaScript, Next.js", rating: 4.6,
    students: "530,583", courses: 25, image: "/assets/WebDevelopmentPage/INS2.jpg"
  },
];

const ITEMS_PER_PAGE = 10;
const INSTRUCTORS_PER_PAGE = 4;

const PopularTopics = () => {
  const [topicPage, setTopicPage] = useState(0);
  const [instructorPage, setInstructorPage] = useState(0);

  const topicStart = topicPage * ITEMS_PER_PAGE;
  const currentTopics = topics.slice(topicStart, topicStart + ITEMS_PER_PAGE);

  const instructorStart = instructorPage * INSTRUCTORS_PER_PAGE;
  const currentInstructors = instructors.slice(instructorStart, instructorStart + INSTRUCTORS_PER_PAGE);

  const hasNextTopics = topicStart + ITEMS_PER_PAGE < topics.length;
  const hasPrevTopics = topicPage > 0;

  const hasNextInstructors = instructorStart + INSTRUCTORS_PER_PAGE < instructors.length;
  const hasPrevInstructors = instructorPage > 0;

  return (
    <section className="py-8 px-4 bg-white">
      {/* ------------------- Popular Topics ------------------- */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Popular topics</h2>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {currentTopics.map((topic, index) => (
            <div
              key={index}
              className="border text-center font-semibold text-gray-800 py-3 px-2 rounded-md shadow hover:bg-gray-100 transition text-sm sm:text-base"
            >
              {topic}
            </div>
          ))}
        </div>

        {/* Arrows for Topics */}
        {hasNextTopics && (
          <button
            onClick={() => setTopicPage(topicPage + 1)}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            &gt;
          </button>
        )}
        {hasPrevTopics && (
          <button
            onClick={() => setTopicPage(topicPage - 1)}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            &lt;
          </button>
        )}
      </div>

      {/* ------------------- Popular Instructors ------------------- */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Popular Instructors</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          These real-world experts are highly rated by learners like you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentInstructors.map((inst, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start border rounded-lg p-4 shadow-sm hover:shadow-md transition relative bg-white"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-14 h-14 rounded-full object-cover mt-1"
              />
              <div className="min-w-0">
                <h3 className="text-base font-semibold mb-1">{inst.name}</h3>
                <p className="text-sm text-gray-700 mb-1">{inst.skills}</p>
                <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                  <span className="font-medium text-gray-800">{inst.rating}</span>
                  <span className="text-yellow-600">⭐</span>
                  <span className="text-gray-600">Instructor Rating</span>
                </div>
                <p className="text-sm text-gray-600">{inst.students} students</p>
                <p className="text-sm text-gray-600">{inst.courses} courses</p>
              </div>

              {/* ← Arrow */}
              {hasPrevInstructors && idx === 0 && (
                <button
                  onClick={() => setInstructorPage(instructorPage - 1)}
                  className="absolute left-[-22px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
                >
                  &lt;
                </button>
              )}

              {/* → Arrow */}
              {hasNextInstructors && idx === currentInstructors.length - 1 && (
                <button
                  onClick={() => setInstructorPage(instructorPage + 1)}
                  className="absolute right-[-22px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
                >
                  &gt;
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
