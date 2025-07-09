import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import EduBusinessPage from "./pages/EduBusinessPage";
import ProfilePage from "./pages/ProfilePage";

// Components
import NavbarPage from "./components/NavbarPage/NavbarPage";
import PersonalDevPage from "./components/PersonalDevelopment/PersonalDevPage"; // ✅ New Page

function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/business" element={<EduBusinessPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/personal-development" element={<PersonalDevPage />} /> {/* ✅ New Route */}
      </Routes>
    </>
  );
}

export default App;
