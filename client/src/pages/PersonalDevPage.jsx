import MainPage from "../components/OfficeProductivityPage/AllOfficeProductivityCourses";
import {
  personalDevelopmentCourses,
  personalDevelopmentInstructors,
  personalDevelopmentTopics,
} from "../components//PersonalDevelopment/categories";

const OfficeProductivityPage = () => {
  return (
    <>
      <MainPage
        title="Personal Development Courses"
        paragraph="Explore courses from experienced, real-world experts."
        courses={personalDevelopmentCourses}
        topics={personalDevelopmentTopics}
        instructors={personalDevelopmentInstructors}
      />
    </>
  );
};

export default OfficeProductivityPage;
