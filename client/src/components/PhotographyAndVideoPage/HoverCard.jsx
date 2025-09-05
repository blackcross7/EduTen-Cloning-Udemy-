"use client";

import { motion, AnimatePresence } from "framer-motion";

const HoverCard = ({ course, position }) => {
  if (!course) return null;

  // Motion variants
  const variants = {
    hidden: { opacity: 0, rotateY: 90, scale: 0.95 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      rotateY: -90,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {course && (
        <motion.div
          className={`absolute 
            z-40 bg-white rounded-xl shadow-lg p-4
              ${
                position
                  ? "left-5 w-11/12 md:w-1/3 lg:w-56 top-2 "
                  : "top-0 right-0 w-full"
              }
            hidden md:block
            `}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          {/* Badge + Updated */}
          <div className="flex items-center gap-2 text-sm mb-2">
            {course.badge && (
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                {course.badge}
              </span>
            )}
            {course.updated && (
              <span className="text-gray-500">Updated {course.updated}</span>
            )}
          </div>
          {position ? (
            <p>What you’ll learn</p>
          ) : (
            <h4 className="font-semibold text-gray-900">{course.title}</h4>
          )}

          {/* <p className="text-sm text-gray-500 mt-1">{course.instructor}</p> */}

          {/* Description */}
          <p className="text-gray-700 text-sm mt-3">{course.description}</p>

          {/* Highlights */}
          {position !== "top-right" && course.highlights && (
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-3">
              {course.highlights.slice(0, 2).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
            Add to cart
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverCard;
