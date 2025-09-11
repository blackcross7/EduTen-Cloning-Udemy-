import CategoryPage from "./CategoryPage";
import {
  GoogleWorkspaceCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const GoogleWorkshopPage = () => (
  <CategoryPage
    title="Google Workspace"
    paragraph="Explore courses from experienced, real-world experts."
    courses={GoogleWorkspaceCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);

export default GoogleWorkshopPage;
