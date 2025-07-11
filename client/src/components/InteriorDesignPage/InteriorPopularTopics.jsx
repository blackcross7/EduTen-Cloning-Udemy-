import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topics = [
  "Interior Design",
  "3D Modeling",
  "Lighting Design",
  "HVAC",
  "Blender",
  "SketchUp",
  "Color Theory",
  "Electrical Engineering",
  "Electricity",
  "Revit",
  "Home Staging",
  "Construction",
  "Fire Safety",
  "Architectural Design",
  "Home Improvement",
  "Building Information Modeling (BIM)",
  "Unreal Engine",
  "3D Rendering",
];

const InteriorPopularTopics = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular topics</h2>
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
          >
            <ChevronLeft className="text-gray-800 w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
          >
            <ChevronRight className="text-gray-800 w-6 h-6" />
          </button>

          {/* Scrollable Grid */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide p-2"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-max">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="w-[265px] h-[100px] px-4 py-6 bg-white border border-gray-300 rounded-md text-center font-semibold text-gray-900 shadow-sm flex items-center justify-center text-sm hover:bg-gray-50 transition duration-200 cursor-pointer hover:scale-[1.02]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorPopularTopics;
