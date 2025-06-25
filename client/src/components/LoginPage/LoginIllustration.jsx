// src/components/LoginPage/LoginIllustration.jsx
import React from 'react';

const LoginIllustration = () => {
  return (
    <div className="hidden md:flex items-center justify-center w-full md:w-1/2 bg-gray-100 p-6">
      <img
        src="/assets/LoginPage/login-illustration.png"
        alt="Login Illustration"
        className="w-[720px] h-auto" // Increased width
      />
    </div>
  );
};

export default LoginIllustration;
