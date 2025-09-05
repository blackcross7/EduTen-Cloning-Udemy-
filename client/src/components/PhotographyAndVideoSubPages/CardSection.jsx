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
    <div className="px-6 py-8 max-w-7xl mx-auto  gap-2 flex flex-col md:flex-row">
      {/* Sidebar Filters */}
      <div className="w-full lg:w-64">
        <SidebarFilters
          levels={["Beginner", "Intermediate", "Advanced"]}
          providers={["AWS", "Azure", "Google Cloud"]}
          prices={["Free", "Paid"]}
          ratings={["4.5 & up", "4.0 & up", "3.5 & up"]}
          languages={["English", "Hindi"]}
          // selectedFilters={filteredCourses}
          // setSelectedFilters={setSelectedFilters}
        />
      </div>
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            return (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="relative"
              >
                <Card {...course} onClick={handleCourseClick} />
                {/* {hoveredCourse?.id === course.id && (
                  <HoverCard course={hoveredCourse} />
                )} */}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">No courses found</div>
      )}
    </div>
  );
};

export default CardSection;
