import React from "react";
import SignUpForm from "../components/SignUpPage/SignUpForm";
import LoginIllustration from "../components/LoginPage/LoginIllustration"; // ✅ reuse if same

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center md:gap-[80px] max-w-6xl w-full">
        <LoginIllustration />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
