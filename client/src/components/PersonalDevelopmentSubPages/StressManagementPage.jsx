import CategoryPage from "./CategoryPage";
import {
  stressManagementCourses,
  personalDevelopmentTopics,
  personalDevelopmentInstructors,
} from "./data";

export default function StressManagementPage() {
  return (
    <CategoryPage
      title="Stress Management Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={stressManagementCourses}
      topics={personalDevelopmentTopics}
      instructors={personalDevelopmentInstructors}
    />
  );
}
