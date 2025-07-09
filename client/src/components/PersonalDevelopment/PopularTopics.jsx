import React from "react";
import "./styles.css";

const topics = [
  "Life Coach Training",
  "Personal Development",
  "Leadership",
  "Personal Transformation",
  "Personal Productivity",
  "ChatGPT",
  "Neuro-Linguistic Programming (NLP)",
  "Communication Skills",
  "Coaching",
  "Speed Reading",
];

const PopularTopics = () => {
  return (
    <div className="popular-topics-wrapper">
      <h2 className="section-heading">Popular Topics</h2>
      <div className="topics-grid">
        {topics.map((topic, idx) => (
          <div key={idx} className="topic-box">
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;
