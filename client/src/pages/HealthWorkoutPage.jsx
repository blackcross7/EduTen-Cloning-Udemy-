import React from "react";

const featuredCourse = {
  title: "HIIT Workout: Burn Fat Fast at Home",
  instructor: "Anjali Verma",
  image: "/assets/health/Y3.jpeg",
  rating: 4.6,
  reviews: 8000,
  price: 399,
  originalPrice: 1499,
  bestseller: true,
};

const courses = [
  {
    id: 1,
    title: "Strength Training for Beginners",
    instructor: "Amit Singh",
    image: "/assets/health/Y4.jpg",
    rating: 4.7,
    reviews: 9000,
    price: 499,
    originalPrice: 1999,
    bestseller: true,
  },
  {
    id: 2,
    title: "Cardio Blast: Home Workouts",
    instructor: "Riya Mehra",
    image: "/assets/health/Y5.jpg",
    rating: 4.6,
    reviews: 7000,
    price: 399,
    originalPrice: 1499,
    bestseller: false,
  },
  {
    id: 3,
    title: "Full Body HIIT Routine",
    instructor: "Sandeep Singh",
    image: "/assets/health/Y1.webp",
    rating: 4.9,
    reviews: 12000,
    price: 699,
    originalPrice: 2999,
    bestseller: true,
  },
  {
    id: 4,
    title: "Yoga for Strength & Flexibility",
    instructor: "Ritika Kapoor",
    image: "/assets/health/Y2.jpeg",
    rating: 4.5,
    reviews: 6000,
    price: 499,
    originalPrice: 1999,
    bestseller: false,
  },
];

const topics = [
  "HIIT",
  "Strength Training",
  "Cardio",
  "Bodyweight Workouts",
  "Home Workouts",
  "Flexibility",
  "Endurance",
];

const HealthWorkoutPage = () => (
  <main className="py-12 px-4 max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-purple-700 mb-6">Workout Courses</h1>
    <p className="text-gray-700 mb-8">Find the best Workout courses to get fit, build strength, and boost your energy.</p>

    {/* Featured Course */}
    <section className="mb-12">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
        <div className="md:w-2/5 w-full">
          <img
            src={featuredCourse.image}
            alt={featuredCourse.title}
            className="w-full h-56 object-cover md:rounded-l-2xl"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-center">
          {featuredCourse.bestseller && (
            <span className="bg-yellow-400 text-xs font-bold px-3 py-1 rounded shadow text-gray-900 mb-2 w-max">Bestseller</span>
          )}
          <h3 className="font-semibold text-2xl mb-2 text-gray-900">{featuredCourse.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{featuredCourse.instructor}</p>
          <div className="flex items-center text-yellow-500 text-base mb-2">
            <span>{featuredCourse.rating}★</span>
            <span className="ml-2 text-gray-400">({featuredCourse.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-purple-700 text-xl">₹{featuredCourse.price}</span>
            {featuredCourse.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{featuredCourse.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* Popular Topics */}
    <section className="mb-10">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Popular Workout Topics</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            className="px-5 py-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-800 font-medium text-base border border-gray-200 hover:border-purple-400 transition whitespace-nowrap hover:text-purple-700"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>

    {/* Course Grid */}
    <section className="mb-10">
      <h2 className="text-xl font-bold text-purple-700 mb-4">All Workout Courses</h2>
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
  </main>
);

export default HealthWorkoutPage; 