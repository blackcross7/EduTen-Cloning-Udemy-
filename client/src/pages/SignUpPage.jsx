import React from "react";
import SignUpForm from "../components/SignUpPage/SignUpForm";
import LoginIllustration from "../components/LoginPage/LoginIllustration"; // reused

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        <div className="hidden lg:block">
          <LoginIllustration />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
