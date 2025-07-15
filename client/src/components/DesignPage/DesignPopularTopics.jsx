import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topics = [
  "Blender", "Figma", "User Experience (UX) Design", "Drawing", "Canva",
  "Graphic Design", "3D Modeling", "AutoCAD", "Adobe Photoshop", "Revit",
  "Adobe Illustrator", "Web Design", "SOLIDWORKS", "Procreate Digital Illustration App",
  "Adobe After Effects", "Autodesk Fusion", "Motion Graphics", "Unreal Engine"
];

const DesignPopularTopics = () => {
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
    <section className="relative py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular topics</h2>
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full hover:bg-gray-100 w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeft className="text-gray-800 w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full hover:bg-gray-100 w-12 h-12 flex items-center justify-center"
          >
            <ChevronRight className="text-gray-800 w-6 h-6" />
          </button>

          {/* Scrollable grid */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide p-2"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-max pr-4">
              {topics.map((topic, i) => (
                <div
                  key={i}
                  className="w-[200px] h-[90px] px-4 py-6 bg-white border border-gray-300 rounded-md text-center font-semibold text-gray-900 shadow-sm flex items-center justify-center text-[15px] hover:bg-gray-50 transition duration-200 cursor-pointer hover:scale-[1.02]"
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

export default DesignPopularTopics;
