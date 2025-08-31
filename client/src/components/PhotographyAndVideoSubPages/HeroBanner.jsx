const HeroBanner = ({ label, paragraph }) => (
  <div className="hero-banner mx-6">
    <h1>{label || "Page"}</h1>
    <p>
      {paragraph || "Explore courses from experienced, real-world experts."}{" "}
    </p>
  </div>
);

export default HeroBanner;
