import MainPage from "../components/OfficeProductivityPage/AllOfficeProductivityCourses";
import {
  officeProductivityCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "../components/OfficeProductivityPage/data";

const OfficeProductivityPage = () => {
  return (
    <MainPage
      title="Office Productivity Courses"
      paragraph="Explore courses from experienced, real-world experts."
      courses={officeProductivityCourses}
      topics={officeProductivityTopics}
      instructors={officeProductivityInstructors}
    />
  );
};

export default OfficeProductivityPage;
