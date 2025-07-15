// components/DesignPage/DesignCourseGrid.jsx

import React, { useState, useRef, useEffect } from "react";

const designCoursesData = {
  "Most popular": [
    {
      image: "/assets/design/photoshop.png",
      title: "Adobe Photoshop Masterclass with Photoshop 2025 + AI Updates",
      instructor: "Phil Ebiner, Video School",
      rating: "4.6",
      students: "22,212",
      price: "₹4,559",
      badges: ["Premium"],
    },
    {
      image: "/assets/design/drawing-course.jpg",
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      instructor: "Jaysen Batchelor, Quinton Batchelor",
      rating: "4.6",
      students: "124,783",
      price: "₹3,849",
      badges: ["Bestseller"],
    },
    {
      image: "/assets/design/after-effects.png",
      title: "After Effects CC Masters: VFX, Motion Graphics, Animation+",
      instructor: "Phil Ebiner, Video School",
      rating: "4.5",
      students: "14,992",
      price: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/design/blender.jpg",
      title: "Complete Blender Creator: 3D Modelling (Compatible with 4.3)",
      instructor: "GameDev.tv Team, Grant Abbitt",
      rating: "4.7",
      students: "66,772",
      price: "₹4,559",
      badges: ["Premium", "Bestseller"],
    },
  ],
  New: [
    {
      image: "/assets/design/digital-painting.jpg",
      title: "The Ultimate Digital Painting Course - Beginner to Advanced",
      instructor: "Yasar VURDEM",
      rating: "5.0",
      students: "5",
      price: "₹1,859",
      badges: ["New"],
    },
    {
      image: "/assets/design/metahuman-guide.jpg",
      title: "Workman's Guide to MetaHuman Outfits for Unreal Engine",
      instructor: "Matt Workman",
      rating: "5.0",
      students: "10",
      price: "₹1,859",
      badges: ["Bestseller"],
    },
    {
      image: "/assets/design/blender-essentials.jpg",
      title: "Blender Essentials - 3D Modelling Training Course",
      instructor: "Daniel Walter Scott",
      rating: "4.7",
      students: "7",
      price: "₹1,859",
      badges: ["Hot & New"],
    },
    {
      image: "/assets/design/geometry-nodes.png",
      title: "Blender - Geometry Nodes Encyclopedia",
      instructor: "Kubilay Altındiş, Sefa Konuk",
      rating: "5.0",
      students: "13",
      price: "₹1,859",
      badges: ["Highest Rated"],
    },
  ],
  Trending: [
    {
      image: "/assets/design/figma.jpg",
      title: "Figma UI UX Design Essentials",
      instructor: "Daniel Walter Scott",
      rating: "4.7",
      students: "39,815",
      price: "₹4,399",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/design/design-masterclass.png",
      title: "Graphic Design Masterclass - Learn GREAT Design",
      instructor: "Lindsay Marsh",
      rating: "4.6",
      students: "69,810",
      price: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/design/design-thinking.jpg",
      title: "Design Thinking : the fundamentals",
      instructor: "Jamal Lazaar",
      rating: "4.5",
      students: "5,575",
      price: "₹2,559",
      badges: ["Premium"],
    },
    {
      image: "/assets/design/web-mobile-ux.jpg",
      title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
      instructor: "Andrei Neagoie, Daniel Schifano",
      rating: "4.5",
      students: "36,380",
      price: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
  ],
};

const DesignCourseGrid = () => {
  const [selectedTab, setSelectedTab] = useState("Most popular");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLeft, setIsLeft] = useState(false);
  const cardRef = useRef();

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

  const tabs = Object.keys(designCoursesData);
  const currentCourses = designCoursesData[selectedTab];

  return (
    <section className="bg-white text-gray-900 px-6 xl:px-20 pb-10">
      <div className="pl-4 mb-6">
        <h1 className="text-3xl font-bold mb-1 pb-6">Design Courses</h1>
        <h2 className="text-xl text-black font-semibold mb-2">Courses to get you started</h2>
        <div className="flex gap-4 mt-2">
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
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
        {currentCourses.map((course, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            ref={hoveredIndex === index ? cardRef : null}
          >
            <div className="border rounded-lg shadow-md overflow-hidden transition-all h-fit w-full flex flex-col">
              <div className="w-full h-48 overflow-hidden rounded-t">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-md font-bold line-clamp-2">{course.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <span className="text-yellow-500 font-bold">{course.rating}</span>
                  <div className="text-yellow-500 text-sm">★★★★☆</div>
                  <span className="text-gray-600 text-xs">({course.students})</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-indigo-700">
                  Current price: {course.price}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                  {course.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded font-semibold ${
                        badge === "Premium"
                          ? "bg-purple-100 text-purple-700"
                          : badge === "Bestseller"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {hoveredIndex === index && (
              <div
                className={`absolute z-30 w-[330px] bg-white border-2 border-blue-600 rounded-xl shadow-xl p-4 transition-all duration-300
                ${isLeft ? "md:right-full md:mr-4" : "md:left-full md:ml-4"} 
                md:top-0 top-full mt-2`}
              >
                <h2 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h2>
                <p className="text-sm text-gray-700 mb-1">{course.instructor}</p>
                <p className="text-xs text-gray-600 mb-2">Updated 2025 • All Levels • Subtitles</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Real-world learning</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Design foundations</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Lifetime access</li>
                </ul>
                <button className="mt-4 bg-indigo-600 text-white py-2 px-4 w-full rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignCourseGrid;
