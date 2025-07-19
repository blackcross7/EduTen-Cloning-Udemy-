import React from "react";

const topics = [
  "Yoga",
  "Nutrition",
  "HIIT",
  "Meditation",
  "Strength Training",
  "Weight Loss",
  "Mental Health",
  "Pilates",
  "Cardio",
  "Healthy Cooking",
];

const PopularTopics = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-200 inline-block px-2">Popular Health & Fitness Topics</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            className="px-5 py-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-800 font-medium text-base border border-gray-200 hover:border-purple-400 transition whitespace-nowrap hover:text-purple-700"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularTopics; 