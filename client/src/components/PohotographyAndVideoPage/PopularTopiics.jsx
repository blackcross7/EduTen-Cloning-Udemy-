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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-5xl px-4 py-10 mx-auto relative">
      <h2 className="text-2xl font-bold mb-6">
        Popular Photography & Video Topics
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Grid wrapper */}
        <div ref={scrollRef} className="overflow-hidden scroll-smooth">
          {/* Exactly 2 rows & 5 cols */}
          <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-max">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-white text-black border rounded-md flex items-center justify-center text-center cursor-pointer hover:border-gray-500 hover:bg-gray-100 transition-colors duration-300 w-40 h-16 text-sm"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PopularTopics;
