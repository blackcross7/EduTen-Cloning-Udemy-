const HoverCard = ({ course }) => {
  console.log(course);

  return (
    <>
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full 
                    w-80 p-4 rounded-xl shadow-lg bg-white border border-gray-200 z-20"
      >
        <div
          className={`absolute top-[100%] left-1/2 -translate-y-1/2 w-6 h-6 bg-white rotate-45 overflow-hidden -right-2 border-r-2 border-b-2 rounded-tl-full `}
          aria-hidden
        />
        <h4 className="font-semibold mb-2">What you'll learn</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {course.highlights?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <button className="mt-3 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default HoverCard;
