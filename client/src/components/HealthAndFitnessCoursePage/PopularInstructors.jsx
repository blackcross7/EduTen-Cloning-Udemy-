import React from "react";

const instructors = [
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Certified Yoga Instructor with 10+ years of experience.",
    rating: 4.8,
    students: 25000,
  },
  {
    name: "Dr. Rahul Mehta",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    bio: "Nutritionist and wellness coach, author of 3 bestsellers.",
    rating: 4.9,
    students: 18000,
  },
  {
    name: "Anjali Verma",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "HIIT & fitness trainer, helped 10,000+ people get fit.",
    rating: 4.7,
    students: 12000,
  },
  {
    name: "Sandeep Singh",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Mindfulness & meditation expert, TEDx speaker.",
    rating: 4.9,
    students: 22000,
  },
];

const PopularInstructors = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-200 inline-block px-2">Popular Health & Fitness Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-6 flex flex-col items-center border border-gray-100"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-purple-100 shadow"
            />
            <h3 className="font-semibold text-lg mb-1 text-center text-gray-900">{inst.name}</h3>
            <p className="text-xs text-gray-500 mb-2 text-center">{inst.bio}</p>
            <div className="flex items-center text-purple-600 text-base mb-1 font-bold">
              <span>{inst.rating}★</span>
              <span className="ml-2 text-gray-400 font-normal text-sm">{inst.students.toLocaleString()} students</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors; 