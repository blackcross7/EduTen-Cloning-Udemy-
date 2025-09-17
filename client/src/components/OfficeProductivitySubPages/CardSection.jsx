// CardSection.jsx
import React, { useRef, useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CourseTooltip from "./CourseTooltip";

const CardSection = ({ courses }) => {
  const containerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const isCardHoveredRef = useRef(false);
  const isTooltipHoveredRef = useRef(false);

  const [activeTab, setActiveTab] = useState("Most popular");
  const [hoveredCourse, setHoveredCourse] = useState(null); // { ..course, coords, position }

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openTooltip = (e, course, desiredSide) => {
    // clear any closing timers
    clearTimeout(hoverTimeoutRef.current);
    isCardHoveredRef.current = true;

    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = 288; // w-72 => 72 * 4 = 288px
    const centerY = rect.top + window.scrollY + rect.height / 2;

    // smart flip if there's not enough space on the desired side
    let side = desiredSide;
    let left;
    if (desiredSide === "right") {
      const potentialLeft = rect.right + window.scrollX + 12;
      if (potentialLeft + tooltipWidth > window.innerWidth - 12) {
        side = "left";
        left = rect.left + window.scrollX - tooltipWidth - 12;
      } else {
        left = potentialLeft;
      }
    } else {
      const potentialLeft = rect.left + window.scrollX - tooltipWidth - 12;
      if (potentialLeft < 12) {
        side = "right";
        left = rect.right + window.scrollX + 12;
      } else {
        left = potentialLeft;
      }
    }

    // keep inside viewport horizontally as a last resort
    const padding = 8;
    if (left < padding) left = padding;
    if (left + tooltipWidth > window.innerWidth - padding)
      left = window.innerWidth - tooltipWidth - padding;

    setHoveredCourse({
      ...course,
      position: side,
      coords: { top: centerY, left },
    });
  };

  const scheduleClose = () => {
    // called when leaving card area
    isCardHoveredRef.current = false;
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isCardHoveredRef.current && !isTooltipHoveredRef.current) {
        setHoveredCourse(null);
      }
    }, 150); // small delay to allow moving into tooltip
  };

  // tooltip enter/leave handlers (passed down to CourseTooltip)
  const handleTooltipEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    isTooltipHoveredRef.current = true;
  };

  const handleTooltipLeave = () => {
    isTooltipHoveredRef.current = false;
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isCardHoveredRef.current && !isTooltipHoveredRef.current) {
        setHoveredCourse(null);
      }
    }, 150);
  };

  return (
    <div className="relative mx-6">
      <SectionHeader
        tabs={["Most popular", "Trending"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/3 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
      >
        <FaAngleLeft />
      </button>
      {courses?.length > 4 && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/3 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <FaAngleRight />
        </button>
      )}

      {/* Courses row (scrollable) */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth mt-4 snap-x snap-mandatory relative no-scrollbar"
      >
        {courses.map((course, index) => {
          const posInRow = (index % 4) + 1; // 1..4
          // according to your rule: 1,2 open to right; 3,4 open to left (you said earlier 1,2 left, 3,4 right — adapt if needed)
          const tooltipSide = posInRow <= 2 ? "right" : "left";

          return (
            <div
              key={course.id}
              className="min-w-[250px] md:min-w-[300px] lg:min-w-[280px] xl:min-w-[250px] max-w-[300px] flex-shrink-0 snap-start relative"
              onMouseEnter={(e) => openTooltip(e, course, tooltipSide)}
              onMouseLeave={scheduleClose}
            >
              <Card {...course} />
            </div>
          );
        })}
      </div>

      {/* Portal Tooltip */}
      {hoveredCourse && (
        <CourseTooltip
          course={hoveredCourse}
          position={hoveredCourse.position}
          coords={hoveredCourse.coords}
          onMouseEnter={handleTooltipEnter}
          onMouseLeave={handleTooltipLeave}
        />
      )}
    </div>
  );
};

export default CardSection;
