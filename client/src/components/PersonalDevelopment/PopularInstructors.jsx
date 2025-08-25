import React from "react";
import "./styles.css";

const instructors = [
  {
    name: "Joeel & Natalie",
    expertise: "Life Coach Training, Personal Success",
    rating: 4.6,
    students: "7,78,240",
    courses: 126,
    thumbnail: "/assets/business/testimonial-person.png",
  },
  {
    name: "Steve Ballinger, MBA",
    expertise: "ChatGPT, AI Content Generation",
    rating: 4.5,
    students: "9,43,525",
    courses: 87,
    thumbnail: "/assets/business/testimonial-person.png",
  },
  {
    name: "Kain Ramsay",
    expertise: "Life Coach Training, NLP",
    rating: 4.6,
    students: "6,76,145",
    courses: 30,
    thumbnail: "/assets/business/testimonial-person.png",
  },
  {
    name: "TJ Walker",
    expertise: "Public Speaking, Soft Skills",
    rating: 4.5,
    students: "21,33,274",
    courses: 243,
    thumbnail: "/assets/business/testimonial-person.png",
  },
  {
    name: "Madhu Nair PMP®",
    expertise: "Project Management, Book Cover Design",
    rating: 4.6,
    students: "32,526",
    courses: 10,
    thumbnail: "/assets/business/testimonial-person.png",
  },
];

const PopularInstructors = () => {
  return (
    <div className="popular-instructors-wrapper">
      <h2 className="section-heading">Popular Instructors</h2>
      <div className="instructor-grid">
        {instructors.map((inst, idx) => (
          <div key={idx} className="instructor-card">
            <img
              src={inst.thumbnail}
              alt={inst.name}
              className="instructor-photo"
            />
            <div className="instructor-details">
              <h3 className="instructor-name">{inst.name}</h3>
              <p className="instructor-expertise">{inst.expertise}</p>
              <p className="instructor-meta">
                ⭐ {inst.rating} Instructor rating • {inst.students} students •{" "}
                {inst.courses} courses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
