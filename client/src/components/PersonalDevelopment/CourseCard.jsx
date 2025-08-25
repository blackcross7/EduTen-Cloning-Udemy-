import React from "react";

const CourseCard = ({
  title,
  instructor,
  thumbnail,
  rating,
  price,
  originalPrice,
  badges,
}) => (
  <div className="course-card">
    <div className="card-image-wrapper">
      <img src={thumbnail} alt={title} className="card-thumbnail" />
    </div>

    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-instructor">By {instructor}</p>
      <p className="card-rating">⭐ {rating}</p>

      <div className="card-price">
        ₹{price}
        {originalPrice && (
          <span className="original-price">₹{originalPrice}</span>
        )}
      </div>

      {badges?.length > 0 && (
        <div className="card-badges">
          {badges.map((badge, idx) => (
            <span key={idx} className={`badge ${badge.replace(/\s+/g, "")}`}>
              {badge}
            </span>
          ))}
        </div>
      )}

      <button className="enroll-btn">Enroll Now</button>
    </div>
  </div>
);

export default CourseCard;
