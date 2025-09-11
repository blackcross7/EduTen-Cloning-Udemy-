import CategoryPage from "./CategoryPage";
import {
  leadershipCourses,
  personalDevelopmentTopics,
  personalDevelopmentInstructors,
} from "./data";

export default function LeadershipPage() {
  return (
    <CategoryPage
      title="Leadership Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={leadershipCourses}
      topics={personalDevelopmentTopics}
      instructors={personalDevelopmentInstructors}
    />
  );
}
