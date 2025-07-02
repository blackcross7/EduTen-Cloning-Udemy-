import React from "react";
import { motion } from "framer-motion";

const leftImages = [
  { src: "/assets/business/left1.jpg", top: "-100px", left: "80px", size: "w-48 h-48" },
  { src: "/assets/business/left2.jpg", top: "200px", left: "20px", size: "w-48 h-48" },
  { src: "/assets/business/left3.jpg", top: "390px", left: "90px", size: "w-48 h-48" },
];

const rightImages = [
  { src: "/assets/business/right1.webp", top: "-100px", right: "80px", size: "w-48 h-48" },
  { src: "/assets/business/right2.webp", top: "200px", right: "20px", size: "w-48 h-48" },
  { src: "/assets/business/right3.webp", top: "390px", right: "60px", size: "w-48 h-48" },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 2.1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 2.1 } },
};

const LearningImpactSection = () => {
  return (
    <section className="bg-[#f9fbfc] pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative min-h-[600px]">
        {/* Left positioned images */}
        <div className="hidden lg:block absolute inset-0 z-0">
          {leftImages.map(({ src, top, left, size }, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`left-${i}`}
              className={`rounded-xl object-cover absolute ${size}`}
              style={{ top, left }}
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>

        {/* Right positioned images */}
        <div className="hidden lg:block absolute inset-0 z-0">
          {rightImages.map(({ src, top, right, size }, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`right-${i}`}
              className={`rounded-xl object-cover absolute ${size}`}
              style={{ top, right }}
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>

        {/* Center content */}
        <div className="text-center pt-24 max-w-3xl mx-auto relative z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            What will learning do <br /> for your organization?
          </h1>
          <p className="text-lg text-gray-700">
            See the impact of online learning for businesses. Let’s start on a
            plan that supports your goals.
          </p>
          <button className="bg-black text-white font-semibold px-6 py-3 text-lg rounded hover:bg-purple-600 transition">
            Request a demo
          </button>
          <p className="text-base text-gray-700">
            Small team?{" "}
            <a href="#" className="font-semibold underline hover:text-purple-600">
              Start with Team Plan.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningImpactSection;
