import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import HeroCards from '../components/LandingPage/HeroCards'
import LandingCourseSection from '../components/LandingPage/LandingCourseSection'

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

    </main>
      
    </>
  )
}

export default LandingPage
