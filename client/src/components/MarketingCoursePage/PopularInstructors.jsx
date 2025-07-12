import React from "react";

const instructors = [
  {
    name: "Evan Kimbrell",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    specialty: "Digital Marketing, Content Marketing",
    students: "120,000+",
    courses: 12,
  },
  {
    name: "Lindsay Marsh",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    specialty: "Social Media, Branding",
    students: "98,000+",
    courses: 9,
  },
  {
    name: "Brian Dean",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    specialty: "SEO, Google Ranking",
    students: "87,000+",
    courses: 7,
  },
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    specialty: "Influencer Marketing, Email Marketing",
    students: "65,000+",
    courses: 6,
  },
  {
    name: "Mark Timberlake",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    specialty: "Email Marketing, Automation",
    students: "54,000+",
    courses: 5,
  },
];

const PopularInstructors = () => (
  <section className="bg-white rounded-xl shadow-lg p-8 my-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Instructors</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {instructors.map((inst, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center border border-gray-200 rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-purple-300 cursor-pointer bg-white"
        >
          <img
            src={inst.image}
            alt={inst.name}
            className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-purple-100 shadow"
          />
          <h3 className="font-semibold text-gray-900 text-lg mb-1 transition duration-200 hover:text-purple-700 text-center">
            {inst.name}
          </h3>
          <p className="text-xs text-gray-500 mb-1 text-center">{inst.specialty}</p>
          <p className="text-xs text-gray-500 mb-1 text-center">{inst.students} students</p>
          <p className="text-xs text-gray-400 text-center">{inst.courses} courses</p>
        </div>
      ))}
    </div>
  </section>
);

export default PopularInstructors; 