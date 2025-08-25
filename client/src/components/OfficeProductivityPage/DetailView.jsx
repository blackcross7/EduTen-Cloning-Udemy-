const DetailView = ({ course, onClose }) => {
  // If no course data is provided, return a loading state or nothing.
  if (!course) return null;
  console.log(course.reviews);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-6xl mx-auto my-8">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base font-semibold transition-colors duration-200"
      >
        Back to Courses
      </button>

      {/* Course Header Section */}
      <div className="flex flex-col  gap-8 mb-8">
        {/* Image */}
        <div className="flex-shrink-0 md:w-1/2 mx-auto">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-48 sm:h-64 md:h-full object-cover rounded-lg shadow-md"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/600x400/94a3b8/ffffff?text=Image+Not+Found";
            }}
          />
        </div>

        {/* Details Column */}
        <div className="flex-grow">
          {/* Title + Instructor */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 leading-tight">
            {course.title}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium mb-4">
            By <span className="text-blue-600">{course.instructor}</span>
          </p>

          {/* Rating + Review Count */}
          <div className="flex items-center gap-2 mb-4 text-yellow-500 text-sm sm:text-base font-semibold">
            <span>⭐ {course.rating}</span>
            <span className="text-gray-500">
              ({course.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-6">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ₹{course.price}
            </span>
            {course.originalPrice && (
              <span className="text-gray-500 line-through text-sm sm:text-base">
                ₹{course.originalPrice}
              </span>
            )}
          </div>

          {/* CTA */}
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-md">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
          About this course
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Highlights */}
      {course.highlights && course.highlights.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            {course.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* What you will learn */}
      {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            What you'll learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            {course.whatYouWillLearn.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {course.requirements && course.requirements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            {course.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Target Audience */}
      {course.targetAudience && course.targetAudience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Who this course is for
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            {course.targetAudience.map((aud, i) => (
              <li key={i}>{aud}</li>
            ))}
          </ul>
        </div>
      )}

      {/* New Reviews Section */}
      {course.reviews && course.reviews.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2">
            Student Reviews
          </h2>
          <div className="space-y-6">
            {course.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-6 rounded-lg shadow-inner"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    {review.user}
                  </span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
