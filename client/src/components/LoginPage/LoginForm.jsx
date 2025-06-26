import React from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-10 shadow-md rounded-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Log in to continue your learning journey
      </h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-black rounded-lg mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      {/* Continue Button */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <button className="w-full sm:w-3/4 bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition text-sm sm:text-base">
          Continue with email
        </button>
      </div>

      {/* Divider */}
      <div className="text-center mb-4 text-gray-500 text-sm">
        Other log in options
      </div>

      {/* Icon Buttons with Purple Border */}
      <div className="flex justify-center gap-4 sm:gap-6 mb-6">
        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition flex items-center justify-center"
          title="Continue with Google"
        >
          <img
            src="/assets/LoginPage/google-logo.png"
            alt="Google"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>

        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition flex items-center justify-center"
          title="Continue with Facebook"
        >
          <FaFacebookF className="text-[#1877F2] text-lg sm:text-xl" />
        </button>

        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition flex items-center justify-center"
          title="Continue with Apple"
        >
          <FaApple className="text-black text-lg sm:text-xl" />
        </button>
      </div>

      {/* Footer Links */}
      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <a href="#" className="text-purple-700 font-medium">
          Sign up
        </a>
      </p>
      <p className="text-center text-sm mt-2">
        <a href="#" className="text-purple-700 font-medium">
          Log in with your organization
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
