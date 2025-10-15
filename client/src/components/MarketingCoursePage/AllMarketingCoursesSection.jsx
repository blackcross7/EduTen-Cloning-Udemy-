import React, { useState, useEffect } from "react";
import { FaFilter, FaStar, FaInfoCircle } from "react-icons/fa";

// Helper function to convert string numbers to integers
const parseStudents = (studentString) => {
  return parseInt(studentString.replace(/,/g, ""), 10);
};

// I've added some placeholder data to match the new UI requirements.
const marketingCourses = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Rob Percival",
    rating: 4.5,
    students: "245,678",
    price: "₹729",
    originalPrice: "₹3,499",
    badges: ["Premium", "Bestseller"],
    // --- New data for the updated UI ---
    subtitle: "Master Digital Marketing: SEO, Social Media, Facebook, YouTube, Email Marketing, Google Ads & Analytics.",
    hours: 45.5,
    level: "All Levels",
    learnPoints: [
      "Grow a business online from scratch",
      "Make money as an affiliate marketer",
      "Land a high-paying job in digital marketing",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "SEO 2025: Complete SEO Training + SEO for WordPress Websites",
    instructor: "Yoast SEO Academy",
    rating: 4.7,
    students: "189,432",
    price: "₹689",
    originalPrice: "₹3,849",
    badges: ["Premium", "Bestseller"],
    // --- New data ---
    subtitle: "Rank #1 on Google with Technical SEO, 1s Page Experience, Content SEO, Link Building & Keyword Research.",
    hours: 28,
    level: "Beginner",
    learnPoints: [
      "Master keyword research and SEO content creation",
      "Understand technical SEO and site architecture",
      "Build high-quality backlinks to your website",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
    title: "Social Media Marketing Masterclass 2025",
    instructor: "Lindsay Marsh",
    rating: 4.6,
    students: "156,789",
    price: "₹749",
    originalPrice: "₹3,999",
    badges: ["Bestseller"],
    // --- New data ---
    subtitle: "Learn how to create a winning social media strategy for Facebook, Instagram, TikTok, and more.",
    hours: 18,
    level: "Intermediate",
    learnPoints: [
      "Develop a comprehensive social media marketing plan",
      "Create engaging content for different platforms",
      "Analyze metrics to optimize your campaigns",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Content Marketing Masterclass: Create Content That Sells",
    instructor: "Evan Kimbrell",
    rating: 4.5,
    students: "98,456",
    price: "₹629",
    originalPrice: "₹3,249",
    badges: ["Premium"],
    // --- New data ---
    subtitle: "Learn to write compelling copy, create stunning visuals, and develop a content strategy that drives results.",
    hours: 22,
    level: "All Levels",
    learnPoints: [
      "Understand the principles of persuasive copywriting",
      "Learn content promotion and distribution tactics",
      "Measure the ROI of your content marketing efforts",
    ],
  },
  // ... adding placeholders for the rest of your courses
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
    title: "Email Marketing Mastery: Build Your Email List & Sell More",
    instructor: "Mark Timberlake",
    rating: 4.8,
    students: "45,123",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["New"],
    subtitle: "Learn to create high-converting email campaigns and automate your marketing.",
    hours: 12,
    level: "Beginner",
    learnPoints: ["Build an email list from scratch", "Design effective email templates", "Master email automation"],
  },
  {
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
    title: "Facebook Ads & Facebook Marketing Masterclass 2025",
    instructor: "Pouya Eti",
    rating: 4.7,
    students: "67,890",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["Bestseller"],
    subtitle: "Dominate Facebook marketing and create powerful ads that convert.",
    hours: 35,
    level: "Intermediate",
    learnPoints: ["Target the right audience with precision", "Optimize your ad spend for maximum ROI", "Use the Facebook Pixel effectively"],
  },
];


