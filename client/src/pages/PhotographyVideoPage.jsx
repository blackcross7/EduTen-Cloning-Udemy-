import MainPage from "../components/PhotographyAndVideoPage/AllCourses";
import {
  photographyCourses,
  PhotographyTopics,
  photographyInstructors,
} from "../components/PhotographyAndVideoPage/data";

const OfficeProductivityPage = () => {
  return (
    <MainPage
      title="Photography & Video Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={photographyCourses}
      topics={PhotographyTopics}
      instructors={photographyInstructors}
    />
  );
};

export default OfficeProductivityPage;
