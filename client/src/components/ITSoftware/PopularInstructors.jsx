import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Amit Sharma",
    title: "AWS Certified Solutions Architect, DevOps Expert",
    rating: 4.8,
    students: "120,000",
    courses: 18,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Priya Verma",
    title: "Linux & Cloud Computing Specialist",
    rating: 4.7,
    students: "98,500",
    courses: 22,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Rohit Singh",
    title: "Network Security, Cisco CCNA Trainer",
    rating: 4.6,
    students: "75,300",
    courses: 15,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Meena Gupta",
    title: "Python for IT, Automation Expert",
    rating: 4.7,
    students: "110,200",
    courses: 20,
    image: "/assets/business/testimonial-person.png",
  },
  {
    name: "Suresh Kumar",
    title: "VMware & Windows Server Specialist",
    rating: 4.6,
    students: "89,000",
    courses: 12,
    image: "/assets/business/testimonial-person.png",
  },
];

const PopularInstructors = () => {
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
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Popular IT & Software Instructors
        </motion.h2>

        <div className="relative">
          {showLeft && (
            <motion.button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="text-gray-800 w-6 h-6" />
            </motion.button>
          )}
          {showRight && (
            <motion.button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-300 w-10 h-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="text-gray-800 w-6 h-6" />
            </motion.button>
          )}

          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide p-2"
          >
            <div className="flex gap-6 min-w-max">
              {instructors.map((inst, i) => (
                <motion.div
                  key={i}
                  className="w-64 bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex flex-col items-center text-center hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-20 h-20 rounded-full mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{inst.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{inst.title}</p>
                  <div className="flex items-center justify-center text-yellow-500 mb-1">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-bold">{inst.rating}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    {inst.students} students
                  </div>
                  <div className="text-xs text-gray-400">
                    {inst.courses} courses
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
