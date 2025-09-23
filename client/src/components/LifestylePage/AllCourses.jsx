import React, { useState, useEffect } from "react";
import { FaFilter, FaStar, FaInfoCircle } from "react-icons/fa";

const AllCourses = ({ courses, heading = "All Courses" }) => {
  const [showFilters, setShowFilters] = useState(false); 
  const [sortVisible, setSortVisible] = useState(false);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(7);

    useEffect(() => {
    const updateCoursesPerPage = () => {
      const width = window.innerWidth;
      setCoursesPerPage(width < 768 ? 3 : 7);
    };
    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);
    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  const languages = [
    "English","Español","Português","Türkçe","Deutsch","Français","Italiano","Polski","Afrikaans",
    "Magyar","ქართული","Latviešu","Slovenčina","Kiswahili","Oʻzbek"
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
          className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm hover:bg-purple-200 transition"
        >
          <FaFilter /> Filter
        </button>

        <div className="relative inline-block text-left">
          <button
            onClick={() => setSortVisible(!sortVisible)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium text-sm"
          >
            Sort by: Most Popular
          </button>
          {sortVisible && (
            <div className="absolute mt-1 w-40 bg-white border rounded shadow z-10">
              <div className="py-1 text-sm text-gray-900">
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Most Popular</div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Highest Rated</div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Newest</div>
              </div>
            </div>
          )}
        </div>
      </div>

    <div className="flex gap-6 mt-6">
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
        fixed z-10 top-0 left-0 h-full w-72 bg-white border-r shadow-lg
        flex flex-col
        transition-transform duration-300
        ${showFilters ? "translate-x-0" : "-translate-x-full"}
         md:translate-x-0 md:relative md:h-auto md:border md:rounded-lg md:p-4 md:shadow-none
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
              &nbsp; & {rating} & up
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
          className="text-purple-600 text-xs mt-2"
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
          className="text-purple-600 text-xs mt-2"
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
      {/* Course list */}
      <div className="flex-1 space-y-8">
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
              <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
                <div className="w-full sm:w-52 flex justify-center sm:justify-start">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-52 h-28 object-cover rounded"
                  />
                </div>

                <div className="flex flex-col items-center sm:items-start justify-between flex-1 sm:pr-12 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{course.subtitle}</p>
                  <div className="text-sm text-yellow-600 font-medium">
                    {course.rating} ⭐ ({course.students})
                  </div>
                  <p className="text-sm text-gray-500">
                    {course.hours} • {course.level}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {course.premium && (
                      <span className="text-xs text-white bg-purple-700 px-2 py-0.5 rounded">
                        <b>Premium</b>
                      </span>
                    )}
                    {course.bestseller && (
                      <span className="text-xs text-green-800 bg-green-100 px-2 py-0.5 rounded">
                        Bestseller
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right text-base font-semibold text-gray-900 min-w-[80px]">
                  {course.price}
                </div>
              </div>

              {/* Hover Details */}
              <div
                className={`
                  w-full md:w-80 bg-white shadow-xl border rounded-lg p-4 text-sm text-gray-800 
                  mt-4 md:mt-0 
                  hidden group-hover:block 
                  md:absolute md:top-0 md:left-[300px] z-20
                `}
              >
                <h4 className="font-semibold mb-2">What you’ll learn</h4>
                <ul className="space-y-2 mb-4">
                  {course.learnPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✔</span> {point}
                    </li>
                  ))}
                </ul>
                <button className="w-full text-white bg-purple-700 py-2 rounded hover:bg-purple-700 text-sm font-medium">
                  Add to cart
                </button>
              </div>
            </div>
          )
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === idx + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default AllCourses;
