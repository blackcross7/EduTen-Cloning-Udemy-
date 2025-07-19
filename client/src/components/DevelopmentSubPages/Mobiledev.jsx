import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    image: "/assets/DevelopmentSubPages/mobile1.jpg",
    title: "Android App Development",
    level: "Beginner",
    duration: "5h 10m",
  },
  {
    image: "/assets/DevelopmentSubPages/mobile2.jpeg",
    title: "iOS Swift Mastery",
    level: "Intermediate",
    duration: "7h 20m",
  },
  {
    image: "/assets/DevelopmentSubPages/mobile3.png",
    title: "React Native Bootcamp",
    level: "Advanced",
    duration: "9h 00m",
  },
];

const Mobiledev = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-slate-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Mobile Development Courses</h1>
        <p className="text-gray-600 text-lg">
          Build apps for Android, iOS, and cross-platform with modern tools.
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-center object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{course.level} • {course.duration}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all">
                View Course
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mobiledev;
