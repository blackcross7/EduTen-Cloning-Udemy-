import CategoryPage from "./CategoryPage";
import {
  PhotoEditingCourses,
  photoEditingTopics,
  photographyInstructors,
} from "./data";
import { photographyCourses } from "../PhotographyAndVideoPage/data";

const PhotoEditingPage = () => (
  <CategoryPage
    title="Photo Editing"
    paragraph="Explore courses from experienced, real-world experts."
    courses={photographyCourses}
    topics={photoEditingTopics}
    instructors={photographyInstructors}
  />
);

export default PhotoEditingPage;
