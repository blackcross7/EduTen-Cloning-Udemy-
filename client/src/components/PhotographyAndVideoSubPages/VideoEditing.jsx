import CategoryPage from "./CategoryPage";
import {
  VideoEditingCourses,
  photoEditingTopics,
  photographyInstructors,
} from "./data";

const VideoEditingPage = () => {
  return (
    <CategoryPage
      title="Video  Editing"
      paragraph="Explore courses from experienced, real-world experts."
      courses={VideoEditingCourses}
      topics={photoEditingTopics}
      instructors={photographyInstructors}
    />
  );
};

export default VideoEditingPage;
