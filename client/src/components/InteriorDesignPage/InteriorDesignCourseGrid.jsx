import React, { useState, useRef, useEffect } from "react";

const coursesData = {
  "Most popular": [
    {
      image: "/assets/interior/design-style.jpg", // update path to match your local image
      title: "How to Work with Interior Design Styles Like a Pro",
      instructor: "Erikka Fogleman",
      rating: "4.5",
      students: "11,144",
      price: "₹3,219",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/interior/sketchup-vray.jpg",
      title: "The Complete SketchUp & Vray Course for Interior Design",
      instructor: "Arch Gyan, Sketchup Guru",
      rating: "4.6",
      students: "5,434",
      price: "₹3,219",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/interior/design-room.jpg",
      title: "How to Design a Room in 10 Easy Steps",
      instructor: "Erikka Fogleman",
      rating: "4.6",
      students: "8,511",
      price: "₹3,309",
      originalPrice: "₹3,849",
      badges: ["Premium"],
    },
    {
      image: "/assets/interior/color-pro.jpg",
      title: "How to Use Color Like a Pro",
      instructor: "Erikka Fogleman",
      rating: "4.7",
      students: "6,033",
      price: "₹3,849",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
  ],
  Trending: [
    {
      image: "/assets/interior/sketchup-vray.jpg",
      title: "The Complete SketchUp & Vray Course for Interior Design",
      instructor: "Arch Gyan, Sketchup Guru",
      rating: "4.6",
      students: "5,434",
      price: "₹3,219",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/interior/design-style.jpg",
      title: "How to Work with Interior Design Styles Like a Pro",
      instructor: "Erikka Fogleman",
      rating: "4.5",
      students: "11,144",
      price: "₹3,219",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/interior/sketchup-pro.jpg",
      title: "Learn SketchUp Pro the Right Way!",
      instructor: "Daniel Brown",
      rating: "4.6",
      students: "2,521",
      price: "₹2,369",
      originalPrice: "₹3,849",
      badges: ["Premium"],
    },
    {
      image: "/assets/interior/design-room.jpg",
      title: "How to Design a Room in 10 Easy Steps",
      instructor: "Erikka Fogleman",
      rating: "4.6",
      students: "8,511",
      price: "₹3,309",
      originalPrice: "₹3,849",
      badges: ["Premium"],
    },
  ],
};

const InteriorDesignCourseGrid = () => {
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

  const tabs = Object.keys(coursesData);
  const currentCourses = coursesData[selectedTab];

  return (
    <section className="bg-white text-gray-900 px-6 pb-10 max-w-7xl mx-auto">
      <div className="pl-4 pt-10 mb-6">
        <h1 className="text-3xl font-bold mb-1 pb-6">Interior Design Courses</h1>
        <h2 className="text-xl text-black font-semibold mb-2">Courses to get you started</h2>
        <p className="text-gray-600 mb-4">Explore courses from experienced, real-world experts.</p>
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
            {/* Course Card */}
            <div className="border rounded-lg shadow-md overflow-hidden transition-all h-fit w-full flex flex-col">
              <div className="w-full h-48 overflow-hidden rounded-t">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-md font-bold line-clamp-2">{course.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-500 font-bold">{course.rating}</span>
                    <div className="flex text-yellow-500 text-sm">★★★★☆</div>
                    <span className="text-gray-600 text-xs">({course.students})</span>
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
                          : badge === "New"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
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
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Business essentials</li>
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

export default InteriorDesignCourseGrid;
