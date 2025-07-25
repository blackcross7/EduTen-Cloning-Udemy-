import ITSoftware from "./pages/ITSoftware";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

import { Routes, Route, useNavigate } from "react-router-dom";

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
import PricingPage from "./pages/PricingPage";


// Development SubPages 
import Mobiledev from "./components/DevelopmentSubPages/Mobiledev";
import DevOps from "./components/DevelopmentSubPages/DevOps";
import Softwaretesting from "./components/DevelopmentSubPages/Softwaretesting";
import WebDev from "./components/DevelopmentSubPages/WebDev";
import Gamedev from "./components/DevelopmentSubPages/Gamedev";


import MusicCoursePage from "./components/MusicPage/MusicCoursePage"
import CloudComputing from "./components/ITSoftwareSubPages/CloudComputing";
import Databases from "./components/ITSoftwareSubPages/Databases";
import Hardware from "./components/ITSoftwareSubPages/Hardware";
import NetworkSecurity from "./components/ITSoftwareSubPages/Network&Security";
import OperatingSystems from "./components/ITSoftwareSubPages/OperatingSystems";


function App() {
  const { checkAuth, user } = useAuthStore();
  const navigate = useNavigate();

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
        <Route path="/health-yoga" element={<HealthYogaPage />} />
        <Route path="/health-nutrition" element={<HealthNutritionPage />} />
        <Route path="/health-mental-health" element={<HealthMentalHealthPage />} />
        <Route path="/health-workout" element={<HealthWorkoutPage />} />
        <Route path="/health-meditation" element={<HealthMeditationPage />} />
        <Route path="/plans" element={<PricingPage />} />

        {/* Finance Sub Pages */}
        <Route path="/finance/taxation" element={<Taxation />} />
        <Route path="/finance/investment" element={<Invevstment />} />
        <Route path="/finance/financial-analysis" element={<FinancialAnalysis />} />
        <Route path="/finance/accounting" element={<Accounting />} />
        <Route path= "/finance/auditing" element={ <Auditing /> } />
        {/* ========= */}

        <Route path="/it-software" element={<ITSoftware />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> 
        <Route path="/interior" element={<InteriorDesignPage />} />
        <Route path="/design" element={<DesignPage/>} />
        <Route path="/edu-teach" element={<EduTeachPage />} />


        {/* Development SubPage  */}
        <Route path="/development/mobile-dev" element={<Mobiledev />} />
        <Route path="/development/devops" element={<DevOps />} />
        <Route path="/development/software-testing" element={<Softwaretesting />} />
        <Route path="/development/web-dev" element={<WebDev />} />
        <Route path="/development/game-dev" element={<Gamedev />} />
        {/* ========== */}

        {/* Music page  */}
        <Route path="/music" element={<MusicCoursePage />} />
        {/* ========== */}
        
       

        <Route path="/it-software/cloud-computing" element={<CloudComputing />} />
        <Route path="/it-software/databases" element={<Databases />} />
        <Route path="/it-software/hardware" element={<Hardware />} />
        <Route path="/it-software/network-security" element={<NetworkSecurity />} />
        <Route path="/it-software/operating-systems" element={<OperatingSystems />} />
      </Routes>

      <Footer /> 
    </>
  );
}

export default App;