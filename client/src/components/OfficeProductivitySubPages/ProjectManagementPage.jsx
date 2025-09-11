import CategoryPage from "./CategoryPage";
import {
  ProjectManagementCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const ProjectManagementPage = () => (
  <CategoryPage
    title="Project Management"
    paragraph="Explore courses from experienced, real-world experts."
    courses={ProjectManagementCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);
export default ProjectManagementPage;
