import React, { useState } from "react";

const topics = [
  "Reiki", "Drawing", "Energy Healing", "Tarot Reading", "Watercolor Painting", 
  "Chess", "Beauty", "Hypnotherapy", "Spiritual Healing", "Astrology", "Watercolor Painting",
  "Psychic", "Makeup Artistry", "Sketching", "Figure Drawing","Astrology", "Akashic Records", 
  "Acrylic Painting", "Skincare", "Nail Artistry"
];

const ITEMS_PER_PAGE = 10;

const PopularTopics = () => {
  const [topicPage, setTopicPage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const firstSet = topics.slice(0, ITEMS_PER_PAGE);
  const secondSet = topics.slice(ITEMS_PER_PAGE);
  
  const currentTopics = topicPage === 0 ? firstSet : secondSet;

  const handleNext = () => {
    if (topicPage === 0) {
      setTransitioning(true);
      setTimeout(() => {
        setTopicPage(1);
        setTransitioning(false);
      }, 300); // Match transition duration
    }
  };

  const handlePrev = () => {
    if (topicPage === 1) {
      setTransitioning(true);
      setTimeout(() => {
        setTopicPage(0);
        setTransitioning(false);
      }, 300); // Match transition duration
    }
  };

  const hasNext = topicPage === 0;
  const hasPrev = topicPage === 1;

  return (
    <section className="py-8 px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Popular topics</h2>
      <div className="relative">
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          {currentTopics.map((topic, index) => (
            <div
              key={index}
              className="border text-center font-semibold text-gray-800 py-3 px-2 rounded-md shadow hover:bg-gray-100 transition text-sm sm:text-base"
            >
              {topic}
            </div>
          ))}
        </div>

        {/* Arrows for Topics */}
        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            &gt;
          </button>
        )}
        {hasPrev && (
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border shadow-md rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            &lt;
          </button>
        )}
      </div>
    </section>
  );
};

export default PopularTopics;