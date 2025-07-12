import React from "react";

const courses = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Rob Percival",
    rating: "4.5",
    students: "245,678",
    price: "₹729",
    originalPrice: "₹3,499",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "SEO 2025: Complete SEO Training + SEO for WordPress Websites",
    instructor: "Yoast SEO Academy",
    rating: "4.7",
    students: "189,432",
    price: "₹689",
    originalPrice: "₹3,849",
    badges: ["Premium", "Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop",
    title: "Social Media Marketing Masterclass 2025",
    instructor: "Lindsay Marsh",
    rating: "4.6",
    students: "156,789",
    price: "₹749",
    originalPrice: "₹3,999",
    badges: ["Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Content Marketing Masterclass: Create Content That Sells",
    instructor: "Evan Kimbrell",
    rating: "4.5",
    students: "98,456",
    price: "₹629",
    originalPrice: "₹3,249",
    badges: ["Premium"],
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
    title: "Email Marketing Mastery: Build Your Email List & Sell More",
    instructor: "Mark Timberlake",
    rating: "4.8",
    students: "45,123",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["New"],
  },
  {
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
    title: "Facebook Ads & Facebook Marketing Masterclass 2025",
    instructor: "Pouya Eti",
    rating: "4.7",
    students: "67,890",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["Bestseller"],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "Google Ads (AdWords) Masterclass - 2025",
    instructor: "Isaac Rudansky",
    rating: "4.9",
    students: "89,234",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["Highest Rated"],
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Influencer Marketing: How to Work with Influencers",
    instructor: "Sarah Johnson",
    rating: "4.6",
    students: "34,567",
    price: "₹519",
    originalPrice: "₹1,709",
    badges: ["New"],
  },
];

const AllMarketingCoursesSection = () => (
  <section className="bg-white rounded-xl shadow-lg p-8 my-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">All Marketing Courses</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-purple-300 cursor-pointer bg-white flex flex-col"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h3 className="font-semibold text-gray-900 text-lg mb-1 transition duration-200 hover:text-purple-700 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-xs text-gray-500 mb-1">{course.instructor}</p>
          <div className="flex items-center gap-1 text-sm mb-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{course.rating}</span>
            <span className="text-gray-500 text-xs">({course.students})</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-gray-900">{course.price}</span>
            <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-auto">
            {course.badges.map((badge, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  badge === "Premium"
                    ? "bg-purple-100 text-purple-700"
                    : badge === "Bestseller"
                    ? "bg-yellow-100 text-yellow-800"
                    : badge === "New"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AllMarketingCoursesSection; 