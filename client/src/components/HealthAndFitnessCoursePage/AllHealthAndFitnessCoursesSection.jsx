import React from "react";

const courses = [
  {
    id: 1,
    title: "Yoga for Beginners: A Complete Guide",
    instructor: "Priya Sharma",
    image: "/assets/health/Y1.webp",
    rating: 4.7,
    reviews: 12000,
    price: 499,
    originalPrice: 1999,
    bestseller: true,
  },
  {
    id: 2,
    title: "Nutrition Masterclass: Build Your Perfect Diet & Meal Plan",
    instructor: "Dr. Rahul Mehta",
    image: "/assets/health/Y2.jpeg",
    rating: 4.8,
    reviews: 9500,
    price: 599,
    originalPrice: 2499,
    bestseller: true,
  },
  {
    id: 3,
    title: "HIIT Workout: Burn Fat Fast at Home",
    instructor: "Anjali Verma",
    image: "/assets/health/Y3.jpeg",
    rating: 4.6,
    reviews: 8000,
    price: 399,
    originalPrice: 1499,
    bestseller: false,
  },
  {
    id: 4,
    title: "Mindfulness Meditation for Stress Relief",
    instructor: "Sandeep Singh",
    image: "/assets/health/Y4.jpg",
    rating: 4.9,
    reviews: 15000,
    price: 699,
    originalPrice: 2999,
    bestseller: true,
  },
  {
    id: 5,
    title: "Strength Training: Build Muscle & Get Fit",
    instructor: "Ritika Kapoor",
    image: "/assets/health/Y5.jpg",
    rating: 4.5,
    reviews: 6000,
    price: 499,
    originalPrice: 1999,
    bestseller: false,
  },
];

const AllHealthAndFitnessCoursesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]">
      <h2 className="text-3xl font-extrabold mb-8 text-purple-700 border-b-4 border-purple-200 inline-block px-2">All Health & Fitness Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 p-4 flex flex-col cursor-pointer border border-gray-100 relative group"
          >
            <div className="relative mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-xl"
              />
              {course.bestseller && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded shadow text-gray-900 z-10">Bestseller</span>
              )}
            </div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-purple-700 transition">{course.title}</h3>
            <p className="text-xs text-gray-500 mb-1">{course.instructor}</p>
            <div className="flex items-center text-yellow-500 text-sm mb-1">
              <span>{course.rating}★</span>
              <span className="ml-2 text-gray-400">({course.reviews.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold text-purple-700 text-lg">₹{course.price}</span>
              {course.originalPrice && (
                <span className="text-xs text-gray-400 line-through">₹{course.originalPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllHealthAndFitnessCoursesSection; 