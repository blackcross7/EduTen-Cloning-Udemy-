import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "Financial Analysis",
  "Accounting Principles",
  "Financial Modeling",
  "Investment Banking",
  "Stock Market Investing",
  "Corporate Finance",
  "Taxation (Direct & Indirect)",
  "Auditing & Assurance",
  "Excel for Finance",
  "Cost Accounting",
  "Budgeting and Forecasting",
  "Personal Finance",
  "Cryptocurrency & Blockchain Finance",
  "Wealth Management",
  "Economics for Finance",
  "Mergers and Acquisitions",
  "Risk Management",
  "Valuation Techniques",
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
    <motion.section
      className="relative py-10 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Popular topics
        </motion.h2>

        <div className="relative">
          {/* Scroll buttons */}
          <motion.button
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
          >
            <ChevronLeft className="text-gray-800 w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
          >
            <ChevronRight className="text-gray-800 w-6 h-6" />
          </motion.button>

          {/* Scrollable grid */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide p-2"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-max">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="w-[265px] h-[100px] px-4 py-6 bg-white border border-gray-300 rounded-md text-center font-semibold text-gray-900 shadow-sm flex items-center justify-center text-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  {topic}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PopularTopics;
