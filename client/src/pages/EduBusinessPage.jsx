import React from 'react';
import HeroSection from '../components/EduBusinessPage/EduHeroSection';
import FeatureSlider from '../components/EduBusinessPage/EduFeatureSlider';
import CompanySlider from '../components/EduBusinessPage/CompanySlider';
import ModernLearningSection from '../components/EduBusinessPage/ModernLearningSection';
import IndustryTabs from '../components/EduBusinessPage/IndustryTabs';
import TourSection from '../components/EduBusinessPage/TourSection';
import TestimonialSection from '../components/EduBusinessPage/TestimonalSection';
import AiShowcaseSection from '../components/EduBusinessPage/AiShowcaseSection';
import LearningImpactSection from '../components/EduBusinessPage/LearningImpactSection';

const EduBusinessPage = () => {
  return (
    <div className="bg-white overflow-x-hidden"> {/* ✅ This line fixes the scroll */}
      <HeroSection />
      <FeatureSlider />
      <CompanySlider />
      <ModernLearningSection />
      <IndustryTabs />
      <TourSection />
      <TestimonialSection />
      <AiShowcaseSection />
      <LearningImpactSection />
    </div>
  );
};

export default EduBusinessPage;
