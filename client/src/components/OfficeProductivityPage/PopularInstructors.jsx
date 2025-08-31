import React from "react";

const instructors = [
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

const PopularInstructors = () => {
  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Popular Office Productivity Instructors
      </h2>

      {/* Horizontal scroll on small screens */}
      <div className="flex gap-4 overflow-x-auto md:overflow-x-hidden no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 md:w-56 bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition duration-300 md:flex-shrink-1"
          >
            <div className="text-center w-full">
              <img
                src={inst.thumbnail}
                alt={inst.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {inst.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{inst.expertise}</p>
              <p className="text-xs text-gray-500">
                ⭐ {inst.rating} Instructor rating • {inst.students} students •{" "}
                {inst.courses} courses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
