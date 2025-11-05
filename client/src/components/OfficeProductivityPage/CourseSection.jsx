import HoverCard from "./HoverCard";
import SidebarFilters from "./FilterSection";
import CourseListItem from "./CourseListItem";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

const CardSection = ({
  filteredCourses,
  // setHoveredCourse,
  // hoveredCourse,
  // handleCourseClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7); // default desktop = 7
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2); // mobile = 2
      } else {
        setItemsPerPage(7); // desktop = 7
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <h2 className="text-[24px] pl-5 pb-6 sm:text-[28px] font-extrabold ml-[18%] lg:ml-0 text-gray-900 ">
        Office Productivity Courses
      </h2>
      {/* Info Banner */}
      <div className="border mx-4 px-4 py-4 mb-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base font-bold text-[#2d2f31] bg-[#f7f9fa] border-[#d1d7dc]">
        <span className="text-purple-600 text-3xl sm:text-4xl font-bold">
          ⓘ
        </span>

        <p>Not sure? All courses have a 30-day money-back guarantee</p>
      </div>

      {/* Filter Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4 flex items-center hover:bg-slate-50 text-gray-700 font-semibold ml-4 border "
      >
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
      </button>

      <div className="px-6 py-8 pt-4 max-w-7xl mx-auto gap-2 flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-auto">
          {showFilters && (
            <SidebarFilters
              levels={["Beginner", "Intermediate", "Advanced"]}
              providers={["AWS", "Azure", "Google Cloud"]}
              prices={["Free", "Paid"]}
              ratings={["4.5 & up", "4.0 & up", "3.5 & up"]}
              languages={["English", "Hindi"]}
              // selectedFilters={filteredCourses}
              // setSelectedFilters={setSelectedFilters}
            />
          )}
        </div>

        {/* Courses List */}
        {filteredCourses.length > 0 ? (
          <div className="flex-1">
            {currentCourses?.map((course) => (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="relative"
              >
                <CourseListItem course={course} />
                {/* Tooltip */}
                {console.log(hoveredCourse?.id === course.id)}
                {hoveredCourse?.id === course.id && (
                  <HoverCard course={hoveredCourse} />
                )}
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            No courses found
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSection;
