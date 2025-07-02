// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/LoginPage/LoginForm";
import LoginIllustration from "../components/LoginPage/LoginIllustration";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        <LoginIllustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
 