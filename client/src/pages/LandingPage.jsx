import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import HeroCards from '../components/LandingPage/HeroCards'

const LandingPage = () => {
  return (
    <>
    <main>
        <HeroSection />

      <div className=' w-full lg:w-[90vw] mx-auto'>
        <h2 className='text-3xl font-bold mb-2'>Ready to reimagine your career?</h2>
        <p className='text-gray-600'>Get the skills and real-world experience employers want with Career Accelerators.</p>
        <HeroCards />
      </div>

    </main>
      
    </>
  )
}

export default LandingPage
