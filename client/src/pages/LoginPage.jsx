import React from "react";
import LoginIllustration from "../components/LoginPage/LoginIllustration";
import LoginForm from "../components/LoginPage/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-[70px] max-w-6xl w-full">
        
        {/* Illustration on the left */}
        <LoginIllustration />

        {/* Login Form on the right */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
