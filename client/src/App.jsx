import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import EduBusinessPage from "./pages/EduBusinessPage"; 
import NavbarPage from "./components/NavbarPage/NavbarPage";
import ProfilePage from "./pages/ProfilePage";

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
      </Routes>
    </>
  );
}

export default App;
