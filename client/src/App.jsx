import ITSoftware from "./pages/ITSoftware";
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
      </Routes>

      <Footer /> 
    </>
  );
}

export default App;