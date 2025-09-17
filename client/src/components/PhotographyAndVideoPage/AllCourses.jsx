import { useState } from "react";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";
import CardSection from "./CardSection";
import CourseSection from "./CourseSection";
import FeaturedCourse from "./FeaturedCourse";
import PopularTopics from "./PopularTopiics";
import PopularInstructors from "./PopularInstructors";

const MainPage = ({ title, paragraph, courses, topics, instructors }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = courses.find((c) => c.id === id);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const featureCourse = courses.slice(0, 1);

  return (
    <div className="min-h-screen bg-white relative p-2 pt-8">
      {selectedCourse ? (
        <DetailView
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      ) : (
        <>
          <HeroBanner title={title} paragraph={paragraph} />

          {/* Cards */}
          <CardSection courses={courses} />

          {/* Featured */}
          {featureCourse && (
            <div className=" mx-6 mt-4">
              {/* Section Title */}
              <h2 className="text-2xl font-bold mb-2">Featured course</h2>
              <p className="text-gray-600 ">
                Many learners enjoyed this highly rated course for its engaging
                content.
              </p>

              {/* Horizontal Scroll Container */}
              <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar">
                {featureCourse?.map((course) => (
                  <div
                    key={course.id}
                    className="snap-start flex-shrink-0 w-full"
                  >
                    <FeaturedCourse course={course} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Topics */}
          {topics && <PopularTopics topics={topics} />}

          {/* Instructors */}
          {instructors && <PopularInstructors instructors={instructors} />}

          {/* Courses */}
          <CourseSection
            handleCourseClick={handleCourseClick}
            setHoveredCourse={setHoveredCourse}
            hoveredCourse={hoveredCourse}
            filteredCourses={courses}
          />
        </>
      )}
    </div>
  );
};

export default MainPage;
