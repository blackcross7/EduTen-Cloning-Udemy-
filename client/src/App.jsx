import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

import { Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import EduBusinessPage from "./pages/EduBusinessPage";
import NavbarPage from "./components/NavbarPage/NavbarPage";
import ProfilePage from "./pages/ProfilePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import Footer from "./components/FooterSection/Footer";
import BusinessCoursePage from "./pages/BusinessCoursePage"; 
import PersonalDevPage from "./components/PersonalDevelopment/PersonalDevPage"; 
import FinancePage from "./pages/FinancePage";
import InteriorDesignPage from "./pages/InteriorDesignPage";
import MarketingPage from "./pages/MarketingPage";
import DigitalMarketing from "./components/MarketingCoursePage/DigitalMarketing";
import SEO from "./components/MarketingCoursePage/SEO";
import ContentMarketing from "./components/MarketingCoursePage/ContentMarketing";
import SocialMedia from "./components/MarketingCoursePage/SocialMedia";
import DesignPage from "./pages/DesignPage";
import Branding from "./components/MarketingCoursePage/Branding";
import HealthAndFitnessPage from "./pages/HealthAndFitnessPage";


import EduTeachPage from "./pages/EduTeachPage";


import Taxation from "./components/FinanceSubPages/Taxation";
import Invevstment from "./components/FinanceSubPages/Invevstment";
import FinancialAnalysis from "./components/FinanceSubPages/FinancialAnalysis";
import Accounting from "./components/FinanceSubPages/Accounting";
import Auditing from "./components/FinanceSubPages/Auditing";

import Modeling from "./components/DesignSubPages/Modeling";
import FaashionDesign from "./components/DesignSubPages/FaashionDesign";
import UIDesign from "./components/DesignSubPages/UIDesign";
import GraphicDesign from "./components/DesignSubPages/GraphicDesign";

import HealthYogaPage from "./pages/HealthYogaPage";
import HealthNutritionPage from "./pages/HealthNutritionPage";
import HealthMentalHealthPage from "./pages/HealthMentalHealthPage";
import HealthWorkoutPage from "./pages/HealthWorkoutPage";
import HealthMeditationPage from "./pages/HealthMeditationPage";


function App() {
  const { checkAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavbarPage />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={user ? <LandingPage /> : <LoginPage />} />
        <Route path="/signup" element={user ? <LandingPage /> : <SignUpPage />} />
        <Route path="/business" element={<EduBusinessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/personal-development" element={<PersonalDevPage />} /> 
        <Route path="/businesscourse" element={<BusinessCoursePage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/interior-design" element={<InteriorDesignPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/marketing/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/marketing/seo" element={<SEO />} />
        <Route path="/marketing/content-marketing" element={<ContentMarketing />} />
        <Route path="/marketing/social-media" element={<SocialMedia />} />
        <Route path="/marketing/branding" element={<Branding />} />
        <Route path="design/3d-modeling" element={<Modeling />} />
        <Route path="design/fashion-design" element={<FaashionDesign />} />
        <Route path="design/UI-design" element={<UIDesign />} />
        <Route path="design/graphic-design" element={<GraphicDesign />} />
        <Route path="/health-and-fitness" element={<HealthAndFitnessPage />} />
        <Route path="/health-and-fitness/yoga" element={<HealthYogaPage />} />
        <Route path="/health-and-fitness/nutrition" element={<HealthNutritionPage />} />
        <Route path="/health-and-fitness/mental-health" element={<HealthMentalHealthPage />} />
        <Route path="/health-and-fitness/workout" element={<HealthWorkoutPage />} />
        <Route path="/health-and-fitness/meditation" element={<HealthMeditationPage />} />

        {/* Finance Sub Pages */}
        <Route path="/finance/taxation" element={<Taxation />} />
        <Route path="/finance/investment" element={<Invevstment />} />
        <Route path="/finance/financial-analysis" element={<FinancialAnalysis />} />
        <Route path="/finance/accounting" element={<Accounting />} />
        <Route path= "/finance/auditing" element={ <Auditing /> } />
        {/* ========= */}

        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> 
        <Route path="/interior" element={<InteriorDesignPage />} />
        <Route path="/design" element={<DesignPage/>} />
        <Route path="/personal-development" element={<PersonalDevPage />} /> 
        <Route path="/edu-teach" element={<EduTeachPage />} />
        
       

      </Routes>

      <Footer /> 
    </>
  );
}

export default App;