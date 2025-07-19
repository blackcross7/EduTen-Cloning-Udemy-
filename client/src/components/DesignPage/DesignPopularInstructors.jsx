import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const instructors = [
  {
    name: "Daniel Walter Scott",
    title: "User Experience (UX) Design, Figma",
    rating: 4.7,
    students: "845,451",
    courses: 37,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Lindsay Marsh",
    title: "Graphic Design, Adobe Illustrator",
    rating: 4.6,
    students: "450,808",
    courses: 13,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Jaysen Batchelor",
    title: "Drawing, Digital Painting",
    rating: 4.6,
    students: "805,077",
    courses: 13,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "GameDev.tv Team",
    title: "Blender, Game Development Fundamentals",
    rating: 4.7,
    students: "1,211,630",
    courses: 71,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Creativity Unleashed",
    title: "Blender, 3D Modeling",
    rating: 4.5,
    students: "337,033",
    courses: 60,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Alex Cordebard",
    title: "Blender, 3D Animation",
    rating: 4.7,
    students: "89,253",
    courses: 16,
    image: "/assets/business/testimonial-person.png",
  },
];

const DesignPopularInstructors = () => {
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;
    updateScrollButtons();
    ref.addEventListener("scroll", updateScrollButtons);
    return () => ref.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 xl:px-20 py-10 relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">Popular Instructors</h2>
      <p className="text-gray-600 mb-6 text-sm">
        These real-world experts are highly rated by learners like you.
      </p>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-300 rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-300 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
          style={{ maxWidth: "1240px", margin: "0 auto" }}
        >
          {instructors.map((ins, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] border border-gray-200 rounded-md p-5 bg-white hover:bg-gray-50 transition-transform duration-200 cursor-pointer hover:scale-[1.015]"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-base text-gray-800">{ins.name}</h4>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">{ins.title}</p>
              <div className="text-sm text-gray-800 space-y-1">
                <p className="flex items-center gap-1 text-orange-700 font-semibold">
                  {ins.rating}
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span className="text-xs text-gray-600 font-normal">Instructor Rating</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  {ins.students} <span className="text-gray-700 font-normal">students</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  {ins.courses} <span className="text-gray-700 font-normal">courses</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPopularInstructors;
