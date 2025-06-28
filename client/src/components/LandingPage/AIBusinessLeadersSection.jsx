import React from "react";

const AIBusinessLeadersSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      {/* Left: Text */}
      <div className="flex-1 max-w-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          AI for<br />Business Leaders
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Build an AI-habit for you and your team that builds hands-on skills to help you lead effectively.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Start Learning <span aria-hidden>→</span>
        </a>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center w-full">
        <img
          src="assets/landingPage/AI1.jpg"
          alt="AI for Business Leaders"
          className="w-full max-w-xl"
        />
      </div>
    </div>
  </section>
);

export default AIBusinessLeadersSection;