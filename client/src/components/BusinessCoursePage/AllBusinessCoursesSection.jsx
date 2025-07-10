// AllBusinessCoursesSection.jsx

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";

const filters = [
  { label: "4.5 ★★★★ & up", count: "(10,000)" },
  { label: "4.0 ★★★★ & up", count: "(10,000)" },
  { label: "3.5 ★★★ & up", count: "(10,000)" },
  { label: "3.0 ★★★& up", count: "(10,000)" },
];

const durations = [
  { label: "0-1 Hour", count: "(7,756)" },
  { label: "1-3 Hours", count: "(10,000)" },
  { label: "3-6 Hours", count: "(7,108)" },
  { label: "6-17 Hours", count: "(3,822)", disabled: true },
];

const topicOptions = [
  { label: "Sales Skills", count: "(984)" },
  { label: "Project Management", count: "(953)" },
  { label: "Entrepreneurship Fundamentals", count: "(795)" },
  { label: "Business Strategy", count: "(669)", disabled: true },
];

const subcategoryOptions = [
  { label: "Entrepreneurship", count: "(5,281)" },
  { label: "Management", count: "(5,163)" },
  { label: "Project Management", count: "(3,548)" },
  { label: "Communication", count: "(2,887)", disabled: true },
];

const levelOptions = [
  { label: "All Levels", count: "(10,000)" },
  { label: "Beginner", count: "(10,000)" },
  { label: "Intermediate", count: "(3,952)" },
  { label: "Expert", count: "(737)" },
];

const languageOptions = [
  { label: "English", count: "(10,000)" },
  { label: "Hindi", count: "(10,000)" },
  { label: "Tamil", count: "(3,952)" },
  { label: "French", count: "(737)" },
];

const priceOptions = [
  { label: "Paid", count: "(10,000)" },
  { label: "Free", count: "(3,952)" },
];

const practiceOptions = [
  { label: "Quizzes", count: "(10,000)" },
  { label: "Coding Exercises", count: "(3,952)" },
  { label: "Practice Tests", count: "(3,342)" },
  { label: "Role Plays", count: "(952)" },
];

const subtitleOptions = [
  { label: "English", count: "(10,000)" },
  { label: "Portugues", count: "(3,952)" },
  { label: "French", count: "(3,342)" },
  { label: "Hindi", count: "(952)" },
];

