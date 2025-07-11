import React, { useState } from "react";

const slides = [
  {
    company: "Booz | Allen | Hamilton",
    heading: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    stats: [
      { value: "93%", label: "retention rate among participating employees" },
      { value: "65%", label: "of learners noted a positive impact on their productivity" },
    ],
    button: { label: "Read full story", link: "#" },
    image: "assets/business/enterprise.webp",
  },
  {
    company: "Microsoft",
    heading: "Microsoft Transforms Employee Skills with AI-Powered Learning Platform",
    stats: [
      { value: "87%", label: "increase in employee engagement" },
      { value: "2.5x", label: "faster skill development compared to traditional methods" },
    ],
    button: { label: "Read full story", link: "#" },
    image: "assets/business/ai.png",
  },
  {
    company: "Netflix",
    heading: "Netflix Accelerates Digital Transformation Through Continuous Learning",
    stats: [
      { value: "95%", label: "of teams completed certification programs" },
      { value: "40%", label: "reduction in time-to-market for new features" },
    ],
    button: { label: "Read full story", link: "#" },
    image: "assets/business/digitaltransformation.jpg",
  },
  {
    company: "Tesla",
    heading: "Tesla Drives Innovation with Advanced Technical Training Programs",
    stats: [
      { value: "91%", label: "employee satisfaction with learning programs" },
      { value: "3x", label: "increase in technical competency scores" },
    ],
    button: { label: "Read full story", link: "#" },
    image: "assets/business/technology.jpg",
  },
];

const CaseStudySlider = () => {
  const [current, setCurrent] = useState(0);

  // Guard clause: Agar slides empty hai toh kuch mat dikhao
  if (!slides.length) return null;

  return (
    <section className="bg-transparent py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="text-2xl font-light mb-2 text-gray-800">{slides[current].company}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{slides[current].heading}</h2>
          <div className="flex gap-12 mb-6">
            {slides[current].stats.map((stat, i) => (
              <div key={i} className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href={slides[current].button.link}
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 hover:scale-105 transition duration-300 ease-in-out transform mb-8"
          >
            {slides[current].button.label} <span aria-hidden>→</span>
          </a>
          {/* Dots navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow hover:bg-purple-50 hover:border-purple-300 hover:scale-110 transition duration-300 ease-in-out transform"
            >
              <span className="text-2xl">‹</span>
            </button>
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full mx-1 transition duration-300 ease-in-out transform hover:scale-125 ${current === idx ? "bg-purple-500" : "bg-gray-300"}`}
              />
            ))}
            <button
              onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow hover:bg-purple-50 hover:border-purple-300 hover:scale-110 transition duration-300 ease-in-out transform"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center w-full transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src={slides[current].image}
            alt={slides[current].company}
            className="rounded-2xl shadow-xl w-full max-w-xl object-cover transition duration-300 ease-in-out transform hover:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;