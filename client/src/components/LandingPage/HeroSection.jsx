import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const banners = [
  {
    id: 1,
    title: "Level Up Your Skills",
    desc: "Start learning from industry experts with hands-on projects.",
    button: "Explore Courses",
    img: "assets/landingPage/hero1.avif",
    bg: "bg-gradient-to-r from-purple-700 via-indigo-800 to-indigo-900",
    accent: "bg-purple-600",
  },
  {
    id: 2,
    title: "Skills that Boost Your Career",
    desc: "Complete courses and earn certificates to boost your resume.",
    button: "Browse Certifications",
    img: "assets/landingPage/hero2.jpg",
    bg: "bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400",
    accent: "bg-pink-600",
  },
  {
    id: 3,
    title: "Learn the Latest Technologies",
    desc: "Access high-quality content 24/7 from anywhere.",
    button: "Start Learning",
    img: "assets/landingPage/hero3.jpg",
    bg: "bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-500",
    accent: "bg-indigo-600",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

const HeroSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prev]) => [
      (prev + newDirection + banners.length) % banners.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 6000);
    return () => clearTimeout(timer);
  }, [page]);

  const banner = banners[page];

  return (
    <div
      className={`relative w-full lg:w-[90vw] h-[50vh] mx-auto overflow-hidden  shadow-2xl ${banner.bg} transition-colors duration-500 mb-10`}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={banner.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          className="w-[80vw] mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10"
        >
          <img
            src={banner.img}
            alt="hero"
            className="w-[90%] md:w-[40%] max-w-[420px] h-[240px] object-cover rounded-2xl shadow-lg"
          />

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-xl text-white text-center md:text-left space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {banner.title}
            </h2>
            <p className="text-base md:text-lg">{banner.desc}</p>
            <button
              className={`px-6 py-2 ${banner.accent} hover:brightness-110 text-white font-semibold rounded-full transition`}
            >
              {banner.button}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-10"
      >
        <ChevronLeft size={28} color="white" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-10"
      >
        <ChevronRight size={28} color="white" />
      </button>
    </div>
  );
};

export default HeroSection;
