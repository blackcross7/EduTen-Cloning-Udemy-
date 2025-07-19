import React from "react";

const featuredCourse = {
  id: 1,
  title: "Yoga for Beginners: A Complete Guide",
  instructor: "Priya Sharma",
  image: "/assets/health/Y1.webp",
  rating: 4.7,
  reviews: 12000,
  price: 499,
  originalPrice: 1999,
  bestseller: true,
};

const FeaturedCourses = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-200 inline-block px-2">Featured Health & Fitness Course</h2>
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
  );
};

export default FeaturedCourses; 