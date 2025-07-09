import React from "react";
import { ArrowUpRight } from "lucide-react";

const learningOptions = [
  {
    title: "On-Demand Learning",
    description:
      "Provide anytime access to the latest business, tech, leadership, and soft skills courses all in one learning platform.",
  },
  {
    title: "Hands-On Learning",
    description:
      "Boost tech skills faster with Udemy Business Pro learn-by-doing technical projects.",
  },
  {
    title: "Cohort Learning",
    description:
      "Grow your leaders with the Udemy Business Leadership Academy guided, self-paced programs.",
  },
  {
    title: "Professional Services",
    description:
      "Get the expertise and support you need to achieve your goals faster.",
  },
];

const ModernLearningSection = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 lg:px-20">
      {/* Top section */}
<div className="mb-12 text-center max-w-3xl mx-auto">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black mb-4">
    Modern skills need a modern <br className="hidden lg:block" />
    learning approach
  </h2>
  <p className="text-gray-700 text-lg leading-relaxed pt-5">
    Learning solutions shouldn’t be one-size-fits-all. For effective training,
    you need the right skills and the right modalities. That’s where we come in.
  </p>
</div>

        {/* Image + cards section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">
          {/* Image */}
          <img
            src="/assets/business/modern-learning-hero.jpg"
            alt="AI at Udemy"
            className="w-full max-h-[280px] object-cover rounded-t-3xl"
          />

          {/* Spacer between image and cards */}
          <div className="h-6" />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-8 text-center">
            {learningOptions.map((item, idx) => (
              <div
                key={idx}
                className="h-[260px] bg-white p-6 group transition duration-300 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 flex flex-col items-center"
              >
                <ArrowUpRight className="mb-4 text-black border border-black rounded-full p-1 w-7 h-7 transition group-hover:text-purple-600 group-hover:border-purple-600" />
                <h4 className="font-semibold text-lg mb-2 transition group-hover:text-purple-600">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ModernLearningSection;
