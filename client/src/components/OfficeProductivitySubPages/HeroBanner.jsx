const HeroBanner = ({
  label = "Courses to get you started",
  title = "",
  paragraph = "Explore courses from experienced, real-world experts.",
}) => (
  <div className="hero-banner mx-6 font-serif">
    {title && <h1 className="font-thin mb-6">{title}</h1>}
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{label}</h2>

      <p className="mt-2 text-gray-700 text-sm">{paragraph}</p>
    </div>
  </div>
);
export default HeroBanner;
