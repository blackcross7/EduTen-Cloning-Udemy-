import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const instructors = [
  {
    name: "Erikka Fogleman",
    title: "Interior Design, Color Theory",
    rating: 4.6,
    students: "108,035",
    courses: 10,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Arch Gyan",
    title: "Interior Design, SketchUp",
    rating: 4.6,
    students: "46,804",
    courses: 9,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "ExpertEase Education",
    title: "Interior Design, Home Improvement",
    rating: 4.4,
    students: "162,723",
    courses: 70,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "United Engineering",
    title: "AutoCAD Electrical, DIALux",
    rating: 4.4,
    students: "24,519",
    courses: 10,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "WerkStrich – Zeichnen fürs Handwerk",
    title: "SketchUp, 3D Sculpting",
    rating: 4.7,
    students: "10,279",
    courses: 6,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Studio Design",
    title: "Interior Design, Business Communication",
    rating: 4.3,
    students: "24,238",
    courses: 6,
    image: "/assets/business/testimonial-person.png",
  },
];

const InteriorPopularInstructors = () => {
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
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
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white text-gray-900 px-6 pb-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Instructors</h2>
      <p className="text-gray-600 mb-6 text-sm">
        These real-world experts are highly rated by learners like you.
      </p>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-300 rounded-full p-2"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-300 rounded-full p-2"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          style={{ maxWidth: "1240px", margin: "0 auto" }}
        >
          {instructors.map((ins, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[297px] border border-gray-300 rounded-md p-4 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-800 leading-tight">
                    {ins.name}
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{ins.title}</p>
              <div className="text-sm text-gray-700">
                <p className="flex items-center gap-1 text-orange-700 font-semibold">
                  {ins.rating}
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span className="text-xs font-medium text-gray-600">Instructor Rating</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  {ins.students} <span className="font-normal text-gray-700">students</span>
                </p>
                <p className="text-sm font-semibold text-black">
                  {ins.courses} <span className="font-normal text-gray-700">courses</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorPopularInstructors;
