import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dummyCourses = [
  {
    id: 1,
    image: "/assets/WebDevelopmentPage/vue-js-kk.jpg",
    title: "Content Marketing Mastery",
    instructor: "Priya Sharma",
    rating: 4.7,
    reviews: 9000,
    price: 499,
    bestseller: true,
  },
  {
    id: 2,
    image: "/assets/WebDevelopmentPage/django.png",
    title: "Copywriting for Beginners",
    instructor: "Rahul Mehta",
    rating: 4.5,
    reviews: 7000,
    price: 299,
    bestseller: false,
  },
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "highest", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

const gridVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {},
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } },
};
const SidebarFilters = () => (
  <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4 mb-6 md:mb-0">
    <h2 className="font-bold text-lg mb-4">Filters</h2>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Level</h3>
      <div className="flex flex-col gap-1">
        <label><input type="checkbox" /> Beginner</label>
        <label><input type="checkbox" /> Intermediate</label>
        <label><input type="checkbox" /> Advanced</label>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price</h3>
      <div className="flex flex-col gap-1">
        <label><input type="checkbox" /> Free</label>
        <label><input type="checkbox" /> Paid</label>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Rating</h3>
      <div className="flex flex-col gap-1">
        <label><input type="checkbox" /> 4.5 & up</label>
        <label><input type="checkbox" /> 4.0 & up</label>
        <label><input type="checkbox" /> 3.5 & up</label>
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Language</h3>
      <div className="flex flex-col gap-1">
        <label><input type="checkbox" /> English</label>
        <label><input type="checkbox" /> Hindi</label>
      </div>
    </div>
  </aside>
);
const CourseCard = ({ course }) => (
  <motion.div
    className="bg-white rounded-lg shadow hover:shadow-2xl transition p-3 flex flex-col cursor-pointer border border-gray-100 relative"
    variants={cardVariants}
    whileHover={{ scale: 1.045, rotate: -1, boxShadow: "0 8px 32px rgba(80,0,200,0.13)" }}
    whileTap={{ scale: 0.97, rotate: 0 }}
    initial="hidden"
    animate="visible"
    exit="exit"
    layout
  >
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-36 object-cover rounded-md mb-3"
    />
    {course.bestseller && (
      <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded">Bestseller</span>
    )}
    <h3 className="font-semibold text-base mb-1 line-clamp-2">{course.title}</h3>
    <p className="text-xs text-gray-500 mb-1">{course.instructor}</p>
    <div className="flex items-center text-yellow-500 text-sm mb-1">
      <span>{course.rating}★</span>
      <span className="ml-2 text-gray-400">({course.reviews})</span>
    </div>
    <div className="font-bold text-purple-700 text-lg">₹{course.price}</div>
  </motion.div>
);
const CourseGrid = ({ courses }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    variants={gridVariants}
    initial="hidden"
    animate="visible"
    layout
  >
    <AnimatePresence>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </AnimatePresence>
  </motion.div>
);
const ContentMarketing = () => {
  const [sort, setSort] = useState("popular");
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Content Marketing Courses</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <SidebarFilters />
        <div className="flex-1">
          <CourseGrid courses={dummyCourses} />
        </div>
      </div>
    </div>
  );
};
export default ContentMarketing; 