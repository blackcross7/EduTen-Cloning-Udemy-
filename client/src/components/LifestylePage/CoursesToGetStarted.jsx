import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CoursesToGetStarted = ({
  title,
  popularCourses,
  trendingCourses,
  popularHoverDetails,
  trendingHoverDetails,
  popularRatingData,
  trendingRatingData,
}) => {
  const [activeTab, setActiveTab] = useState("popular");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 4;

  // Pick data based on active tab
  const currentCourses =
    activeTab === "popular" ? popularCourses : trendingCourses;
  const currentHoverDetails =
    activeTab === "popular" ? popularHoverDetails : trendingHoverDetails;
  const currentRatingData =
    activeTab === "popular" ? popularRatingData : trendingRatingData;

  const handleNext = () => {
    if (startIndex + itemsPerPage < currentCourses.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleCourses = currentCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setStartIndex(0);
    setHoveredIndex(null);
  };

  return (
    <section className="text-gray-900 px-6 py-10">
      <div className="pl-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">{title} Courses</h1>
            <h2 className="text-xl text-black font-semibold">
              Courses to get you started
            </h2>
            <p className="text-gray-700 text-sm">
              Explore courses from experienced, real-world experts.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full border ${
                startIndex === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= currentCourses.length}
              className={`p-2 rounded-full border ${
                startIndex + itemsPerPage >= currentCourses.length
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            className={`pb-4 px-1 mr-8 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "popular"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("popular")}
          >
            Most popular
          </button>
          <button
            className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "trending"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("trending")}
          >
            Trending
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
        {visibleCourses.map((course, index) => {
          const actualIndex = startIndex + index;
          const isHovered = hoveredIndex === actualIndex;

          return (
            <div
              key={actualIndex}
              className="relative group w-full h-[400px]"
              style={{ perspective: "1000px" }} // Tailwind can't do perspective
              onMouseEnter={() => setHoveredIndex(actualIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front (Course Card) */}
                <div
                  className="absolute inset-0 border rounded-lg shadow-md overflow-hidden bg-white flex flex-col"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Image */}
                  <div className="w-full h-48 overflow-hidden rounded-t">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    <h2 className="text-md font-bold line-clamp-2">
                      {course.title}
                    </h2>
                    {course.subtitle && (
                      <p className="text-sm text-gray-600">
                        {course.subtitle}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-yellow-500 font-bold">4.7</span>
                      <div className="flex text-yellow-500 text-sm">
                        {[...Array(4)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                        <span>☆</span>
                      </div>
                      <span className="text-gray-600 text-xs">
                        ({currentRatingData[actualIndex]})
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-indigo-700">
                      Current price: {course.price}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                      {course.premium && (
                        <span className="bg-violet-200 text-violet-800 font-semibold px-2 py-1 rounded">
                          Premium
                        </span>
                      )}
                      {course.bestseller && (
                        <span className="bg-green-200 text-green-800 font-semibold px-2 py-1 rounded">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back (Hover Details) */}
                <div
                  className="absolute inset-0 bg-white border-2 border-blue-600 rounded-xl shadow-xl p-4 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      {currentHoverDetails[actualIndex]?.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                      {currentHoverDetails[actualIndex].premium && (
                        <span className="bg-violet-200 text-violet-800 text-xs font-semibold px-2 py-1 rounded">
                          Premium
                        </span>
                      )}
                      {currentHoverDetails[actualIndex].bestseller && (
                        <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-1">
                      Updated {currentHoverDetails[actualIndex].updated}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>{currentHoverDetails[actualIndex].duration}</strong>{" "}
                      • {currentHoverDetails[actualIndex].level} • Subtitles
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {currentHoverDetails[actualIndex]?.description}
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {currentHoverDetails[actualIndex]?.points.map(
                        (point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <button className="mt-4 bg-violet-600 text-white py-2 px-4 w-full rounded hover:bg-violet-700 transition">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesToGetStarted;
