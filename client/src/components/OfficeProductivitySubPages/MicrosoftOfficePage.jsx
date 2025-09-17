import CategoryPage from "./CategoryPage";
import {
  MicrosoftWordCourses,
  officeProductivityTopics,
  officeProductivityInstructors,
} from "./data";

const MicrosoftOfficePage = () => (
  <CategoryPage
    title="Microsoft Office"
    paragraph="Explore courses from experienced, real-world experts."
    courses={MicrosoftWordCourses}
    topics={officeProductivityTopics}
    instructors={officeProductivityInstructors}
  />
);

export default MicrosoftOfficePage;
