import React, { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from "./store/authStore";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import EduBusinessPage from "./pages/EduBusinessPage";
import NavbarPage from "./components/NavbarPage/NavbarPage";
import ProfilePage from "./pages/ProfilePage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";

function App() {
  const { checkAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])


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
      </Routes>
    </>
  );
}

export default App;
