import React, { useState, useRef, useEffect } from "react";

const coursesData = {
  "Most popular": [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructor: "Rob Percival",
      rating: "4.5",
      students: "245,678",
      price: "₹729",
      originalPrice: "₹3,499",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "SEO 2025: Complete SEO Training + SEO for WordPress Websites",
      instructor: "Yoast SEO Academy",
      rating: "4.7",
      students: "189,432",
      price: "₹689",
      originalPrice: "₹3,849",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
      title: "Social Media Marketing Masterclass 2025",
      instructor: "Lindsay Marsh",
      rating: "4.6",
      students: "156,789",
      price: "₹749",
      originalPrice: "₹3,999",
      badges: ["Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      title: "Content Marketing Masterclass: Create Content That Sells",
      instructor: "Evan Kimbrell",
      rating: "4.5",
      students: "98,456",
      price: "₹629",
      originalPrice: "₹3,249",
      badges: ["Premium"],
    },
  ],
  New: [
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
      title: "Email Marketing Mastery: Build Your Email List & Sell More",
      instructor: "Mark Timberlake",
      rating: "4.8",
      students: "45,123",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
    {
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
      title: "Facebook Ads & Facebook Marketing Masterclass 2025",
      instructor: "Pouya Eti",
      rating: "4.7",
      students: "67,890",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Google Ads (AdWords) Masterclass - 2025",
      instructor: "Isaac Rudansky",
      rating: "4.9",
      students: "89,234",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["Highest Rated"],
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Influencer Marketing: How to Work with Influencers",
      instructor: "Sarah Johnson",
      rating: "4.6",
      students: "34,567",
      price: "₹519",
      originalPrice: "₹1,709",
      badges: ["New"],
    },
  ],
  Trending: [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "Affiliate Marketing: Build a $10,000+ Monthly Business",
      instructor: "Pat Flynn",
      rating: "4.6",
      students: "123,456",
      price: "₹589",
      originalPrice: "₹3,399",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Google Analytics 4 (GA4) Masterclass 2025",
      instructor: "Michele Kiss",
      rating: "4.7",
      students: "78,901",
      price: "₹649",
      originalPrice: "₹3,689",
      badges: ["Premium", "Bestseller"],
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Branding Masterclass: The Complete Brand Building Guide",
      instructor: "David Airey",
      rating: "4.6",
      students: "56,789",
      price: "₹599",
      originalPrice: "₹2,999",
      badges: ["Premium"],
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      title: "Marketing Automation: Build Your First Campaign",
      instructor: "Zapier Academy",
      rating: "4.8",
      students: "45,678",
      price: "₹739",
      originalPrice: "₹3,749",
      badges: ["Premium", "Bestseller"],
    },
  ],
};

const MarketingCourseSection = () => {
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
    <section className="bg-white text-gray-900 px-6 py-10 rounded-xl shadow-lg">
      <div className="pl-4 mb-6">
        <h1 className="text-3xl font-bold mb-1 pb-6">Marketing Courses</h1>
        <h2 className="text-xl text-black font-semibold mb-2">Courses to get you started</h2>
        <p className="text-gray-500 mb-6">Explore courses from experienced, real-world marketing experts.</p>
        <div className="flex gap-4 mt-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm px-3 py-1 rounded-full border transition duration-200 ${
                selectedTab === tab
                  ? "bg-purple-600 text-white border-purple-600"
                  : "border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300"
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
            className="relative group transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-purple-600 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            ref={hoveredIndex === index ? cardRef : null}
          >
            {/* Course Card */}
            <div className="border rounded-lg shadow-md overflow-hidden transition-all h-fit w-full flex flex-col bg-white">
              <div className="w-full h-48 overflow-hidden rounded-t">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-md font-bold line-clamp-2 transition duration-200 hover:text-purple-700">{course.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
                  <div className="flex items-center gap-1 text-sm mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-500 text-xs">({course.students})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-gray-900">₹{course.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{course.originalPrice}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {course.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          badge === "Premium"
                            ? "bg-purple-100 text-purple-700"
                            : badge === "Bestseller"
                            ? "bg-yellow-100 text-yellow-800"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingCourseSection; 