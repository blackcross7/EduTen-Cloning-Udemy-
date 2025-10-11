// CourseRating.jsx

// Helper function to render star icons (simplified)
const Star = ({ filled }) => (
  <span style={{ color: filled ? "gold" : "lightgray" }}>★</span>
);

const CourseRating = ({ rating, reviewCount }) => {
  const filledStars = Math.round(rating);
  const stars = Array(5)
    .fill(false)
    .map((_, i) => i < filledStars);

  return (
    <div className="flex items-center text-sm">
      <span className="font-bold text-yellow-700 mr-1">{rating}</span>
      <div className="mr-2">
        {stars.map((isFilled, index) => (
          <Star key={index} filled={isFilled} />
        ))}
      </div>
      <span className="text-gray-500">
        ({reviewCount?.toLocaleString()} ratings)
      </span>
    </div>
  );
};

export default CourseRating;
