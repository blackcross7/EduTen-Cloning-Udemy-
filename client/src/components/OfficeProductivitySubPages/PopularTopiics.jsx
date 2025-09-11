import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularTopics = ({ topics }) => {
  console.log(topics);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5; // scroll by ~1.5 cards
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-5xl px-4 py-10 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 mt-6 z-10 hover:bg-gray-100"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 mt-6 z-10 hover:bg-gray-100"
      >
        <ChevronRight size={40} />
      </button>

      {/* Scrollable grid */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
      >
        <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-max">
          {topics &&
            topics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-white font-bold text-black border rounded-md flex items-center justify-center text-center 
                         cursor-pointer  hover:bg-gray-100 transition-colors duration-300 
                         w-40 h-16 text-sm flex-shrink-0"
              >
                {topic}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTopics;
