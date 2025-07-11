import React from "react";

const course = {
  image: "/assets/interior/interior-table.jpg",
  title: "SolidWorks: From Sketch to Fabrication Drawings TABLE DESIGN",
  instructor: "AHMED SALAH",
  description:
    "Master 3D modeling and technical drawing in SolidWorks – step-by-step training for beginners.",
  updated: "July 2025",
  hours: "2",
  lectures: "6",
  level: "Intermediate",
  rating: "5.0",
  students: "32",
  price: "₹1,859",
  badges: ["New"],
};

const InteriorFeaturedCourse = () => {
  return (
    <section className="bg-white text-gray-900 px-6 pt-10 pb-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-1">Featured course</h2>
      <p className="text-gray-600 mb-6">
        Many learners enjoyed this highly rated course for its engaging content.
      </p>

      <div className="bg-gray-50 border rounded-xl border-gray-300 shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={course.image}
          alt={course.title}
          className="w-full md:w-[40%] h-56 md:h-[240px] object-cover m-4 rounded-lg shadow"
        />
        <div className="p-6 flex flex-col justify-between w-full md:w-[55%]">
          <div>
            <h3 className="text-xl font-bold mb-2 leading-snug">
              {course.title}
            </h3>
            <p className="text-sm text-gray-700 mb-3">{course.description}</p>
            <p className="text-xs text-gray-500 mb-1">By {course.instructor}</p>
            <p className="text-xs text-gray-500 mb-3">
              Updated <strong>{course.updated}</strong> · {course.hours} total hours ·{" "}
              {course.lectures} lectures · {course.level}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
              <span className="font-semibold text-yellow-600">{course.rating}</span>
              <span className="text-xs text-gray-600">({course.students})</span>
              {course.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-0.5 rounded ${
                    badge === "New"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="text-lg font-bold">{course.price}</div>
        </div>
      </div>
    </section>
  );
};

export default InteriorFeaturedCourse;
