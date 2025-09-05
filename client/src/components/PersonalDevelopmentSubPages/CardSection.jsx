import Card from "./Card";
import HoverCard from "./HoverCard";
import SidebarFilters from "./FilterSection";

const CardSection = ({
  filteredCourses,
  setHoveredCourse,
  hoveredCourse,
  handleCourseClick,
}) => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-2">
      {/* Sidebar Filters */}
      <div className="w-full lg:w-64 shrink-0">
        <SidebarFilters
          levels={["Beginner", "Intermediate", "Advanced"]}
          providers={["AWS", "Azure", "Google Cloud"]}
          prices={["Free", "Paid"]}
          ratings={["4.5 & up", "4.0 & up", "3.5 & up"]}
          languages={["English", "Hindi"]}
        />
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCourse(course)}
              onMouseLeave={() => setHoveredCourse(null)}
              className="relative"
            >
              <Card {...course} onClick={handleCourseClick} />
              {/* Uncomment if you want hover popup */}
              {/* {hoveredCourse?.id === course.id && (
                <HoverCard course={hoveredCourse} />
              )} */}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 text-center text-gray-500 py-12">
          No courses found
        </div>
      )}
    </div>
  );
};

export default CardSection;
