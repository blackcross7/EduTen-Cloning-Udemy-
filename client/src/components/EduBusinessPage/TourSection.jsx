import React from "react";

const TourSection = () => {
  return (
    <section className="bg-[#1c1c1c] px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
       {/* Image Container */}
<div className="w-full lg:w-1/2">
  <div className="bg-[#1c1c1c] overflow-hidden">
   <img
  src="/assets/business/tour-udemy-platform.png"
  alt="Tour Udemy Business"
  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] object-cover object-top"
/>
  </div>
</div>


        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="bg-[#1c1c1c] px-6 py-8 w-full h-full text-white">
            <div className="max-w-md ml-auto">
              <h2 className="text-4xl font-semibold mb-3 leading-snug">
                Tour the Udemy <br /> Business platform
              </h2>
              <p className="text-sm mb-4 leading-relaxed">
                Take the interactive tour to see how our platform <br />
                can transform the way your team learns and grows.
              </p>
              <button className="border border-white text-white font-semibold text-sm px-5 py-2 rounded hover:bg-purple-600 transition duration-300">
                Start tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
