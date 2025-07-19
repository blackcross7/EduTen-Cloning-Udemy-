import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const featuredCourses = [
  {
    image: "/assets/itsoftware/ros2_control.jpg",
    title: "ROS 2 - Hardware and ros2_control, Step by Step",
    instructor: "Edouard Renard",
    description:
      "ros2_control made easy - Adapt your own ROS 2 robot to ros2_control - Controller, driver, hardware interface, and so on.",
    updated: "July 2025",
    hours: "7",
    lectures: "47",
    level: "Intermediate",
    rating: "5.0",
    students: "16",
    price: "₹449",
    originalPrice: "₹1,769",
    badges: ["Bestseller"],
  },
  {
    image: "/assets/itsoftware/ai_agents_autogen.jpg",
    title: "Building AI Agents & Agentic AI System via Microsoft Autogen",
    instructor: "KRISHAI Technologies Private Limited and 2 others",
    description:
      "Master Microsoft AutoGen to build powerful AI agents, automate tasks, and create advanced Agentic AI systems.",
    updated: "June 2025",
    hours: "34",
    lectures: "124",
    level: "All Levels",
    rating: "4.7",
    students: "133",
    price: "₹449",
    originalPrice: "₹1,769",
    badges: ["Premium", "Hot & New"],
  },
  {
    image: "/assets/itsoftware/devops_interview.png",
    title: "Ultimate DevOps and Cloud Interview Guide",
    instructor: "Abhishek Veeramalla",
    description:
      "Ultimate DevOps and Cloud Interview Guide that covers topic by topic scenario based Interview questions with notes.",
    updated: "June 2025",
    hours: "14",
    lectures: "166",
    level: "Beginner",
    rating: "4.8",
    students: "790",
    price: "₹449",
    originalPrice: "₹1,769",
    badges: ["Premium", "Highest Rated"],
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedCourses = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prev]) => [
      (prev + newDirection + featuredCourses.length) % featuredCourses.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 5000);
    return () => clearTimeout(timer);
  }, [page]);

  const course = featuredCourses[page];

  return (
    <section className="relative px-4 xl:px-20 py-10 bg-white overflow-hidden">
      <motion.h2
        className="text-2xl font-bold text-gray-900 mb-1"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Featured courses
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Many learners enjoyed this highly rated course for its engaging content.
      </motion.p>

      {/* Navigation Buttons */}
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
            <motion.div
              className="flex-shrink-0 w-full px-4 lg:px-0 snap-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 border rounded-xl border-gray-300 shadow-lg overflow-hidden flex flex-col md:flex-row">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-[40%] h-56 md:h-[240px] object-cover m-4 rounded-lg shadow"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="p-6 flex flex-col justify-between w-full md:w-[55%]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedCourses;
