import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const featuredCourses = [
  {
    image: "/assets/business/fiverr.png",
    title: "Fiverr Freelancing: Zero to Top Rated Seller",
    instructor: "Aasil Khan",
    description:
      "Learn how to start freelancing on Fiverr, get your first client, and scale to a full-time income.",
    updated: "June 2025",
    hours: "3.5",
    lectures: "33",
    level: "Beginner",
    rating: "4.7",
    students: "58",
    price: "₹1,709",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "/assets/business/quality.webp",
    title: "ChatGPT for Modern Quality Managers",
    instructor: "Sandeep Kumar, Quality Gurus Inc.",
    description:
      "Leverage GPT for data analysis, flowcharts, audit prep, and quality documentation",
    updated: "June 2025",
    hours: "2",
    lectures: "22",
    level: "All Levels",
    rating: "4.7",
    students: "14",
    price: "₹1,709",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "/assets/business/communication.jpg",
    title: "COMMUNICATION SKILLS: Communication Course (COMPLETE)",
    instructor: "Máyara Farche",
    description:
      "Master business communication, leadership, public speaking, and soft skills",
    updated: "June 2025",
    hours: "5.5",
    lectures: "46",
    level: "All Levels",
    rating: "5.0",
    students: "15",
    price: "₹1,749",
    badges: ["New"],
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

const FeaturedCourses = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prev]) => [
      (prev + newDirection + featuredCourses.length) % featuredCourses.length,
      newDirection,
    ]);
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 5000);
    return () => clearTimeout(timer);
  }, [page]);

  const course = featuredCourses[page];

  return (
    <section className="relative px-4 xl:px-20 py-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Featured courses</h2>
      <p className="text-gray-600 mb-6">
        Many learners enjoyed this highly rated course for its engaging content.
      </p>

      {/* Scroll buttons */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-xl border border-gray-300 rounded-full w-14 h-14 items-center justify-center hover:bg-gray-100"
      >
        <ChevronLeftIcon className="w-7 h-7 text-gray-800" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-xl border border-gray-300 rounded-full w-14 h-14 items-center justify-center hover:bg-gray-100"
      >
        <ChevronRightIcon className="w-7 h-7 text-gray-800" />
      </button>

      <div className="relative  overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={course.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="flex-shrink-0 w-full px-4 lg:px-0 snap-start">
              <div className="bg-gray-50 border rounded-xl border-gray-300 shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-[40%] h-56 md:h-[240px] object-cover m-4 rounded-lg shadow"
                />
                <div className="p-6 flex flex-col justify-between w-full md:w-[55%]">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">{course.description}</p>
                    <p className="text-xs text-gray-500 mb-1">By {course.instructor}</p>
                    <p className="text-xs text-gray-500 mb-3">
                      Updated <strong>{course.updated}</strong> · {course.hours} total hours ·{" "}
                      {course.lectures} lectures · {course.level}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
                      <span className="font-semibold text-yellow-600">{course.rating}</span>
                      <span className="text-xs text-gray-600">({course.students})</span>
                      {course.badges.map((badge, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-0.5 rounded ${
                            badge === "Premium"
                              ? "bg-purple-100 text-purple-700"
                              : badge === "New"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{course.price}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedCourses;
