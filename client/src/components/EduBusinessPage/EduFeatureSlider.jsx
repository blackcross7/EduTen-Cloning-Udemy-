import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    tag: "Enterprise-wide training",
    image: "/assets/business/enterprise.webp",
    title: "Upskill your entire organization",
    desc: "Cultivate a learning culture that keeps every team engaged and growing.",
  },
  {
    tag: "Certification preparation",
    image: "/assets/business/certification.png",
    title: "Develop and validate skills",
    desc: "Grow employees’ skills with certification prep courses and share badges after exams.",
  },
  {
    tag: "AI Upskilling",
    image: "/assets/business/ai.png",
    title: "Partner with us on your learning strategy",
    desc: "Use AI Starter Paths to help employees gain AI-related skills.",
  },
  {
    tag: "Leadership development",
    image: "/assets/business/leadership.png",
    title: "Identify and empower leaders",
    desc: "Create an environment of trust and inclusion by tools to lead, motivate, and engage.",
  },
  {
    tag: "Tech Team Training",
    image: "/assets/business/tech.png",
    title: "Fast-track tech development",
    desc: "Close skills gaps, prep teams for certifications, and drive digital transformation.",
  },
];

const EduFeatureSlider = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollStatus = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollStatus);
      updateScrollStatus();
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateScrollStatus);
    };
  }, []);

  return (
    <div className="px-6 lg:px-20 py-10 ">
      {/* Arrows on the left */}
      <div className="flex justify-start 3xl:hidden gap-4 mb-6">
        <button
          onClick={() => scroll(-300)}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${canScrollLeft ? "border-black text-black hover:bg-gray-100" : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll(300)}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${canScrollRight ? "border-black text-black hover:bg-gray-100" : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center w-full ">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 no-scrollbar"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[350px] h-[500px] rounded-2xl overflow-hidden relative bg-white shadow-sm border group"
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 left-4 px-3 py-1 text-sm font-medium text-gray-800 bg-white/60 backdrop-blur-sm rounded border border-black">
                  {item.tag}
                </span>

                <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-300 ease-in-out group-hover:h-[45%] h-[25%] rounded-t-2xl z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default EduFeatureSlider;
