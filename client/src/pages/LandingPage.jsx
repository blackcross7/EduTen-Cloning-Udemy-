import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../components/LandingPage/HeroSection';
import HeroCards from '../components/LandingPage/HeroCards';
import LandingCourseSection from '../components/LandingPage/LandingCourseSection';
import FocusedLearningSection from '../components/LandingPage/FocusedLearningSection';
import PricingPlansSection from '../components/LandingPage/PricingPlansSection';
import TestimonialsSection from '../components/LandingPage/TestimonialsSection';
import CaseStudySlider from '../components/LandingPage/CaseStudySlider';
import TrendingNowSection from '../components/LandingPage/TrendingNowSection';
import AIBusinessLeadersSection from '../components/LandingPage/AIBusinessLeadersSection';

const baseClass = "w-[95vw] lg:w-[90vw] mx-auto";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const LandingPage = () => {
  return (
    <>
      <style>
        {`
          @layer utilities {
            @keyframes gradientBackground {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient {
              animation: gradientBackground 12s ease infinite;
              background-size: 400% 400%;
            }
          }
        `}
      </style>

      <main>
        {/* 🎨 Animated Gradient Hero Section */}
        <div
          className="w-full py-24"
          style={{
            backgroundImage:
              "linear-gradient(-45deg, #0F172A, #3B82F6, #14B8A6, #A78BFA, #F9A8D4)",
            backgroundSize: "400% 400%",
          }}
        >
          <div className={baseClass}>
            <HeroSection />
          </div>
        </div>

        <motion.div 
          className="w-full py-10 bg-[#F3F4F6]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#F3F4F6]`}><HeroCards /></div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#E0F2FE]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#E0F2FE]`}><LandingCourseSection /></div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#F8FAFC]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#F8FAFC]`}><FocusedLearningSection /></div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#EFF6FF]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#EFF6FF]`}>
            <PricingPlansSection />
          </div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#F1F5F9]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#F1F5F9]`}>
            <TestimonialsSection />
          </div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#E0F7FA]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#E0F7FA]`}>
            <CaseStudySlider />
          </div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#F9FAFB]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#F9FAFB]`}>
            <TrendingNowSection />
          </div>
        </motion.div>

        <motion.div 
          className="w-full py-10 bg-[#EEF2FF]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${baseClass} bg-[#EEF2FF]`}>
            <AIBusinessLeadersSection />
          </div>
        </motion.div>

      </main>
    </>
  );
};

export default LandingPage;
