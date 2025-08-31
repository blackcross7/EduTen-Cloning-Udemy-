import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Updated list of topics for photography and video
const topics = [
  "Camera Basics",
  "Photo Editing",
  "Video Editing",
  "Drone Photography",
  "Portraiture",
  "Street Photography",
  "Wildlife Photography",
  "Lighting Techniques",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Final Cut Pro",
  "Storytelling in Film",
  "Color Grading",
  "Cinematography",
  "Mobile Videography",
];

const PopularTopics = () => {
  const scrollRef = useRef(null);

  return (
    <div className="max-w-5xl px-4 py-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Popular Photography & Video Topics
      </h2>

      {/* Scrollable grid */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
      >
        <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-max">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white text-black border rounded-md flex items-center justify-center text-center cursor-pointer hover:border-gray-500 hover:bg-gray-100 transition-colors duration-300 w-40 h-16 text-sm flex-shrink-0"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTopics;
