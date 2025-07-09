import React, { useState } from "react";

const industries = [
  {
    name: "Professional Services",
    title: "Driving profitability through faster staffing and cost optimization",
    stats: [
      { value: "66%", description: "faster new talent onboarding", source: "Publicis Sapient" },
      { value: "93%", description: "retention rate for learning program graduates", source: "Booz Allen Hamilton" },
    ],
    image: "/assets/business/professional-services.jpg",
    buttonText: "Explore professional services solutions",
  },
  {
    name: "Manufacturing",
    title: "Achieve end-to-end supply chain excellence",
    stats: [
      { value: "200k", description: "cost savings", source: "Best Transformer" },
      { value: "400+", description: "applications migrated to the cloud", source: "Jabil" },
    ],
    image: "/assets/business/manufacturing.jpg",
    buttonText: "Explore manufacturing solutions",
  },
  {
    name: "Technology",
    title: "Innovate faster with employees certified on in-demand skills",
    stats: [
      { value: "50%", description: "faster technical upskilling of critical talent", source: "Sopra Steria" },
      { value: "20%", description: "reduction in time to train and onboard employees", source: "msg global" },
    ],
    image: "/assets/business/technology.jpg",
    buttonText: "Explore technology solutions",
  },
  {
    name: "Financial Services",
    title: "Grow the bottom line with investments in employee skills",
    stats: [
      { value: "67%", description: "faster onboarding of product engineers", source: "Kusshi" },
      { value: "$21k", description: "cost savings from reduced certification training expenses", source: "Kusshi" },
    ],
    image: "/assets/business/financial-services.jpg",
    buttonText: "Explore financial services solutions",
  },
];

const IndustryTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-4 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10 text-center lg:text-center">
      Transforming organizations <br /> in every industry
    </h2>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm md:text-base border-b border-gray-300 mb-6 text-center">
      {industries.map((industry, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`pb-2 font-medium ${
            idx === activeIndex
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {industry.name}
        </button>
      ))}
    </div>

    {/* Tab Content */}
    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col lg:flex-row gap-10 items-center text-center lg:text-left">
      {/* Text + Stats */}
      <div className="flex-1">
        <h3 className="text-3xl font-semibold text-black mb-8 max-w-lg mx-auto lg:mx-0">
          {industries[activeIndex].title}
        </h3>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-10 mb-8">
          {industries[activeIndex].stats.map((stat, i) => (
            <div key={i} className="flex-1">
              <p className="text-lg font-semibold md:text-5xl text-black mb-1">{stat.value}</p>
              <p className="text-lg text-gray-700">{stat.description}</p>
              <a
                href="#"
                className="block text-sm text-purple-700 mt-1 underline underline-offset-2"
              >
                {stat.source}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
          <button className="mt-4 bg-black text-white px-6 py-3 rounded font-semibold text-base hover:bg-purple-600 transition duration-300">
            {industries[activeIndex].buttonText}
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={industries[activeIndex].image}
          alt={industries[activeIndex].name}
          className="rounded-xl w-full object-cover max-h-[400px]"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default IndustryTabs;
