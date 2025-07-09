import React from "react";

const CourseCard = ({ title, instructor, thumbnail, rating, price }) => (
  <div className="course-card">
    <img src={thumbnail} alt={title} className="card-thumbnail" />
    <h3 className="card-title">{title}</h3>
    <p className="card-instructor">By {instructor}</p>
    <p className="card-rating">⭐ {rating} • ₹{price}</p>
    <button className="enroll-btn">Enroll Now</button>
  </div>
);

export default CourseCard;
