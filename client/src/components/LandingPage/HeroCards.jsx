import React from "react";
import { Star } from "lucide-react";

// Course data
const courses = [
  {
    id: 1,
    title: "Fullstack Development Bootcamp",
    rating: 4.8,
    totalRatings: "38k",
    hours: 35,
    img: "assets/landingPage/Web_dev.jpg",
  },
  {
    id: 2,
    title: "Digital Marketing",
    rating: 4.7,
    totalRatings: "44k",
    hours: 50,
    img: "assets/landingPage/digital_marketing.jpg",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    rating: 4.9,
    totalRatings: "61k",
    hours: 20,
    img: "assets/landingPage/data_science.jpg",
  },
];

// Reusable Card wrapper
const Card = ({ children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform">
    {children}
  </div>
);

const HeroCards = () => {
  return (
    <section className="w-full lg:w-[90vw] mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 space-y-3">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {course.title}
              </h3>

              <div className="flex items-center text-sm text-gray-600 flex-wrap gap-1">
                <Star size={16} fill="gold" stroke="gold" />
                <span className="font-medium text-gray-800">
                  {course.rating}
                </span>
                <span className="text-gray-400">•</span>
                <span>{course.totalRatings} Ratings</span>
                <span className="text-gray-400">•</span>
                <span>{course.hours} Total Hours</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HeroCards;
