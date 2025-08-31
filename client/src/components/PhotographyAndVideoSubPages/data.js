import { photographyCourses } from "../PhotographyAndVideoPage/data";

// Create a helper function to filter by subPage
const filterBySubPage = (subPage) =>
  photographyCourses.filter((course) => course.subPage === subPage);

// Now export 5 arrays
export const PhotographyBasicsCourses = filterBySubPage("Photography-Basics");
export const VideoEditingCourses = filterBySubPage("Video-Editing");
export const DronePhotographyCourses = filterBySubPage("Drone-Photography");
export const LightingTechniquesCourses = filterBySubPage("Lighting-Techniques");
export const PhotoEditingCourses = filterBySubPage("Photo-Editing");
