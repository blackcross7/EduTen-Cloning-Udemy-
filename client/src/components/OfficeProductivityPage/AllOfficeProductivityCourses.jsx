import { useMemo, useState } from "react";
import HorizontalCard from "./HorizontalCard";
import HoverCard from "./HoverCard";
import Filter from "./Filter";
import { Menu } from "lucide-react";

const AllOfficeProductivityCourse = ({
  courses,
  setHoveredCourse,
  hoveredCourse,
  handleCourseClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false); // toggle filter

  // Filters state
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [sortBy, setSortBy] = useState("Most Popular");

  const itemsPerPage = 5;

  // Generate dynamic filter options based on courses
  const levels = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.level)))],
    [courses]
  );
  const topics = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.subPage)))],
    [courses]
  );
  const priceTypes = useMemo(() => ["All", "Free", "Paid"], []);

  // Filter + sort courses dynamically
  const filteredCourses = useMemo(() => {
    return courses
      .filter(
        (course) =>
          (selectedLevel === "All" || course.level === selectedLevel) &&
          (selectedPrice === "All" || course.priceType === selectedPrice) &&
          (selectedTopic === "All" || course.subPage === selectedTopic)
      )
      .sort((a, b) => {
        if (sortBy === "Most Popular")
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        if (sortBy === "Highest Rated")
          return (b.rating || 0) - (a.rating || 0);
        if (sortBy === "Newest")
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        return 0;
      });
  }, [courses, selectedLevel, selectedPrice, selectedTopic, sortBy]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="md:px-6 py-8 max-w-7xl md:mx-4 px-2 mx-auto">
      <div className=" flex mb-6 gap-4 flex-col">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <div className="border px-4 py-4 mb-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base font-bold text-[#2d2f31] bg-[#f7f9fa] border-[#d1d7dc]">
          <span className="text-purple-600 text-3xl sm:text-4xl font-bold">
            ⓘ
          </span>
          <p>Not sure? All courses have a 30-day money-back guarantee</p>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-50 border shadow-sm flex items-center gap-2"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {<Menu />} Filters
          </button>
          {/* <Filter sortBy={sortBy} setSortBy={setSortBy} /> */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter sidebar */}
        {showFilter && (
          <div className="w-full lg:w-1/3">
            <Filter
              levels={levels}
              topics={topics}
              priceTypes={priceTypes}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        )}

        {/* Course list */}
        <div className={`${showFilter ? "w-full lg:w-2/3" : "w-full"}`}>
          {filteredCourses.length > 0 ? (
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
                        <HoverCard course={hoveredCourse} position={position} />
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
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
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
      </div>
    </div>
  );
};

export default AllOfficeProductivityCourse;
