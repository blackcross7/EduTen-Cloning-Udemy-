import React, { useState, useRef, useEffect } from "react";

const coursesData = {
  "Most popular": [
    {
      image: "/assets/finance/stock-market.jpg",
      title: "The Complete Financial Analyst Course 2025",
      instructor: "365 Careers",
      rating: "4.6",
      students: "178,324",
      price: "₹729",
      originalPrice: "₹3,499",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/finance/excel-modeling.jpeg",
      title: "Beginner to Pro in Excel: Financial Modeling & Valuation",
      instructor: "Maven Analytics",
      rating: "4.7",
      students: "188,229",
      price: "₹689",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/finance/accounting.jpg",
      title: "Accounting & Financial Statement Analysis: Complete Training",
      instructor: "Chris Haroun",
      rating: "4.6",
      students: "95,872",
      price: "₹749",
      originalPrice: "₹3,999",
      badges: ["Bestseller"],
    },
    {
      image: "/assets/finance/crypto.jpg",
      title: "Cryptocurrency Investment Course 2025: Fund Your Future",
      instructor: "Suppoman™",
      rating: "4.5",
      students: "103,522",
      price: "₹629",
      originalPrice: "₹3,249",
      badges: ["Premium"],
    },
  ],
  New: [
    {
      image: "/assets/finance/taxation.jpeg",
      title: "GST & Taxation for Beginners – India Specific",
      instructor: "CA Vishal Bhattad",
      rating: "5.0",
      students: "223",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
    {
      image: "/assets/finance/investing.jpeg",
      title: "Value Investing: How to Pick Profitable Stocks",
      instructor: "Seth Klarman",
      rating: "5.0",
      students: "6",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Bestseller"],
    },
    {
      image: "/assets/finance/personal-finance.png",
      title: "Personal Finance Masterclass — Your Road to Wealth",
      instructor: "Steve Ballinger, MBA",
      rating: "4.9",
      students: "41",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Highest Rated"],
    },
    {
      image: "/assets/finance/banking.jpeg",
      title: "Modern Banking Fundamentals - 2025",
      instructor: "Starweaver Instructor Team",
      rating: "4.8",
      students: "93",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
  ],
  Trending: [
    {
      image: "/assets/finance/fundamentals.jpg",
      title: "Finance 101: Financial Planning & Budgeting",
      instructor: "Alex Genadinik",
      rating: "4.6",
      students: "76,202",
      price: "₹589",
      originalPrice: "₹3,399",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/finance/banking-risk.jpg",
      title: "Risk Management in Banking and Financial Markets",
      instructor: "Robert Chapman",
      rating: "4.7",
      students: "39,189",
      price: "₹649",
      originalPrice: "₹3,689",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/finance/fraud.jpg",
      title: "Financial Fraud Detection and Prevention",
      instructor: "Forensic Accounting Academy",
      rating: "4.6",
      students: "22,184",
      price: "₹599",
      originalPrice: "₹2,999",
      badges: ["Premium"],
    },
    {
      image: "/assets/finance/valuation.jpg",
      title: "Business Valuation: How to Value a Company",
      instructor: "Aswath Damodaran",
      rating: "4.8",
      students: "88,521",
      price: "₹739",
      originalPrice: "₹3,749",
      badges: ["Premium", "Bestseller"],
    },
  ],
};


const FinanceCourceSection = () => {
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
    <section className="bg-white text-gray-900 px-6">
      <div className="pl-4 mb-6">
        <h1 className="text-3xl font-bold mb-1 pb-6">Finance & Accounting Courses</h1>
        <h2 className="text-xl text-black font-semibold mb-2">Courses to get you started</h2>
        <p className="text-gray-500 mb-6">Explore courses from experienced, real-world experts.</p>
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
    className={`
      absolute z-30 w-[330px] bg-white border-2 border-blue-600 rounded-xl shadow-xl p-4 transition-all duration-300
      ${isLeft ? "md:right-full md:mr-4" : "md:left-full md:ml-4"} 
      md:top-0 top-full mt-2
    `}
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

export default FinanceCourceSection;
