import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITSoftwareCourseSection = () => {
  const [selectedTab, setSelectedTab] = useState("Most popular");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLeft, setIsLeft] = useState(false);
  const cardRef = useRef();

  const coursesData = {
    "Most popular": [
      {
        image: "/assets/itsoftware/aws-solutions-architect.jpg",
        title: "Ultimate AWS Certified Solutions Architect Associate 2025",
        instructor: "Stephane Maarek | AWS Certified Cloud...",
        rating: "4.7",
        students: "263,293",
        price: "₹509",
        originalPrice: "₹3,509",
        badges: ["Premium", "Bestseller"],
      },
      {
        image: "/assets/itsoftware/ethical-hacking.jpg",
        title: "Learn Ethical Hacking From Scratch",
        instructor: "Zaid Sabih, z Security",
        rating: "4.6",
        students: "132,497",
        price: "₹579",
        originalPrice: "₹3,999",
        badges: ["Premium", "Bestseller"],
      },
      {
        image: "/assets/itsoftware/aws-cloud-practitioner.png",
        title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
        instructor: "Stephane Maarek | AWS Certified Cloud...",
        rating: "4.7",
        students: "256,886",
        price: "₹509",
        originalPrice: "₹3,509",
        badges: ["Premium", "Bestseller"],
      },
      {
        image: "/assets/itsoftware/aws-developer.png",
        title: "Ultimate AWS Certified Developer Associate 2025 DVA-C02",
        instructor: "Stephane Maarek | AWS Certified Cloud...",
        rating: "4.7",
        students: "114,207",
        price: "₹579",
        originalPrice: "₹3,999",
        badges: ["Premium", "Bestseller"],
      },
    ],
    New: [
      {
        image: "/assets/itsoftware/n8n-ai.webp",
        title: "N8N: AI Agent Creation Guide",
        instructor: "David Eastman | AI Automation Expert",
        rating: "4.6",
        students: "4,321",
        price: "₹529",
        originalPrice: "₹3,499",
        badges: ["New"],
      },
      {
        image: "/assets/itsoftware/linux-wsl2.png",
        title: "Linux on Windows (WSL2)",
        instructor: "Jane Doe | DevOps Engineer",
        rating: "4.5",
        students: "6,894",
        price: "₹649",
        originalPrice: "₹3,899",
        badges: ["Hot & New"],
      },
      {
        image: "/assets/itsoftware/databricks-bootcamp.jpg",
        title: "Databricks Certified Data Engineer Associate - Bootcamp",
        instructor: "Alex Turner | Data Engineer",
        rating: "4.7",
        students: "8,452",
        price: "₹579",
        originalPrice: "₹3,999",
        badges: ["Premium", "New"],
      },
      {
        image: "/assets/itsoftware/gcp-genai.webp",
        title: "Google Cloud Generative AI Leader Full Course 2025",
        instructor: "Emily Chen | Cloud AI Strategist",
        rating: "4.8",
        students: "5,103",
        price: "₹599",
        originalPrice: "₹3,699",
        badges: ["Top Rated", "New"],
      },
    ],
    Trending: [
      {
        image: "/assets/itsoftware/aws-cloud-practitioner.png",
        title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
        instructor: "Stephane Maarek | AWS Instructor",
        rating: "4.8",
        students: "143,129",
        price: "₹529",
        originalPrice: "₹3,799",
        badges: ["Bestseller", "Trending"],
      },
      {
        image: "/assets/itsoftware/genai-beginners.jpg",
        title: "Generative AI for Beginners",
        instructor: "Sam Green | AI Educator",
        rating: "4.6",
        students: "21,842",
        price: "₹499",
        originalPrice: "₹2,899",
        badges: ["Trending", "Top Rated"],
      },
      {
        image: "/assets/itsoftware/aws-solutions-architect.jpg",
        title: "Ultimate AWS Certified Solutions Architect Associate 2025",
        instructor: "Stephane Maarek | AWS Instructor",
        rating: "4.7",
        students: "203,981",
        price: "₹579",
        originalPrice: "₹3,999",
        badges: ["Bestseller", "Updated 2025"],
      },
      {
        image: "/assets/itsoftware/chatgpt-prompting.png",
        title: "How to ChatGPT: Master the Art of Prompt Engineering",
        instructor: "Ben Watson | Prompt Engineer",
        rating: "4.7",
        students: "12,407",
        price: "₹489",
        originalPrice: "₹3,499",
        badges: ["Trending", "Hot & New"],
      },
    ],
  };

  const tabs = Object.keys(coursesData);
  const currentCourses = coursesData[selectedTab];

  useEffect(() => {
    const handlePosition = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect && rect.right + 360 > window.innerWidth) {
        setIsLeft(true);
      } else {
        setIsLeft(false);
      }
    };
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, [hoveredIndex]);

  return (
    <section className="relative px-4 xl:px-20 py-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        IT & Software Courses
      </h2>
      <h3 className="text-xl text-black font-semibold mb-2">
        Courses to get you started
      </h3>
      <p className="text-gray-700 mb-4">
        Explore courses from experienced, real-world experts.
      </p>

      {/* Tabs */}
      <motion.div
        className="flex gap-4 mt-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm px-3 py-1 rounded-full border ${
              selectedTab === tab
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
        {currentCourses.map((course, index) => (
          <motion.div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            ref={hoveredIndex === index ? cardRef : null}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            {/* Course Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-lg shadow-md overflow-hidden transition-all h-full flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden rounded-t">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-md font-bold line-clamp-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-bold">
                      {course.rating}
                    </span>
                    <div className="flex text-yellow-500 text-sm">★★★★☆</div>
                    <span className="text-gray-600 text-xs">
                      ({course.students})
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-indigo-700">
                    Current price: {course.price}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-4">
                  {course.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded font-semibold ${
                        badge === "Premium"
                          ? "bg-purple-100 text-purple-700"
                          : badge === "Bestseller"
                          ? "bg-green-100 text-green-700"
                          : badge === "Trending"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hover Card */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-30 w-[330px] bg-white border-2 border-blue-600 rounded-xl shadow-xl p-4 transition-all duration-300 ${
                    isLeft ? "md:right-full md:mr-4" : "md:left-full md:ml-4"
                  } md:top-0 top-full mt-2`}
                >
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-1">
                    {course.instructor}
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    Updated 2025 • All Levels • Subtitles
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span> Real-world
                      learning
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span> Industry-grade
                      training
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-500">✓</span> Lifetime access
                    </li>
                  </ul>
                  <button className="mt-4 bg-indigo-600 text-white py-2 px-4 w-full rounded hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ITSoftwareCourseSection;
