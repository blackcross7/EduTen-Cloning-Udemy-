import CategoryPage from "./CategoryPage";
import {
  LightingTechniquesCourses,
  photoEditingTopics,
  photographyInstructors,
} from "./data";

const LightingTechniquesPage = () => (
  <CategoryPage
    title="Lighting Techniques"
    paragraph="Explore courses from experienced, real-world experts."
    courses={LightingTechniquesCourses}
    topics={photoEditingTopics}
    instructors={photographyInstructors}
  />
);
export default LightingTechniquesPage;
