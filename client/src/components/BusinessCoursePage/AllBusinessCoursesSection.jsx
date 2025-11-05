// AllBusinessCoursesSection.jsx

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";
import { FaFilter, FaStar } from "react-icons/fa";

// const filters = [
//   { label: "4.5", count: "(10,000)" },
//   { label: "4.0", count: "(10,000)" },
//   { label: "3.5", count: "(10,000)" },
//   { label: "3.0", count: "(10,000)" },
// ];

// const durations = [
//   { label: "0-1 Hour", count: "(7,756)" },
//   { label: "1-3 Hours", count: "(10,000)" },
//   { label: "3-6 Hours", count: "(7,108)" },
//   { label: "6-17 Hours", count: "(3,822)", disabled: true },
// ];

// const topicOptions = [
//   { label: "Sales Skills", count: "(984)" },
//   { label: "Project Management", count: "(953)" },
//   { label: "Entrepreneurship Fundamentals", count: "(795)" },
//   { label: "Business Strategy", count: "(669)", disabled: true },
// ];

// const subcategoryOptions = [
//   { label: "Entrepreneurship", count: "(5,281)" },
//   { label: "Management", count: "(5,163)" },
//   { label: "Project Management", count: "(3,548)" },
//   { label: "Communication", count: "(2,887)", disabled: true },
// ];

// const levelOptions = [
//   { label: "All Levels", count: "(10,000)" },
//   { label: "Beginner", count: "(10,000)" },
//   { label: "Intermediate", count: "(3,952)" },
//   { label: "Expert", count: "(737)" },
// ];

// const languageOptions = [
//   { label: "English", count: "(10,000)" },
//   { label: "Hindi", count: "(10,000)" },
//   { label: "Tamil", count: "(3,952)" },
//   { label: "French", count: "(737)" },
// ];

// const priceOptions = [
//   { label: "Paid", count: "(10,000)" },
//   { label: "Free", count: "(3,952)" },
// ];

// const practiceOptions = [
//   { label: "Quizzes", count: "(10,000)" },
//   { label: "Coding Exercises", count: "(3,952)" },
//   { label: "Practice Tests", count: "(3,342)" },
//   { label: "Role Plays", count: "(952)" },
// ];

