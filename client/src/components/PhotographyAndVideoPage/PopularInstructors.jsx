import React from "react";

// Updated data for popular photography and video instructors
const photographyInstructors = [
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

const PopularInstructors = () => {
  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Popular Photography & Video Instructors
      </h2>

      {/* Horizontal scroll on small screens */}
      <div className="flex gap-4 overflow-x-auto md:overflow-x-hidden no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {photographyInstructors.map((inst, idx) => (
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
