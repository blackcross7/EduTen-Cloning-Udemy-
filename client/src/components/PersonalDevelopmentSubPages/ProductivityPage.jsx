import CategoryPage from "./CategoryPage";
import {
  productivityCourses,
  personalDevelopmentTopics,
  personalDevelopmentInstructors,
} from "./data";

export default function ProductivityPage() {
  return (
    <CategoryPage
      title="Leadership Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={productivityCourses}
      topics={personalDevelopmentTopics}
      instructors={personalDevelopmentInstructors}
    />
  );
}
