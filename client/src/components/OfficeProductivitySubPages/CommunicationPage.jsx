import CategoryPage from "./CategoryPage";
import {
  CommunicationCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const CommunicationPage = () => (
  <CategoryPage
    title="Communication"
    paragraph="Explore courses from experienced, real-world experts."
    courses={CommunicationCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);

export default CommunicationPage;
