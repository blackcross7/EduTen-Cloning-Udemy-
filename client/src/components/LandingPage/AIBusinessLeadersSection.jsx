import React from "react";

const AIBusinessLeadersSection = () => (
  <section className="bg-transparent py-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      {/* Left: Text */}
      <div className="flex-1 max-w-lg transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          AI for<br />Business Leaders
        </h2>
        <p className="text-lg text-gray-700 mb-8 transition duration-300 ease-in-out transform hover:scale-105">
          Build an AI-habit for you and your team that builds hands-on skills to help you lead effectively.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform"
        >
          Start Learning <span aria-hidden>→</span>
        </a>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center w-full transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src="assets/landingPage/AI1.jpg"
          alt="AI for Business Leaders"
          className="w-full max-w-xl rounded-2xl shadow-xl transition duration-300 ease-in-out transform hover:shadow-2xl hover:scale-110"
        />
      </div>
    </div>
  </section>
);

export default AIBusinessLeadersSection;