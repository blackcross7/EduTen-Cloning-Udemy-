import React from 'react';

const EduHeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around px-4 sm:px-8 lg:px-16 xl:px-24 py-16 bg-white text-center lg:text-left">
      {/* Left: Heading */}
      <div className="max-w-3xl">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          The AI-powered skills development platform that accelerates transformation
        </h1>
      </div>

      {/* Right: Description & Buttons */}
      <div className="mt-6 lg:mt-0">
        <p className="text-lg mb-4">Whatever your goal, the path starts here</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
          <button className="bg-black text-white px-6 py-3 rounded font-semibold">
            Compare plans
          </button>
          <button className="border border-black px-6 py-3 rounded font-semibold">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EduHeroSection;
