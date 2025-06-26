import React from "react";
import { Star } from "lucide-react";

const filters = ["Data Science", "IT Certifications", "Leadership", "Web Development", "Communication", "Business Analytics & Intelligence"];
const subFilters = [
  { label: "ChatGPT", learners: "4M+" },
  { label: "Data Science", learners: "7M+" },
  { label: "Python", learners: "48.8M+" },
  { label: "Machine Learning", learners: "8M+" },
  { label: "Deep Learning", learners: "2M+" },
  { label: "AI", learners: "4M+" },
  { label: "Statistics", learners: "1M+" },
];

const courses = [
  {
    id: 1,
    title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    reviews: "49,177",
    price: 549,
    originalPrice: 2739,
    tag: "Bestseller",
    img: "assets/landingPage/course1.jpg",
  },
  {
    id: 2,
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructor: "Tomáš Morávek",
    rating: 4.3,
    reviews: "1,918",
    price: 549,
    originalPrice: 3199,
    tag: "Premium",
    img: "assets/landingPage/course2.jpg",
  },
  // ...add more
];

const LandingCourseSection = () => {
  return (
    <section className="w-full lg:w-[90vw] mx-auto py-12 px-4 space-y-6">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">All the skills you need in one place</h2>
        <p className="text-gray-600 text-sm md:text-base">
          From critical skills to technical topics, we support your professional development.
        </p>
      </div>

      {/* Top Filters (scrollable) */}
      <div className="flex gap-4 overflow-x-auto pb-2 border-b">
        {filters.map((f, i) => (
          <button key={i} className="text-sm font-medium text-gray-700 hover:text-black whitespace-nowrap">
            {f}
          </button>
        ))}
      </div>

      {/* Sub Filters (scrollable pills) */}
      <div className="flex gap-3 overflow-x-auto py-3">
        {subFilters.map((f, i) => (
          <button key={i} className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-800 whitespace-nowrap">
            <span className="font-semibold">{f.label}</span>
            <span className="ml-1 text-gray-500">{f.learners} learners</span>
          </button>
        ))}
      </div>

      {/* Course cards slider */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {courses.map((course) => (
          <div key={course.id} className="min-w-[280px] max-w-[300px] bg-white rounded-xl shadow-md border border-gray-200">
            <img src={course.img} alt={course.title} className="w-full h-40 object-cover rounded-t-xl" />
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-semibold line-clamp-2">{course.title}</h3>
              <p className="text-xs text-gray-500">{course.instructor}</p>
              <div className="flex items-center gap-1 text-sm">
                <Star size={14} fill="gold" stroke="gold" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-gray-500 text-xs">({course.reviews})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-md font-bold">₹{course.price}</span>
                <span className="text-sm text-gray-400 line-through">₹{course.originalPrice}</span>
              </div>
              {course.tag && (
                <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium 
                  ${course.tag === "Bestseller" ? "bg-yellow-200 text-yellow-800" : "bg-purple-100 text-purple-700"}`}>
                  {course.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingCourseSection;
