import React from "react";
import "./styles.css";

const skillCategories = [
  {
    title: "In-demand Careers",
    items: [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
      "See all Career Accelerators →",
    ],
  },
  {
    title: "Web Development",
    items: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
  },
  {
    title: "IT Certifications",
    items: [
      "Amazon AWS",
      "AWS Cloud Practitioner",
      "Azure Fundamentals",
      "AWS Solutions Architect",
      "Kubernetes",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Productivity",
      "Emotional Intelligence",
    ],
  },
  {
    title: "Certifications by Skill",
    items: [
      "Cybersecurity Certification",
      "Project Management Cert",
      "Cloud Certification",
      "Data Analytics Cert",
      "HR Management Cert",
      "See all Certifications →",
    ],
  },
  {
    title: "Data Science",
    items: [
      "Data Science",
      "Python",
      "Machine Learning",
      "ChatGPT",
      "Deep Learning",
    ],
  },
  {
    title: "Communication",
    items: [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Writing",
      "PowerPoint",
    ],
  },
  {
    title: "Business Analytics & Intelligence",
    items: [
      "Microsoft Excel",
      "SQL",
      "Power BI",
      "Data Analysis",
      "Business Analysis",
    ],
  },
];

const SkillPromoSection = () => {
  return (
    <div className="skill-promo-bg">
      <div className="skill-promo-wrapper">
        <h2 className="section-heading">Explore Skills by Role or Certification</h2>

        <div className="skill-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <h4 className="skill-title">{cat.title}</h4>
              <ul className="skill-list">
                {cat.items.map((item, i) => (
                  <li key={i} className="skill-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="trusted-by-bar">
          <p>Trusted by teams at</p>
          <div className="logo-row">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nasdaq_Logo.svg/120px-Nasdaq_Logo.svg.png"
              alt="Nasdaq"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/120px-Volkswagen_logo_2019.svg.png"
              alt="Volkswagen"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/NetApp_logo_2020.svg/120px-NetApp_logo_2020.svg.png"
              alt="NetApp"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Eventbrite_Logo.svg/120px-Eventbrite_Logo.svg.png"
              alt="Eventbrite"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPromoSection;