const courses = [
  {
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    subtitle: "Master SQL skills for data analysis",
    instructor: "Jose Portilla",
    rating: "4.7",
    students: "(236,155)",
    duration: "9 total hours • 83 lectures • All Levels",
    badge: "Bestseller",
    price: "₹3,849",
    image: "/assets/business/sql.jpg",
    hoverLearn: [
      "Use SQL to query a database",
      "Perform data analysis with SQL",
      "Build real-world projects using PostgreSQL",
    ],
  },
  {
    title: "An Entire MBA in 1 Course",
    subtitle: "Award-Winning Business School Prof’s Bestselling MBA Course",
    instructor: "Chris Haroun",
    rating: "4.6",
    students: "(200,000)",
    duration: "8 total hours • 75 lectures • All Levels",
    badge: "Bestseller",
    price: "₹2,499",
    image: "/assets/business/mba.jpg",
    hoverLearn: [
      "Understand business strategy essentials",
      "Build financial models from scratch",
      "Launch your own startup ideas",
    ],
  },
  {
    title: "Microsoft Power BI Desktop for Business Intelligence",
    subtitle: "Get your skills built and sharpened",
    instructor: "Maven Analytics",
    rating: "4.8",
    students: "(300,000)",
    duration: "10 total hours • 90 lectures • Intermediate",
    badge: "Bestseller",
    price: "₹2,899",
    image: "/assets/business/bi.jpg",
    hoverLearn: [
      "Visualize and analyze data effectively",
      "Create dashboards in Power BI",
      "Use DAX for calculations",
    ],
  },
  {
    title: "Communication Fundamentals: How To Communicate Better",
    subtitle: "Become an Effective Communicator And Learn How to Get Your Message Across",
    instructor: "Life Progression Project, Dr. Lorraine Wiseman, PhD",
    rating: "4.5",
    students: "(127,415)",
    duration: "1.5 total hours • 38 lectures • All Levels",
    badge: "",
    price: "₹2,589",
    image: "/assets/business/Communicate.jpg",
    hoverLearn: [
      "Learn how to communicate effectively",
      "Handle difficult conversations",
      "Master verbal & non-verbal cues",
    ],
  },
  {
    title: "PMP Exam Prep Seminar - Complete Exam Coverage with 35 PDUs",
    subtitle: "PMP Exam Prep Seminar – Earn 35 PDUs by completing the entire PMP course",
    instructor: "Joseph Phillips",
    rating: "4.6",
    students: "(114,742)",
    duration: "30 total hours • 380 lectures • All Levels",
    badge: "Bestseller",
    price: "₹3,219",
    image: "/assets/business/exam.jpg",
    hoverLearn: [
      "Understand all 49 PMP processes",
      "Pass the PMP Exam on first attempt",
      "Master PMBOK Guide concepts",
    ],
  },
  {
    title: "Tableau A-Z: Hands-On Tableau Training for Data Science",
    subtitle: "Learn Tableau for data science step by step. Real-life data analytics exercises & quizzes included.",
    instructor: "Kirill Eremenko, SuperDataScience Team, Ligency Team",
    rating: "4.6",
    students: "(104,675)",
    duration: "8.5 total hours • 79 lectures • All Levels",
    badge: "",
    price: "₹4,559",
    image: "/assets/business/datascience.jpg",
    hoverLearn: [
      "Build interactive Tableau dashboards",
      "Connect Tableau to data sources",
      "Create charts and visualizations",
    ],
  },

  {
  title: "Cross-Cultural Communication: How To Flex Your Style",
  subtitle: "Cross-Cultural Communication: Using Language Appropriately, Expressions, Gestures & Cues, Cultural Profiles & more!",
  instructor: "Life Progression Project, Dr. Lorraine Wiseman, PhD",
  rating: "4.4",
  students: "(57,367)",
  duration: "1 total hour • 32 lectures • All Levels",
  badge: "",
  price: "₹2,909",
  image: "/assets/business/crosscultural.jpg",
  hoverLearn: [
    "Master cultural communication skills",
    "Understand gestures & expressions across cultures",
    "Improve team collaboration globally"
  ],
},

{
  title: "Active Listening: You Can Be a Great Listener",
  subtitle: "Improve your reactive habits, define your listening mindset, amplify your curiosity, & add value as a great listener",
  instructor: "Lauren Powers",
  rating: "4.6",
  students: "(51,607)",
  duration: "2.5 total hours • 44 lectures • All Levels",
  badge: "Bestseller",
  price: "₹4,229",
  image: "/assets/business/activelistening.jpg",
  hoverLearn: [
    "Cultivate active listening habits",
    "Enhance communication at work",
    "Engage in mindful conversations"
  ],
},
{
  title: "Digital Transformation 3.0 – AI Unleashed: Building a Roadmap",
  subtitle: "Learn how to define and implement a phased digital transformation program to establish your company as a digital leader.",
  instructor: "Mike Connor",
  rating: "4.5",
  students: "(48,277)",
  duration: "4.5 total hours • 13 lectures • Intermediate",
  badge: "Bestseller",
  price: "₹2,910",
  image: "/assets/business/digitaltransformation.jpg",
  hoverLearn: [
    "Create a digital roadmap",
    "Implement AI in business transformation",
    "Define transformation phases"
  ],
}
];
const FilterSection = ({ title, options, show, toggle }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-3 cursor-pointer text-lg font-semibold" onClick={toggle}>
      <h4>{title}</h4>
      {show ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
    </div>
    {show &&
      options.map((item, idx) => (
        <div key={idx} className={`flex items-center gap-2 mb-2 text-[15px] ${item.disabled ? "opacity-50" : ""}`}>
          <input type="checkbox" disabled={item.disabled} className="accent-purple-600" />
          <span className="text-gray-700">{item.label}</span>
          <span className="text-gray-500">{item.count}</span>
        </div>
      ))}
    {show && <button className="mt-2 text-purple-600 font-medium text-[15px]">Show more</button>}
    <hr className="mt-4 border-gray-300" />
  </div>
);

// ✅ Pagination component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-md border text-sm font-semibold ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const AllBusinessCoursesSection = () => {
  const [visibleHoverIndex, setVisibleHoverIndex] = useState(null);
  const [showRatings, setShowRatings] = useState(false);
  const [showDurations, setShowDurations] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showPaids, setShowPaids] = useState(false);
  const [showPractices, setShowPractices] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="px-4 sm:px-6 lg:px-16 pt-10 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] font-extrabold text-gray-900">All Business courses</h2>
        <span className="text-sm font-semibold text-gray-700">{courses.length} results</span>
      </div>

      <div className="border px-4 py-4 mb-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base font-bold text-[#2d2f31] bg-[#f7f9fa] border-[#d1d7dc]">
        <span className="text-purple-600 text-3xl sm:text-4xl font-bold">ⓘ</span>
        <p>Not sure? All courses have a 30-day money-back guarantee</p>
      </div>

      {/* Filter + Sort */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-8">
        <button
          className="flex items-center gap-2 border px-4 py-2 rounded-md font-semibold text-base"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="text-2xl">☰</span> Filter
        </button>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-md">
          <span className="text-base font-semibold text-gray-800">Sort by</span>
          <select className="bg-white text-base focus:outline-none">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {showFilters && (
          <aside className="w-full lg:w-1/4 min-w-[220px]">
            <hr className="mb-4 border-gray-300" />
            <FilterSection title="Ratings" show={showRatings} toggle={() => setShowRatings(!showRatings)} options={filters} />
            <FilterSection title="Video Duration" show={showDurations} toggle={() => setShowDurations(!showDurations)} options={durations} />
            <FilterSection title="Topic" show={showTopics} toggle={() => setShowTopics(!showTopics)} options={topicOptions} />
            <FilterSection title="Subcategory" show={showSubcategories} toggle={() => setShowSubcategories(!showSubcategories)} options={subcategoryOptions} />
            <FilterSection title="Level" show={showLevels} toggle={() => setShowLevels(!showLevels)} options={levelOptions} />
            <FilterSection title="Language" show={showLanguages} toggle={() => setShowLanguages(!showLanguages)} options={languageOptions} />
            <FilterSection title="Price" show={showPaids} toggle={() => setShowPaids(!showPaids)} options={priceOptions} />
            <FilterSection title="Practice" show={showPractices} toggle={() => setShowPractices(!showPractices)} options={practiceOptions} />
            <FilterSection title="Subtitle" show={showSubtitles} toggle={() => setShowSubtitles(!showSubtitles)} options={subtitleOptions} />
          </aside>
        )}

        <main className="flex-1 space-y-6 relative z-0">
          {paginatedCourses.map((course, i) => (
  <React.Fragment key={i}>
    <div
      className="relative"
      onMouseEnter={() => setVisibleHoverIndex(i)}
      onMouseLeave={() => setVisibleHoverIndex(null)}
    >
      <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-300 pb-6 bg-white">
        <img src={course.image} alt={course.title} className="w-full sm:w-[332px] h-auto sm:h-[230px] object-contain rounded border" />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
          <p className="text-sm text-gray-700">{course.subtitle}</p>
          <p className="text-sm text-gray-700 mt-1">{course.instructor}</p>
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="font-bold text-yellow-700">{course.rating}</span>
            <span className="text-yellow-600">★</span>
            <span className="text-gray-600">{course.students}</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">{course.duration}</div>
          {course.badge && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold mt-1 inline-block">
              {course.badge}
            </span>
          )}
        </div>
        <div className="text-right font-bold text-[15px] text-gray-900 mt-2 sm:mt-0">{course.price}</div>
      </div>

      {visibleHoverIndex === i && (
        <div className="hidden sm:block absolute -top-[140px] left-[260px] w-[360px] shadow-2xl rounded-md bg-white border border-gray-300 px-5 py-4 z-50">
          <h4 className="font-bold text-gray-900 text-sm mb-3">What you’ll learn</h4>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            {course.hoverLearn.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-purple-600 w-[210px] text-white font-semibold text-lg px-4 py-2 rounded hover:bg-purple-700 transition">
              Add to cart
            </button>
            <div className="w-10 h-10 rounded-full border-2 hover:bg-purple-100 border-purple-600 flex items-center justify-center mr-6">
              <Heart className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Trust Udemy Section – only on first page after 2nd course */}
{currentPage === 1 && i === 1 && (
  <div className="border border-gray-300 bg-white rounded-xl px-6 py-6 text-left space-y-4 mt-6 shadow-sm">
    <h3 className="text-lg md:text-xl font-bold text-gray-900">Top companies trust Udemy</h3>
    <p className="text-sm text-gray-700">
      Get your team access to Udemy’s top 250,000+ courses
    </p>
    <div className="flex justify-start flex-wrap gap-6 mt-2">
      {["logo1.svg", "logo2.svg", "logo3.svg", "logo4.svg"].map((logo, idx) => (
        <img
          key={idx}
          src={`/assets/business/${logo}`}
          alt={`Logo ${idx}`}
          className="h-8 object-contain"
        />
      ))}
    </div>
    <div className="pt-2">
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2 rounded">
        Try Udemy Business
      </button>
    </div>
  </div>
)}

  </React.Fragment>
))}

          {/* ✅ Pagination rendered below course list */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
};

export default AllBusinessCoursesSection;