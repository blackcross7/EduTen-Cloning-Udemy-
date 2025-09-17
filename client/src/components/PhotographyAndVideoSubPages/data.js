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
export const photoEditingTopics = [
  "Camera Basics",
  "Photo Editing",
  "Video Editing",
  "Drone Photography",
  "Portraiture",
  "Street Photography",
  "Wildlife Photography",
  "Lighting Techniques",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Final Cut Pro",
  "Storytelling in Film",
  "Color Grading",
  "Cinematography",
  "Mobile Videography",
];
export const photographyInstructors = [
  {
    name: "Michael Lee",
    expertise: "Video Editing, Cinematography",
    rating: 4.7,
    students: "850,000",
    courses: 25,
    thumbnail: "https://placehold.co/100x100/e74c3c/fff?text=ML",
  },
  {
    name: "Emma Carter",
    expertise: "Photography Basics, Composition",
    rating: 4.8,
    students: "1,500,000",
    courses: 20,
    thumbnail: "https://placehold.co/100x100/3498db/fff?text=EC",
  },
  {
    name: "Sophia Johnson",
    expertise: "Photo Editing, Lightroom & Photoshop",
    rating: 4.9,
    students: "900,000",
    courses: 15,
    thumbnail: "https://placehold.co/100x100/f1c40f/fff?text=SJ",
  },
  {
    name: "Olivia White",
    expertise: "Drone Photography, Cinematography",
    rating: 4.5,
    students: "600,000",
    courses: 10,
    thumbnail: "https://placehold.co/100x100/2ecc71/fff?text=OW",
  },
  {
    name: "Mark Evans",
    expertise: "Street Photography, Storytelling",
    rating: 4.7,
    students: "450,000",
    courses: 8,
    thumbnail: "https://placehold.co/100x100/95a5a6/fff?text=ME",
  },
];
