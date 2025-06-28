import React from "react";
import HeroSection from '../components/LandingPage/HeroSection'
import HeroCards from '../components/LandingPage/HeroCards'
import LandingCourseSection from '../components/LandingPage/LandingCourseSection'
import FocusedLearningSection from '../components/LandingPage/FocusedLearningSection'
import PricingPlansSection from '../components/LandingPage/PricingPlansSection'
import TestimonialsSection from '../components/LandingPage/TestimonialsSection'
import CaseStudySlider from '../components/LandingPage/CaseStudySlider'
import TrendingNowSection from '../components/LandingPage/TrendingNowSection'
import AIBusinessLeadersSection from '../components/LandingPage/AIBusinessLeadersSection'

const LandingPage = () => {
  return (
    <>
    <main>
        <HeroSection />

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <HeroCards />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <LandingCourseSection />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <FocusedLearningSection />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <PricingPlansSection />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <TestimonialsSection />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <CaseStudySlider />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <TrendingNowSection />      
      </div>

      <div className=' w-[95vw] lg:w-[90vw] mx-auto my-10'>       
        <AIBusinessLeadersSection />      
      </div>

    </main>
      
    </>
  )
}

export default LandingPage;
