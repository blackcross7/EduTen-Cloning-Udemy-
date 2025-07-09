import React from "react";
import "./styles.css";

const subCategories = [
  "Personal Transformation",
  "Personal Productivity",
  "Leadership",
  "Career Development",
  "Self Confidence",
  "Motivation",
];

const SubCategoryBar = () => {
  return (
    <div className="subcategory-bar">
      {subCategories.map((sub, idx) => (
        <button key={idx} className="subcategory-btn">
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryBar;
