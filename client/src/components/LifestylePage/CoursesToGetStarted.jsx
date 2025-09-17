import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseDetailCard = ({ details, popupDirection, isMobile }) => {
  return (
    <div
      className={`${
        isMobile
          ? "mt-2 w-full"
          : `absolute ${
              popupDirection === "right"
                ? "left-full ml-4 top-0"
                : "right-full mr-4 top-0"
            } w-72 sm:w-80`
      } bg-white border rounded-xl shadow-2xl p-4 z-20`}
    >
      {/* Arrow for desktop */}
      {!isMobile && (
        <div
          className={`absolute w-4 h-4 bg-white transform rotate-45
            ${
              popupDirection === "right"
                ? "top-6 -left-2 border-b border-l border-gray-300"
                : "top-6 -right-2 border-t border-r border-gray-300"
            }
          `}
        />
      )}

      <h2 className="text-md sm:text-lg font-bold text-gray-900 mb-2">
        {details?.title}
      </h2>
      <div className="flex items-center gap-2 mb-2">
        {details?.premium && (
          <span className="bg-[#3a0099] text-white text-xs font-semibold px-2 py-1 rounded">
            Premium
          </span>
        )}
        {details?.bestseller && (
          <span className="bg-[#a7ebce] text-green-800 text-xs font-semibold px-2 py-1 rounded">
            Bestseller
          </span>
        )}
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mb-1">
        Updated {details?.updated}
      </p>
      <p className="text-xs sm:text-sm text-gray-700 mb-2">
        <strong>{details?.duration}</strong> • {details?.level} • Subtitles
      </p>
      <p className="text-xs sm:text-sm text-gray-700 mb-2 line-clamp-3">
        {details?.description}
      </p>
      <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
        {details?.points?.slice(0, 3).map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span className="line-clamp-2">{point}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-[#3a0099] text-white py-2 px-4 w-full rounded hover:bg-violet-700 transition text-sm sm:text-base">
        Add to Cart
      </button>
    </div>
  );
};

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
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [popupDirection, setPopupDirection] = useState("right");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else if (width < 1280) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleMouseEnter = (index, e) => {
    if (isMobile) return;
    setHoveredIndex(index);

    const cardRect = e.currentTarget.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const popupWidth = 320;

    setPopupDirection(
      cardRect.right + popupWidth > screenWidth ? "left" : "right"
    );
  };

  const toggleExpand = (index) => {
    if (!isMobile) return;
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="text-gray-900 px-4 sm:px-6 py-8 sm:py-10">
      <div className="pl-0 sm:pl-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">{title} Courses</h1>
            <h2 className="text-lg sm:text-xl text-black font-semibold">
              Courses to get you started
            </h2>
            <p className="text-gray-700 text-sm">
              Explore courses from experienced, real-world experts.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-2 self-end sm:self-auto">
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

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {["popular", "trending"].map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-1 mr-4 sm:mr-8 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab === "popular" ? "Most popular" : "Trending"}
            </button>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 items-start">
        {visibleCourses.map((course, index) => {
          const actualIndex = startIndex + index;
          const isHovered = hoveredIndex === actualIndex;
          const isExpanded = expandedIndex === actualIndex;

          return (
            <div
              key={actualIndex}
              className="relative group w-full h-auto sm:h-[400px]"
              onMouseEnter={(e) => handleMouseEnter(actualIndex, e)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => toggleExpand(actualIndex)}
            >
              {/* Base card */}
              <div className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col h-full">
                <div className="w-full h-40 sm:h-48 overflow-hidden rounded-t">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 space-y-2">
                  <h2 className="text-sm sm:text-md font-bold line-clamp-2">
                    {course.title}
                  </h2>
                  {course.subtitle && (
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {course.subtitle}
                    </p>
                  )}
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <span className="text-[#cd7710] font-bold">4.7</span>
                    <div className="flex text-[#cd7710] text-xs sm:text-sm">
                      {[...Array(4)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      <span>☆</span>
                    </div>
                    <span className="text-gray-600 text-xs">
                      ({currentRatingData[actualIndex]})
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-indigo-700">
                    Current price: {course.price}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs mt-2">
                    {course.premium && (
                      <span className="bg-[#3a0099] text-white font-semibold px-2 py-1 rounded">
                        Premium
                      </span>
                    )}
                    {course.bestseller && (
                      <span className="bg-[#a7ebce] text-green-800 font-semibold px-2 py-1 rounded">
                        Bestseller
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover / Expanded */}
              {(isHovered && !isMobile) || (isExpanded && isMobile) ? (
                <CourseDetailCard
                  details={currentHoverDetails[actualIndex]}
                  popupDirection={popupDirection}
                  isMobile={isMobile}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesToGetStarted;
