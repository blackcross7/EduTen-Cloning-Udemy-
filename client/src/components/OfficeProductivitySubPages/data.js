import { officeProductivityCourses } from "../OfficeProductivityPage/data";

export const MicrosoftWordCourses = officeProductivityCourses.filter((data) => {
  return data.subPage === "Microsoft-Office";
});

export const GoogleWorkspaceCourses = officeProductivityCourses.filter(
  (data) => {
    return data.subPage === "Google-Workspace";
  }
);
export const TimeManagementCourses = officeProductivityCourses.filter(
  (data) => {
    return data.subPage === "Time-Management";
  }
);
export const ProjectManagementCourses = officeProductivityCourses.filter(
  (data) => {
    return data.subPage === "Project-Management";
  }
);
export const CommunicationCourses = officeProductivityCourses.filter((data) => {
  return data.subPage === "Communication";
});

export const officeProductivityTopics = [
  "Microsoft Excel",
  "Google Sheets",
  "Microsoft Word",
  "PowerPoint Design",
  "Google Workspace",
  "Outlook Productivity",
  "Project Management Tools",
  "Time Management",
  "Keyboard Shortcuts",
  "Data Visualization",
  "Note-taking with OneNote",
  "Task Management (Todoist, Trello, Asana)",
  "Email Management",
  "Remote Collaboration",
  "Automation with Zapier",
];

export const officeProductivityInstructors = [
  {
    name: "Leila Gharani",
    expertise: "Microsoft Excel, Data Analysis",
    rating: 4.8,
    students: "1,250,000",
    courses: 18,
    thumbnail: "https://placehold.co/100x100/2563eb/fff?text=LG",
  },
  {
    name: "Chris Croft",
    expertise: "Project Management, Time Management",
    rating: 4.7,
    students: "500,000",
    courses: 35,
    thumbnail: "https://placehold.co/100x100/16a34a/fff?text=CC",
  },
  {
    name: "Deb Ashby",
    expertise: "Microsoft Office, Productivity Tools",
    rating: 4.6,
    students: "300,000",
    courses: 22,
    thumbnail: "https://placehold.co/100x100/f97316/fff?text=DA",
  },
  {
    name: "David Rivers",
    expertise: "Google Workspace, Collaboration",
    rating: 4.5,
    students: "420,000",
    courses: 40,
    thumbnail: "https://placehold.co/100x100/9333ea/fff?text=DR",
  },
  {
    name: "Diane Hohman",
    expertise: "Email Productivity, Microsoft Outlook",
    rating: 4.6,
    students: "150,000",
    courses: 12,
    thumbnail: "https://placehold.co/100x100/f43f5e/fff?text=DH",
  },
];
