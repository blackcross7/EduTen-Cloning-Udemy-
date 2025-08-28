import { useState } from "react";
import HorizontalCard from "./HorizontalCard";
import HoverCard from "./HoverCard";

const AllCourse = ({
  courses,
  setHoveredCourse,
  hoveredCourse,
  handleCourseClick,
}) => {
  // Pagination setup
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  // Get paginated slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="md:px-6 py-8 max-w-7xl md:mx-4 px-2 mx-auto">
      <h1 className="text-2xl font-bold mb-6">All courses</h1>

      {courses.length > 0 ? (
        <>
          <div className="flex flex-col flex-wrap">
            {paginatedCourses.map((course) => {
              let position = "top-right";

              return (
                <div
                  key={course.id}
                  onMouseEnter={() => setHoveredCourse(course)}
                  onMouseLeave={() => setHoveredCourse(null)}
                  className="relative md:my-1"
                >
                  <HorizontalCard
                    {...course}
                    onClick={handleCourseClick}
                    allCourse={true}
                  />
                  {hoveredCourse?.id === course.id && (
                    <HoverCard
                      course={hoveredCourse}
                      position={position}
                      setHoveredCourse={setHoveredCourse}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No courses found..
        </div>
      )}
    </div>
  );
};

export default AllCourse;
