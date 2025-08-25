import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

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
          <Link
            to={`/personal-development/${sub
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {sub}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default SubCategoryBar;
