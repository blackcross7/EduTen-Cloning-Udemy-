import CategoryPage from "./CategoryPage";
import {
  TimeManagementCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const TimeManagement = () => (
  <CategoryPage
    title="Time Management"
    paragraph="Explore courses from experienced, real-world experts."
    courses={TimeManagementCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);

export default TimeManagement;
