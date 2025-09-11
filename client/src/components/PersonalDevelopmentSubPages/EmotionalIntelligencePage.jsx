import CategoryPage from "./CategoryPage";
import {
  emotionalIntelligenceCourses,
  personalDevelopmentTopics,
  personalDevelopmentInstructors,
} from "./data";

export default function EmotionalIntelligencePage() {
  return (
    <CategoryPage
      title="Emotional Intelligence"
      paragraph="Explore courses from experienced, real-world experts."
      courses={emotionalIntelligenceCourses}
      topics={personalDevelopmentTopics}
      instructors={personalDevelopmentInstructors}
    />
  );
}
