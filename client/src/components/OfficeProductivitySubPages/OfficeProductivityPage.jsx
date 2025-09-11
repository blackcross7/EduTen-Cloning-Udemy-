import CategoryPage from "./CategoryPage";
import {
  TimeManagementCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const OfficeProductivityPage = () => (
  <CategoryPage
    title="Office Productivity"
    paragraph="Explore courses from experienced, real-world experts."
    courses={TimeManagementCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);
export default OfficeProductivityPage;
