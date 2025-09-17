import CategoryPage from "./CategoryPage";
import {
  PhotographyBasicsCourses,
  photoEditingTopics,
  photographyInstructors,
} from "./data";

const PhotoGraphyBasicsPage = () => (
  <CategoryPage
    title="Photography Basics"
    paragraph="Explore courses from experienced, real-world experts."
    courses={PhotographyBasicsCourses}
    topics={photoEditingTopics}
    instructors={photographyInstructors}
  />
);
export default PhotoGraphyBasicsPage;
