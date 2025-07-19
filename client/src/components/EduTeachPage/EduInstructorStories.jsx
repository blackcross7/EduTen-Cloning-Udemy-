import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Madhavi Aarikati",
    role: "Web Development Instructor",
    text: "Teaching on EduTeach has allowed me to reach students globally. It's rewarding to know I’m part of their learning journey and growth.",
    image: "/assets/EduTeachPage/instructor1.png",
  },
  {
    name: "Jitha Sri",
    role: "AI & Machine Learning Mentor",
    text: "Being a mentor means helping others build their dream careers. EduTeach made it simple to share my expertise with passionate learners.",
    image: "/assets/EduTeachPage/instructor2.jpg",
  },
  {
    name: "Suriya ",
    role: "Cybersecurity Expert",
    text: "I love the flexibility EduTeach gives. I can teach from anywhere, anytime, and still make a real impact in students’ lives.",
    image: "/assets/EduTeachPage/instructor3.jpg",
  },
];

const EduInstructorStories = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, role, text, image } = testimonials[index];

  return (
    <div className="bg-[#f7f7f7] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-[700px] h-auto flex flex-col sm:flex-row items-center shadow-sm overflow-hidden rounded">

        {/* Left: Image Block */}
        <div className="w-full sm:w-1/2 h-[300px] sm:h-[340px] flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-[250px] sm:w-[280px] h-[300px] sm:h-[340px] object-cover rounded shadow-md"
          />
        </div>

        {/* Right: Text Block */}
        <div className="w-full sm:w-1/2 bg-[#f7f7f7] px-6 py-6 relative flex flex-col justify-between">
          <div>
            <p className="text-[18px] sm:text-[20px] text-gray-800 mb-4 leading-relaxed italic">
              “{text}”
            </p>
            <p className="font-bold text-gray-900 text-base sm:text-lg">{name}</p>
            <p className="text-sm sm:text-[15px] text-gray-600">{role}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-6 bottom-6 flex gap-4">
            {index > 0 && (
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow hover:bg-purple-100 transition"
              >
                <FaArrowLeft className="text-gray-700 text-lg" />
              </button>
            )}
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow hover:bg-purple-100 transition"
            >
              <FaArrowRight className="text-gray-700 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduInstructorStories;
