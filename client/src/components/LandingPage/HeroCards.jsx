import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Course data
const courses = [
  {
    id: 1,
    title: "Fullstack Development",
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
    title: "Data Science",
    rating: 4.9,
    totalRatings: "61k",
    hours: 20,
    img: "assets/landingPage/data_science.jpg",
  },
];

// Card component
const Card = ({ course, index }) => (
  <div className="hover:scale-[1.03]  transition-all duration-300 cursor-pointer">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white hover:bg-gray-100 border border-gray-200 rounded-2xl shadow-xl   p-4 flex flex-col  h-full "
    >
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-40 md:h-48 object-cover rounded-xl mb-4"
      />

      <div className="flex flex-col justify-between flex-grow text-sm md:text-base">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
          {course.title}
        </h3>

        <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-gray-600 mt-auto">
          <div className="flex items-center gap-1">
            <Star size={16} fill="gold" stroke="gold" />
            <span className="font-medium text-gray-800">{course.rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{course.totalRatings} Ratings</span>
          <span className="text-gray-400">•</span>
          <span>{course.hours} Total Hours</span>
        </div>
      </div>
    </motion.div>
  </div>
);

// Main component
const HeroCards = () => {
  return (
    <section className="w-full lg:w-[90vw] mx-auto px-4">
      <h2 className='text-3xl font-bold mb-2'>Ready to reimagine your career?</h2>
      <p className='text-gray-600 mb-6'>Get the skills and real-world experience employers want with Career Accelerators.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 ">
        {courses.map((course, idx) => (
          <Card key={course.id} course={course} index={idx} />
        ))}
      </div>
       <button className='font-bold font-serif text-xs lg:text-xl text-purple-600 border-2 border-purple-600 p-2 hover:bg-purple-50 my-6'>
          All Career Accelerators
        </button>
    </section>
  );
};

export default HeroCards;
