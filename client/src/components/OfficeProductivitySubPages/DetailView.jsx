const DetailView = ({ course, onClose }) => {
  if (!course) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        ← Back
      </button>

      {/* Title + Instructor */}
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-500 mb-4">By {course.instructor}</p>

      {/* Rating + Review Count */}
      <div className="flex items-center gap-2 mb-4 text-yellow-500">
        ⭐ {course.rating}{" "}
        <span className="text-gray-600">({course.reviewCount} reviews)</span>
      </div>

      {/* Image */}
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
      />

      {/* Price */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold text-gray-900">
          ₹{course.price}
        </span>
        {course.originalPrice && (
          <span className="text-gray-500 line-through">
            ₹{course.originalPrice}
          </span>
        )}
      </div>

      {/* Short Description */}
      <p className="text-lg text-gray-700 mb-8">{course.description}</p>

      {/* Extra Details */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <p>
          <span className="font-semibold">Level:</span> {course.level}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {course.language}
        </p>
        <p>
          <span className="font-semibold">Duration:</span> {course.duration}
        </p>
        <p>
          <span className="font-semibold">Lectures:</span> {course.lectures}
        </p>
        <p>
          <span className="font-semibold">Last Updated:</span>{" "}
          {course.lastUpdated}
        </p>
        {course.subtitleLanguages && (
          <p>
            <span className="font-semibold">Subtitles:</span>{" "}
            {course.subtitleLanguages.join(", ")}
          </p>
        )}
      </div>

      {/* Highlights */}
      {course.highlights && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {course.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* What you will learn */}
      {course.whatYouWillLearn && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What you'll learn</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {course.whatYouWillLearn.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {course.requirements && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {course.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Target Audience */}
      {course.targetAudience && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Who this course is for</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {course.targetAudience.map((aud, i) => (
              <li key={i}>{aud}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default DetailView;
