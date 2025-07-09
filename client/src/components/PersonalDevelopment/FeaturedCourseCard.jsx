import React from "react";
import "./styles.css";
import { featuredCourse } from "./categories";

const FeaturedCourseCard = () => {
  const {
    title,
    instructor,
    thumbnail,
    rating,
    reviews,
    price,
    originalPrice,
    badges,
    duration,
    lectures,
    updated,
  } = featuredCourse;

  return (
    <div className="featured-card">
      <img src={thumbnail} alt={title} className="featured-thumbnail" />
      <div className="featured-details">
        <h3 className="featured-title">{title}</h3>
        <p className="featured-instructor">{instructor}</p>
        <p className="featured-rating">⭐ {rating} ({reviews} ratings)</p>
        <div className="featured-price">
          ₹{price}
          <span className="original-price"> ₹{originalPrice}</span>
        </div>
        <div className="card-badges">
          {badges.map((b, i) => (
            <span key={i} className={`badge ${b}`}>{b}</span>
          ))}
        </div>
        <p className="course-meta">
          {duration} • {lectures} lectures • Updated {updated}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