const AllMarketingCoursesSection = () => {
  // State for managing UI visibility and data
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(5);

  // NOTE: In a real app, you would have state for filters, e.g.,
  // const [activeRating, setActiveRating] = useState(0);
  // const [activeLevels, setActiveLevels] = useState([]);
  // Then you would filter the `marketingCourses` array based on these states.
  // For now, we'll just use the full list for pagination.
  const filteredCourses = marketingCourses;

  // Effect to adjust courses per page based on screen width for better responsiveness
  useEffect(() => {
    const updateCoursesPerPage = () => {
      setCoursesPerPage(window.innerWidth < 768 ? 4 : 5);
    };
    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);
    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-4">All Marketing Courses</h2>

      <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm w-full md:w-auto flex items-start gap-2 mb-4">
        <FaInfoCircle className="text-purple-600 mt-1" />
        <p className="text-sm text-gray-800">
          Not sure? All courses have a 30-day money-back guarantee
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 border border-gray-600 font-semibold px-4 py-2 rounded text-sm hover:bg-gray-100 transition"
        >
          <FaFilter /> Filter
        </button>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setSortVisible(!sortVisible)}
            className="border border-gray-600 px-4 py-2 rounded font-semibold text-sm"
          >
            Sort by: Most Popular
          </button>
          {sortVisible && (
            <div className="absolute mt-1 w-40 bg-white border rounded shadow z-10">
              <div className="py-1 text-sm text-gray-900">
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => setSortVisible(false)}>Most Popular</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => setSortVisible(false)}>Highest Rated</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => setSortVisible(false)}>Newest</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {/* --- Sidebar Filters --- */}
        {showFilters && (
          <div
            className={`
              fixed z-50 top-0 left-0 h-full w-72 bg-white border-r shadow-lg
              transition-transform duration-300 md:static md:z-auto md:h-auto md:w-64 md:border-none md:shadow-none md:translate-x-0
              ${showFilters ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Header + Close (Mobile) */}
            <div className="flex justify-between items-center p-4 pb-0 md:hidden">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="text-gray-600 text-2xl font-bold">&times;</button>
            </div>
            {/* Filter Content */}
            <div className="p-4 pt-2 md:p-0">
              <h3 className="font-semibold mb-2">Ratings</h3>
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <div key={rating} className="flex items-center gap-2 mb-2">
                  <input type="radio" name="rating" id={`rating-${rating}`} />
                  <label htmlFor={`rating-${rating}`} className="flex items-center text-sm cursor-pointer">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-yellow-400 ${i < Math.round(rating) ? "" : "opacity-30"}`} />
                    ))}
                    <span className="ml-2">{rating} & up</span>
                  </label>
                </div>
              ))}
              {/* Add other filters like Level, Price, etc. here */}
            </div>
          </div>
        )}

        {/* --- Course List --- */}
        <div className="flex-1">
          {currentCourses.map((course, index) => (
            <div key={index} className="relative group border-b last:border-b-0">
              <div className="flex flex-row gap-4 py-4">
                {/* Left: Image */}
                <img src={course.image} alt={course.title} className="w-24 h-16 sm:w-40 sm:h-24 object-cover rounded"/>
                
                {/* Middle: Info */}
                <div className="flex-1">
                  <h3 className="text-base font-bold line-clamp-2">{course.title}</h3>
                  <p className="hidden sm:block text-sm text-gray-600 mt-1 line-clamp-2">{course.subtitle}</p>
                  <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                  
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-600 font-semibold text-sm">{course.rating}</span>
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <span className="text-gray-600 text-xs">({course.students})</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1">{course.hours} total hours • {course.level}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.badges.map((badge, i) => (
                      <span key={i} className={`text-xs px-2 py-0.5 rounded font-semibold ${
                        badge === "Premium" ? "bg-purple-100 text-purple-700"
                        : badge === "Bestseller" ? "bg-yellow-100 text-yellow-800"
                        : badge === "New" ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                      }`}>{badge}</span>
                    ))}
                  </div>
                </div>
                
                {/* Right: Price */}
                <div className="flex flex-col items-end w-20 text-right">
                  <span className="text-base font-bold">{course.price}</span>
                  <span className="text-xs text-gray-500 line-through">{course.originalPrice}</span>
                </div>
              </div>

              {/* --- Hover Card --- */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-80 p-4 rounded-lg shadow-xl bg-white border z-20 hidden group-hover:block transition-opacity duration-300">
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-b" />
                <h4 className="font-bold mb-2 text-gray-900">{course.title}</h4>
                <p className="text-xs text-green-700 font-semibold mb-2">Updated recently</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {course.learnPoints?.map((point, idx) => <li key={idx}>✓ {point}</li>)}
                </ul>
                <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700">Add to cart</button>
              </div>
            </div>
          ))}

          {/* --- Pagination --- */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm">Previous</button>
            <span className="text-sm font-semibold">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllMarketingCoursesSection;