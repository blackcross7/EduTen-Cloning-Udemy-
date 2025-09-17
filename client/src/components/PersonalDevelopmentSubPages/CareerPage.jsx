import CategoryPage from "./CategoryPage";
import {
  careerDevelopmentCourses,
  personalDevelopmentTopics,
  personalDevelopmentInstructors,
} from "./data";

export default function CareerPage() {
  return (
    <CategoryPage
      title="Career Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={careerDevelopmentCourses}
      topics={personalDevelopmentTopics}
      instructors={personalDevelopmentInstructors}
    />
  );
}
