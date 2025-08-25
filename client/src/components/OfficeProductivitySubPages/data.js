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
