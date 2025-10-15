import React, { useState, useEffect } from "react";
import { FaFilter, FaStar, FaInfoCircle } from "react-icons/fa";

const AllCourses = ({ courses, heading = "All Courses" }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(7); // Default for desktop

  // Effect to adjust courses per page based on screen width
  useEffect(() => {
    const updateCoursesPerPage = () => {
      // More items can be shown on mobile with the new compact layout
      setCoursesPerPage(window.innerWidth < 768 ? 5 : 7);
    };
    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);
    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  const languages = [
    "English", "Español", "Português", "Türkçe", "Deutsch", "Français", "Italiano", "Polski",
    "Afrikaans", "Magyar", "ქართული", "Latviešu", "Slovenčina", "Kiswahili", "Oʻzbek",
  ];

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  return (
    <section className="mt-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>

      {/* Info banner */}
      <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm w-full md:w-[88%] flex items-start gap-2">
        <FaInfoCircle className="text-purple-600 mt-1" />
        <p className="text-sm text-gray-800">
          Not sure? All courses have a 30-day money-back guarantee
        </p>
      </div>

      {/* Filters + Sort buttons */}
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
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Most Popular</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Highest Rated</div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Newest</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {/* --- Sidebar Filters --- */}
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
                ${showFilters ? "translate-x-0" : "-translate-x-full"}
                md:static md:z-auto md:h-auto md:w-auto md:border md:rounded-lg md:p-4 md:shadow-none md:translate-x-0
              `}
            >
              {/* Header + Close (Mobile) */}
              <div className="flex justify-between items-center p-4 pb-0 md:hidden">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="text-gray-600 text-xl font-bold">&times;</button>
              </div>

              {/* Scrollable Filter Content */}
              <div className="flex-1 overflow-y-auto p-4 pt-2 md:p-0 md:overflow-visible">
                <h3 className="text-sm font-semibold mb-2">Ratings</h3>
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <div key={rating} className="flex items-center gap-2 mb-2">
                    <input type="radio" name="rating" />
                    <span className="flex items-center text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-yellow-400 ${i < Math.round(rating) ? "opacity-100" : "opacity-30"}`}
                        />
                      ))}
                      &nbsp;{rating} & up
                    </span>
                  </div>
                ))}

                <h3 className="text-sm font-semibold mt-6 mb-2">Video Duration</h3>
                {["0-1 Hour", "1-3 Hours", "3-6 Hours", "6-17 Hours", "17+ Hours"]
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
                {["All Levels", "Beginner", "Intermediate", "Expert"].map((level, index) => (
                  <div key={index} className="mb-1 text-sm">
                    <input type="checkbox" className="mr-2" /> {level}
                  </div>
                ))}

                <h3 className="text-sm font-semibold mt-6 mb-2">Language</h3>
                {languages.slice(0, showLangsMore ? languages.length : 5).map((lang, index) => (
                  <div key={index} className="mb-1 text-sm">
                    <input type="checkbox" className="mr-2" /> {lang}
                  </div>
                ))}
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

                <h3 className="text-sm font-semibold mt-6 mb-2">Subtitles</h3>
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

        {/* --- Course List --- */}
        <div className="flex-1">
          {currentCourses.map((course, index) =>
            course.ad ? (
              // ad block
              <div key={index} className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Top companies trust Udemy</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Get your team access to Udemy’s top 250,000+ courses
                </p>
                {/* logos and button */}
                <div className="flex items-center gap-6 flex-wrap mt-2 mb-4">
                  <img src="/assets/WebDevelopmentPage/nasdaq-dark.svg" alt="Nasdaq" className="h-6" />
                  <img src="/assets/WebDevelopmentPage/volkswagen-dark.svg" alt="Volkswagen" className="h-6" />
                  <img src="/assets/WebDevelopmentPage/netapp-dark.svg" alt="NetApp" className="h-6" />
                  <img src="/assets/WebDevelopmentPage/eventbrite-dark.svg" alt="Eventbrite" className="h-6" />
                </div>
                <button className="border border-purple-600 text-purple-700 px-4 py-1 rounded text-sm hover:bg-purple-50">
                  Try Udemy Business
                </button>
              </div>
            ) : (
              // course block
              <div key={index} className="relative group">
                {/* This is the responsive course item layout */}
                <div className="flex flex-row gap-2 sm:gap-4 border-b py-4">
                  {/* Left: Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-16 sm:w-40 sm:h-24 object-cover rounded"
                  />

                  {/* Middle: Info */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base font-bold line-clamp-2">{course.title}</h3>
                    <p className="hidden sm:block text-xs text-gray-600 mt-1 line-clamp-1">{course.subtitle}</p>
                    
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500 font-semibold text-xs sm:text-sm">{course.rating}</span>
                      <FaStar className="text-yellow-400 w-3 h-3" />
                      <span className="text-gray-600 text-xs sm:text-sm">({course.students.toLocaleString()})</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {course.hours} total hours • {course.level}
                    </p>

                    <div className="flex gap-2 mt-2">
                      {course.premium && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-purple-100 text-purple-700">
                          Premium
                        </span>
                      )}
                      {course.bestseller && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-yellow-100 text-yellow-800">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Price */}
                  <div className="flex flex-col items-end w-16 sm:w-20 text-right">
                    <span className="text-sm sm:text-base font-bold">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* --- START: NEW HOVER CARD --- */}
                {/* Hidden on mobile, appears on desktop hover */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-80 p-4 rounded-lg shadow-lg bg-white border border-gray-200 z-20 hidden group-hover:block">
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200"
                  aria-hidden
                />                  <h4 className="font-semibold mb-2 text-gray-900">What you'll learn</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {course.learnPoints?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition-colors">
                    Add to cart
                  </button>
                </div>
                {/* --- END: NEW HOVER CARD --- */}

              </div>
            )
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm"
            >
              Previous
            </button>
            <span className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50 font-semibold text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;