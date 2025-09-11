import CategoryPage from "./CategoryPage";
import {
  DronePhotographyCourses,
  photoEditingTopics,
  photographyInstructors,
} from "./data";

const DronePhotographyPage = () => (
  <CategoryPage
    title="Drone Photography"
    paragraph="Explore courses from experienced, real-world experts."
    courses={DronePhotographyCourses}
    topics={photoEditingTopics}
    instructors={photographyInstructors}
  />
);

export default DronePhotographyPage;
