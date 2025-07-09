import React, { useState } from "react";

const tabs = ["Most popular", "New", "Trending"];

const coursesData = {
  "Most popular": [
    {
      image: "/assets/business/sql-course.jpg",
      title: "The Complete SQL Bootcamp: Go from Zero to Hero",
      instructor: "Jose Portilla, Pierian Training",
      rating: "4.7",
      students: "235,541",
      price: "₹639",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/mba-course.webp",
      title: "An Entire MBA in 1 Course: Award Winning Business School Prof",
      instructor: "Chris Haroun",
      rating: "4.5",
      students: "61,427",
      price: "₹759",
      originalPrice: "₹4,659",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/sql-data.jpg",
      title: "Zero to Hero in SQL: SQL for Data Analytics",
      instructor: "Start-Tech Academy",
      rating: "4.6",
      students: "13,688",
      price: "₹759",
      originalPrice: "₹4,659",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/powerbi.jpg",
      title: "Microsoft Power BI Desktop for Business Intelligence",
      instructor: "Maven Analytics",
      rating: "4.6",
      students: "188,229",
      price: "₹619",
      originalPrice: "₹3,689",
      badges: ["Premium", "Bestseller"],
    },
  ],
  New: [
    {
      image: "/assets/business/genai-leadership.jpg",
      title: "GenAI CEO Playbook: Amplifying Visionary Leadership",
      instructor: "Starweaver Instructor Team",
      rating: "5.0",
      students: "5",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
    {
      image: "/assets/business/problem-solving.webp",
      title: "Certified 8D Problem Solving Expert | 8D for All Industries",
      instructor: "AIGPE",
      rating: "5.0",
      students: "6",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Bestseller"],
    },
    {
      image: "/assets/business/pro-speaking.avif",
      title: "Mastering the Art of Professional Speaking",
      instructor: "Alin Marin, Patrick Snow",
      rating: "5.0",
      students: "17",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Highest Rated"],
    },
    {
      image: "/assets/business/hrm.jpg",
      title: "Modern Human Resource Management (HRM) Essentials | 2025©",
      instructor: "Institute of Human Resource and Leadership",
      rating: "5.0",
      students: "79",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
  ],
  Trending: [
    {
      image: "/assets/business/pmp.jpg",
      title: "PMP Certification Exam Prep Course 35 PDU Contact Hours/PDU",
      instructor: "TIA Education, Andrew Ramdayal",
      rating: "4.7",
      students: "136,005",
      price: "₹559",
      originalPrice: "₹3,949",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/powerbi.jpg",
      title: "Microsoft Power BI Desktop for Business Intelligence",
      instructor: "Maven Analytics",
      rating: "4.6",
      students: "168,229",
      price: "₹619",
      originalPrice: "₹3,689",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/consulting.png",
      title: "Management Consulting Essential Training 2025",
      instructor: "John Burress",
      rating: "4.5",
      students: "11,893",
      price: "₹539",
      originalPrice: "₹3,219",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "/assets/business/sql-course.jpg",
      title: "The Complete SQL Bootcamp: Go from Zero to Hero",
      instructor: "Jose Portilla, Pierian Training",
      rating: "4.7",
      students: "235,541",
      price: "₹639",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
  ],
};

const BusinessCourseSection = () => {
  const [activeTab, setActiveTab] = useState("Most popular");
  const courseList = coursesData[activeTab];

  return (
    <section className="px-4 lg:px-20 pt-10 pb-0">
      <h2 className="text-3xl font-bold mb-2 text-black">Business Courses</h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        Courses to get you started
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Explore courses from experienced, real-world experts.
      </p>

      <div className="flex gap-4 text-sm font-semibold mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {courseList.map((course, index) => (
          <div key={index} className="relative group">
            <div className="w-full bg-white rounded-md p-2 border h-[340px] flex flex-col justify-between">
              <img
                src={course.image || "/assets/business/sql-course.png"}
                alt={course.title || "Course"}
                className="rounded-md w-full h-[150px] object-cover mb-2"
              />
              <h4 className="font-semibold text-sm text-black leading-snug mb-1">
                {course.title || "Sample Course Title"}
              </h4>
              <p className="text-xs text-gray-600">
                {course.instructor || "Instructor Name"}
              </p>
              <div className="text-sm mt-1">
                <span className="font-semibold text-yellow-600">
                  {course.rating || "4.5"}
                </span>
                <span className="text-gray-600 text-xs ml-1">
                  ★ ({course.students || "10,000"})
                </span>
              </div>
              <div className="text-sm font-bold mt-1 text-black">
                {course.price || "₹799"} {" "}
                <span className="line-through text-gray-500 text-xs font-medium">
                  {course.originalPrice || "₹3,999"}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                {(course.badges || ["Premium", "Bestseller"]).map((badge, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded font-medium ${
                      badge === "Premium"
                        ? "bg-purple-100 text-purple-700"
                        : badge === "New"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Card */}
            <div
              className={`absolute top-0 z-30 w-[330px] bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
                index === courseList.length - 1 ? "right-full mr-4" : "left-full ml-4"
              }`}
            >
              <div className="relative">
                <div className="absolute left-[-6px] top-10 w-3 h-3 bg-white rotate-45 shadow-md"></div>
              </div>
              <div className="p-4 flex flex-col justify-between h-auto text-sm">
                <div>
                  <h3 className="text-base font-bold text-black mb-1">
                    {course.title}
                  </h3>
                  <div className="flex gap-2 mb-2">
                    {(course.badges || []).map((badge, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded font-semibold ${
                          badge === "Premium"
                            ? "bg-purple-100 text-purple-700"
                            : badge === "New"
                            ? "bg-green-100 text-green-700"
                            : badge === "Bestseller"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                    <span className="text-xs text-gray-600">
                      Updated <strong>2025</strong>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    2.5 total hours · Intermediate Level · Subtitles
                  </p>
                  <p className="text-gray-700 mb-2">
                    Transform executive decision-making, enhance strategic planning, and lead AI-powered organizational change
                  </p>
                  <ul className="text-xs text-gray-700 list-disc list-inside space-y-1">
                    <li>
                      Evaluate AI's potential as a cognitive partner to enhance executive thinking, identify blind spots, and expand strategic vision.
                    </li>
                    <li>
                      Develop AI-enhanced communication strategies that maintain authentic leadership voice while improving stakeholder engagement.
                    </li>
                    <li>
                      Transform strategic planning processes by leveraging AI for deeper market insights, scenario planning, and innovation acceleration.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex items-center gap-20">
                  <button className="bg-purple-600 text-white text-lg px-6 py-2 rounded hover:bg-purple-700">
                    Add to cart
                  </button>
                  <img
                    src="/assets/business/heart.png"
                    alt="Wishlist"
                    className="w-10 h-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessCourseSection;