// const subtitleOptions = [
//   { label: "English", count: "(10,000)" },
//   { label: "Portugues", count: "(3,952)" },
//   { label: "French", count: "(3,342)" },
//   { label: "Hindi", count: "(952)" },
// ];

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
    subtitle:
      "Become an Effective Communicator And Learn How to Get Your Message Across",
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
    subtitle:
      "PMP Exam Prep Seminar – Earn 35 PDUs by completing the entire PMP course",
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
    subtitle:
      "Learn Tableau for data science step by step. Real-life data analytics exercises & quizzes included.",
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
    subtitle:
      "Cross-Cultural Communication: Using Language Appropriately, Expressions, Gestures & Cues, Cultural Profiles & more!",
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
      "Improve team collaboration globally",
    ],
  },

  {
    title: "Active Listening: You Can Be a Great Listener",
    subtitle:
      "Improve your reactive habits, define your listening mindset, amplify your curiosity, & add value as a great listener",
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
      "Engage in mindful conversations",
    ],
  },
  {
    title: "Digital Transformation 3.0 – AI Unleashed: Building a Roadmap",
    subtitle:
      "Learn how to define and implement a phased digital transformation program to establish your company as a digital leader.",
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
      "Define transformation phases",
    ],
  },
];
const FilterSection = ({ title, options, show, toggle }) => (
  <div className="mb-6">
    <div
      className="flex justify-between items-center mb-3 cursor-pointer text-lg font-semibold"
      onClick={toggle}
    >
      <h4>{title}</h4>
      {show ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </div>

    {show &&
      options.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2 mb-2 text-[15px] ${
            item.disabled ? "opacity-50" : ""
          }`}
        >
          <input
            type="checkbox"
            disabled={item.disabled}
            className="accent-purple-600"
          />

          {/* Label and stars (only for Ratings) */}
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-medium">{item.label}</span>

            {/* ⭐ Only show stars if section title is Ratings */}
            {title === "Ratings" && (
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = parseFloat(item.label);
                  return (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={
                        rating >= star
                          ? "#facc15"
                          : rating >= star - 0.5
                          ? "url(#half-grad)"
                          : "#e5e7eb"
                      }
                      className="w-4 h-4"
                    >
                      <defs>
                        <linearGradient id="half-grad">
                          <stop offset="50%" stopColor="#facc15" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
                    </svg>
                  );
                })}
              </div>
            )}

            {title === "Ratings" && (
              <span className="text-gray-600 text-sm ml-1">& up</span>
            )}
          </div>

          <span className="text-gray-500">{item.count}</span>
        </div>
      ))}

    {show && (
      <button className="mt-2 text-purple-600 font-medium text-[15px]">
        Show more
      </button>
    )}
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
  // const [showRatings, setShowRatings] = useState(false);
  // const [showDurations, setShowDurations] = useState(false);
  // const [showTopics, setShowTopics] = useState(false);
  // const [showSubcategories, setShowSubcategories] = useState(false);
  // const [showLevels, setShowLevels] = useState(false);
  // const [showLanguages, setShowLanguages] = useState(false);
  // const [showPaids, setShowPaids] = useState(false);
  // const [showPractices, setShowPractices] = useState(false);
  // const [showSubtitles, setShowSubtitles] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="px-4 sm:px-6 xl:px-16 pt-10 relative">
      <div className="flex flex-col sm:flex-row  justify-between items-start sm:items-center mb-4">
        <h2 className="text-[24px] sm:text-[28px] ml-[19%] lg:ml-0 font-extrabold text-gray-900">
          All Business courses
        </h2>
        <span className="text-sm font-semibold text-gray-700">
          {courses.length} results
        </span>
      </div>

      <div className="border px-4 py-4 mb-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base font-bold text-[#2d2f31] bg-[#f7f9fa] border-[#d1d7dc]">
        <span className="text-purple-600 text-3xl sm:text-4xl font-bold">
          ⓘ
        </span>
        <p>Not sure? All courses have a 30-day money-back guarantee</p>
      </div>

      {/* Filters + Sort buttons */}
      <div className="flex items-center gap-4 mt-4 flex-wrap pb-8">
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
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Most Popular
                </div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Highest Rated
                </div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Newest
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {showFilters && (
          <>
            <aside
              className="
        fixed top-0 left-0 z-50 h-full w-[85vw] max-w-xs
        xl:static xl:block lg:w-1/3 lg:min-w-[220px]
        bg-white shadow-2xl p-5 overflow-y-auto transition-transform duration-300 ease-in-out
        rounded-tr-xl rounded-br-xl
      "
            >
              <button
                className="xl:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                ✕
              </button>

              {/* Optional heading for mobile */}
              <h3 className="text-xl font-bold mb-4 xl:hidden">Filters</h3>

              {/* <FilterSection
                title="Ratings"
                show={showRatings}
                toggle={() => setShowRatings(!showRatings)}
                options={filters}
              />
              <FilterSection
                title="Video Duration"
                show={showDurations}
                toggle={() => setShowDurations(!showDurations)}
                options={durations}
              />
              <FilterSection
                title="Topic"
                show={showTopics}
                toggle={() => setShowTopics(!showTopics)}
                options={topicOptions}
              />
              <FilterSection
                title="Subcategory"
                show={showSubcategories}
                toggle={() => setShowSubcategories(!showSubcategories)}
                options={subcategoryOptions}
              />
              <FilterSection
                title="Level"
                show={showLevels}
                toggle={() => setShowLevels(!showLevels)}
                options={levelOptions}
              />
              <FilterSection
                title="Language"
                show={showLanguages}
                toggle={() => setShowLanguages(!showLanguages)}
                options={languageOptions}
              />
              <FilterSection
                title="Price"
                show={showPaids}
                toggle={() => setShowPaids(!showPaids)}
                options={priceOptions}
              />
              <FilterSection
                title="Practice"
                show={showPractices}
                toggle={() => setShowPractices(!showPractices)}
                options={practiceOptions}
              />
              <FilterSection
                title="Subtitle"
                show={showSubtitles}
                toggle={() => setShowSubtitles(!showSubtitles)}
                options={subtitleOptions}
              /> */}
              {showFilters && (
                <>
                  {/* Mobile Backdrop */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setShowFilters(false)}
                  ></div>

                  {/* Sidebar */}
                  <div
                    className={`
                              fixed z-50 top-0 left-0 h-full w-72 bg-white border-r shadow-lg
                              flex flex-col
                              transition-transform duration-300
                              ${
                                showFilters
                                  ? "translate-x-0"
                                  : "-translate-x-full"
                              }
                              md:static md:z-auto md:h-auto md:w-auto md:border md:rounded-lg md:p-4 md:shadow-none md:translate-x-0
                            `}
                  >
                    {/* Header + Close (Mobile) */}
                    <div className="flex justify-between items-center p-4 pb-0 md:hidden">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-600 text-xl font-bold"
                      >
                        &times;
                      </button>
                    </div>

                    {/* Scrollable Filter Content */}
                    <div className="flex-1 overflow-y-auto p-4 pt-2 md:p-0 md:overflow-visible">
                      <h3 className="text-sm font-semibold mb-2">Ratings</h3>
                      {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                        <div
                          key={rating}
                          className="flex items-center gap-2 mb-2"
                        >
                          <input type="radio" name="rating" />
                          <span className="flex items-center text-sm">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`text-yellow-400 ${
                                  i < Math.round(rating)
                                    ? "opacity-100"
                                    : "opacity-30"
                                }`}
                              />
                            ))}
                            &nbsp;{rating} & up
                          </span>
                        </div>
                      ))}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Video Duration
                      </h3>
                      {[
                        "0-1 Hour",
                        "1-3 Hours",
                        "3-6 Hours",
                        "6-17 Hours",
                        "17+ Hours",
                      ]
                        .slice(0, showDurationMore ? 5 : 3)
                        .map((label, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {label}
                          </div>
                        ))}
                      <button
                        onClick={() => setShowDurationMore(!showDurationMore)}
                        className="text-purple-600 text-xs font-semibold mt-2"
                      >
                        {showDurationMore ? "Show less" : "Show more"}
                      </button>

                      <h3 className="text-sm font-semibold mt-6 mb-2">Level</h3>
                      {["All Levels", "Beginner", "Intermediate", "Expert"].map(
                        (level, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {level}
                          </div>
                        )
                      )}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Language
                      </h3>
                      {/* {languages
                        .slice(0, showLangsMore ? languages.length : 5)
                        .map((lang, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {lang}
                          </div>
                        ))} */}
                      <button
                        onClick={() => setShowLangsMore(!showLangsMore)}
                        className="text-purple-600 text-xs font-semibold mt-2"
                      >
                        {showLangsMore ? "Show less" : "Show more"}
                      </button>

                      <h3 className="text-sm font-semibold mt-6 mb-2">Price</h3>
                      {["Paid", "Free"].map((price, index) => (
                        <div key={index} className="mb-1 text-sm">
                          <input type="checkbox" className="mr-2" /> {price}
                        </div>
                      ))}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Subtitles
                      </h3>
                      <div className="text-sm">
                        <input type="checkbox" className="mr-2" /> Available
                      </div>
                    </div>

                    {/* Footer (Mobile) */}
                    <div className="p-4 border-t md:hidden">
                      <button
                        onClick={() => setShowFilters(false)}
                        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 text-sm font-semibold"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </>
              )}
            </aside>

            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
              onClick={() => setShowFilters(false)}
            />
          </>
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
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full sm:w-[332px] h-auto sm:h-[230px] object-center rounded border"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-center lg:text-left text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-center lg:text-left text-gray-700">
                      {course.subtitle}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      {course.instructor}
                    </p>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="font-bold text-yellow-700">
                        {course.rating}
                      </span>
                      <span className="text-yellow-600">★</span>
                      <span className="text-gray-600">{course.students}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {course.duration}
                    </div>
                    {course.badge && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold mt-1 inline-block">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <div className="lg:text-right text-left font-bold text-[15px]  text-gray-900 mt-2 sm:mt-0">
                    {course.price}
                  </div>
                </div>

                {visibleHoverIndex === i && (
                  <div className="hidden sm:block absolute -top-[140px] left-[260px] w-[360px] shadow-2xl rounded-md bg-white border border-gray-300 px-5 py-4 z-50">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">
                      What you’ll learn
                    </h4>
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

              {/* Trust Eduten Section – only on first page after 2nd course */}
              {currentPage === 1 && i === 1 && (
                <div className="border border-gray-300 bg-white rounded-xl px-6 py-6 text-left space-y-4 mt-6 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold text-center lg:text-left text-gray-900">
                    Top companies trust Eduten
                  </h3>
                  <p className="text-sm text-center lg:text-left  text-gray-700">
                    Get your team access to Eduten’s top 250,000+ courses
                  </p>
                  <div className="flex justify-start flex-wrap gap-6 mt-2">
                    {["logo1.svg", "logo2.svg", "logo3.svg", "logo4.svg"].map(
                      (logo, idx) => (
                        <img
                          key={idx}
                          src={`/assets/business/${logo}`}
                          alt={`Logo ${idx}`}
                          className="h-8 object-contain"
                        />
                      )
                    )}
                  </div>
                  <div className="pt-2 ml-[24%] lg:ml-0">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2 rounded">
                      Try Eduten Business
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
