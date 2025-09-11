import { useState } from "react";
import HeroBanner from "./HeroBanner";
import DetailView from "./DetailView";
import CardSection from "./CardSection";
import CourseSection from "./CourseSection";
import FeaturedCourse from "./FeaturedCourse";
import PopularTopics from "./PopularTopiics";
import PopularInstructors from "./PopularInstructors";

const CategoryPage = ({ title, paragraph, courses, topics, instructors }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Get full course info on click
  const handleCourseClick = (id) => {
    const course = courses.find((c) => c.id === id);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const featureCourse = courses[0];

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
          {featureCourse && <FeaturedCourse course={featureCourse} />}

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

export default CategoryPage;
