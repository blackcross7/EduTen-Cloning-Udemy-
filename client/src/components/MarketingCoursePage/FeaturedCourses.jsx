import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const featuredCourses = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    title: "Digital Marketing Masterclass: Get Your First 1,000 Customers",
    instructor: "Evan Kimbrell",
    description:
      "Learn digital marketing from scratch and build a complete marketing strategy that drives real results.",
    updated: "June 2025",
    hours: "6.5",
    lectures: "52",
    level: "Beginner",
    rating: "4.8",
    students: "4,158",
    price: "₹1,749",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "SEO Masterclass: Rank #1 on Google in 2025",
    instructor: "Brian Dean",
    description:
      "Master SEO techniques to rank your website on the first page of Google and drive organic traffic.",
    updated: "June 2025",
    hours: "4.5",
    lectures: "38",
    level: "Intermediate",
    rating: "4.9",
    students: "3,401",
    price: "₹1,699",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    title: "Social Media Marketing: Complete Strategy for 2025",
    instructor: "Lindsay Marsh",
    description:
      "Build a powerful social media presence and create engaging content that converts followers into customers.",
    updated: "June 2025",
    hours: "5.5",
    lectures: "45",
    level: "All Levels",
    rating: "5.0",
    students: "2,985",
    price: "₹1,709",
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
    <section className="relative px-4 xl:px-20 py-10 bg-white rounded-xl shadow-lg my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Featured courses</h2>
      <p className="text-gray-600 mb-6">
        Many learners enjoyed this highly rated course for its engaging content.
      </p>

      {/* Scroll buttons */}
      <button
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-xl border border-gray-300 rounded-full w-14 h-14 items-center justify-center hover:bg-gray-100 transition duration-200"
      >
        <ChevronLeftIcon className="w-7 h-7 text-gray-800" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-xl border border-gray-300 rounded-full w-14 h-14 items-center justify-center hover:bg-gray-100 transition duration-200"
      >
        <ChevronRightIcon className="w-7 h-7 text-gray-800" />
      </button>

      <div className="relative overflow-hidden">
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
              <div className="bg-gray-50 border rounded-xl border-gray-300 shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-[40%] h-56 md:h-[240px] object-cover m-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="p-6 flex flex-col justify-between w-full md:w-[55%]">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug transition duration-200 hover:text-purple-700">
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