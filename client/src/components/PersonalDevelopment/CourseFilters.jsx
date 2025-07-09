import React from "react";
import "./styles.css";

const ratingOptions = ["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"];
const durationOptions = [
  "0–1 Hour (6,677)",
  "1–3 Hours (10,000)",
  "3–6 Hours (5,022)",
  "6–17 Hours (2,144)",
  "17+ Hours (433)",
];

const CourseFilters = () => {
  return (
    <div className="filter-sidebar">
      {/* Ratings */}
      <h4 className="filter-heading">Ratings</h4>
      <ul className="filter-list">
        {ratingOptions.map((opt, idx) => (
          <li key={idx} className="filter-option">
            <input type="checkbox" id={`rating-${idx}`} />
            <label htmlFor={`rating-${idx}`}>{opt}</label>
          </li>
        ))}
      </ul>

      {/* Video Duration */}
      <h4 className="filter-heading">Video Duration</h4>
      <ul className="filter-list">
        {durationOptions.map((opt, idx) => (
          <li key={idx} className="filter-option">
            <input type="checkbox" id={`duration-${idx}`} />
            <label htmlFor={`duration-${idx}`}>{opt}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseFilters;
