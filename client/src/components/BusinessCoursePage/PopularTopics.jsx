import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topics = [
  "PMI Project Management Professional (PMP)",
  "Project Management",
  "PMI Certified Associate in Project Management (CAPM)",
  "PMI PMBOK",
  "Real Estate Investing",
  "Microsoft Power BI",
  "SQL",
  "Data Modeling",
  "Data Analysis",
  "Business Analysis",
  "ChatGPT",
  "Human Resources",
  "Communication Skills",
  "Business Strategy",
  "Product Management",
  "Artificial Intelligence (AI)",
  "Sales Skills",
  "Leadership",
];

const PopularTopics = () => {
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
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular topics</h2>
        <div className="relative">
          {/* Scroll buttons */}
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

          {/* Scrollable grid */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide px-2"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-max">
              {topics.map((topic, i) => (
                <div
                  key={i}
                  className="w-[265px] h-[100px] px-4 py-6 bg-white border border-gray-300 rounded-md text-center font-semibold text-gray-900 shadow-sm flex items-center justify-center text-sm"
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

export default PopularTopics;
