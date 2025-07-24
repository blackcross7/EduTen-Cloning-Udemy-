import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react"; 

const courses = [
  {
    id: 1,
    title: "Guitar Mastery for Beginners",
    instructor: "John Mayer",
    rating: 4.7,
    reviews: 2100,
    price: "₹499",
    image: "/assets/MusicPage/guitar-course.png",
  },
  {
    id: 2,
    title: "Piano Essentials: From Zero to Hero",
    instructor: "Alicia Keys",
    rating: 4.8,
    reviews: 1800,
    price: "₹699",
    image: "/assets/MusicPage/piano-course.png",
  },
  {
    id: 3,
    title: "Learn Singing with Confidence",
    instructor: "Adele Laurie",
    rating: 4.6,
    reviews: 1500,
    price: "₹599",
    image: "/assets/MusicPage/singing-course.png",
  },
  {
    id: 4,
    title: "Music Production in FL Studio",
    instructor: "Martin Garrix",
    rating: 4.9,
    reviews: 3100,
    price: "₹799",
    image: "/assets/MusicPage/production-course.png",
  },
  {
    id: 5,
    title: "Classical Violin Techniques",
    instructor: "Nicola Benedetti",
    rating: 4.8,
    reviews: 1200,
    price: "₹649",
    image: "/assets/MusicPage/violin-course.png",
  },
  {
    id: 6,
    title: "Electronic Music with Ableton Live",
    instructor: "Deadmau5",
    rating: 4.7,
    reviews: 2000,
    price: "₹899",
    image: "/assets/MusicPage/ableton-course.png",
  },
];

const instructors = [
  { name: "John Mayer", img: "/assets/MusicPage/instructor1.png" },
  { name: "Alicia Keys", img: "/assets/MusicPage/instructor1.png" },
  { name: "Adele Laurie", img: "/assets/MusicPage/instructor1.png" },
  { name: "Martin Garrix", img: "/assets/MusicPage/instructor1.png" },
];

const faqs = [
  {
    question: "Do I need prior music knowledge?",
    answer: "No, most courses are beginner friendly and build up from basics.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, upon completion, you will receive a course certificate.",
  },
  {
    question: "Are there any free courses?",
    answer: "Yes, you can find free previews and some basic courses at no cost.",
  },
];

const MusicCoursePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold leading-tight text-purple-800 drop-shadow-md">
          Expand your creativity with Music
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn instruments, vocals, production, and more from top-rated instructors.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-purple-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold text-gray-900 group-hover:text-purple-700 transition line-clamp-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
              <div className="flex items-center text-sm mt-2">
                <Star size={16} className="text-yellow-500" />
                <span className="ml-1 font-semibold">{course.rating}</span>
                <span className="text-gray-400 ml-1">({course.reviews})</span>
              </div>
              <div className="mt-2 font-bold text-purple-800">{course.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Categories */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top Music Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["🎸 Guitar", "🎹 Piano", "🎤 Singing", "🎧 Production"].map((category) => (
            <div
              key={category}
              className="p-6 border border-purple-200 rounded-xl text-center text-purple-800 font-semibold bg-purple-50 hover:bg-purple-100 hover:shadow-md cursor-pointer transition"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-24 bg-gradient-to-r from-purple-50 to-white p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What our students say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            ["The piano course helped me start from scratch and now I can play my favorite songs!", "Sneha M."],
            ["Loved the guitar techniques taught by John. Simple and powerful.", "Arjun V."],
            ["As a singer, this platform gave me confidence and clarity.", "Riya S."],
          ].map(([text, author], i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-sm text-gray-700 italic">“{text}”</p>
              <p className="mt-3 text-sm font-semibold text-purple-700">– {author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instructors */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learn from World-Class Instructors</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {instructors.map((inst) => (
            <div key={inst.name} className="text-center hover:scale-105 transition-transform">
              <img
                src={inst.img}
                alt={inst.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-2 border-purple-300"
              />
              <p className="text-sm font-medium text-gray-700">{inst.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-lg p-4 cursor-pointer bg-white shadow-sm hover:shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-purple-700">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-700" size={20} />
                ) : (
                  <ChevronDown className="text-purple-700" size={20} />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2 transition-all duration-200">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicCoursePage;