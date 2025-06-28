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
    image: "assets/landingPage/case_study1.jpg",
  },
  // Yahan kam se kam ek object hona chahiye!
];

const CaseStudySlider = () => {
  const [current, setCurrent] = useState(0);

  // Guard clause: Agar slides empty hai toh kuch mat dikhao
  if (!slides.length) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <div className="text-2xl font-light mb-2 text-gray-800">{slides[current].company}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{slides[current].heading}</h2>
          <div className="flex gap-12 mb-6">
            {slides[current].stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href={slides[current].button.link}
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition mb-8"
          >
            {slides[current].button.label} <span aria-hidden>→</span>
          </a>
          {/* Dots navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow hover:bg-gray-100"
            >
              <span className="text-2xl">‹</span>
            </button>
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full mx-1 ${current === idx ? "bg-purple-500" : "bg-gray-300"}`}
              />
            ))}
            <button
              onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow hover:bg-gray-100"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center w-full">
          <img
            src={slides[current].image}
            alt={slides[current].company}
            className="rounded-2xl shadow-xl w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;