import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "AWS Certified Solutions Architect",
  "Linux Administration",
  "Microsoft Azure",
  "Network Security",
  "Python for IT",
  "Cloud Computing",
  "DevOps",
  "Docker & Kubernetes",
  "ITIL Foundation",
  "Ethical Hacking",
  "Windows Server",
  "Cisco CCNA",
  "CompTIA A+",
  "VMware vSphere",
  "PowerShell Scripting",
  "Database Administration",
  "IT Support",
  "Cybersecurity",
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
    <section className="relative py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Popular IT & Software Topics
        </motion.h2>

        <div className="relative">
          {/* Scroll buttons */}
          <motion.button
            onClick={() => scroll("left")}
            whileTap={{ scale: 0.9 }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
          >
            <ChevronLeft className="text-gray-800 w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            whileTap={{ scale: 0.9 }}
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
                  className="w-[265px] h-[100px] px-4 py-6 bg-white border border-gray-300 rounded-md text-center font-semibold text-gray-900 shadow-sm flex items-center justify-center text-sm cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {topic}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
