import HoverCard from "./HoverCard";
import SidebarFilters from "./FilterSection";
import CourseListItem from "./CourseListItem";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const CourseSection = ({
  filteredCourses,
  // setHoveredCourse,
  // hoveredCourse,
  // handleCourseClick,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7); // default desktop = 7
  const [hoveredCourse, setHoveredCourse] = useState(null);

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
  // console.log(hoveredCourse);

  return (
    <div>
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
        className="mb-4 flex items-center hover:bg-slate-50 text-gray-700 font-semibold ml-4 border p-4 border-gray-500"
      >
        <Menu size={35} /> Filter
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
            <div className=" h-48"></div>

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

export default CourseSection;
