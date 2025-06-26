import React from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';

const SignUpForm = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-10 shadow-md rounded-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Sign up with email
      </h2>

      {/* Full name */}
      <input
        type="text"
        placeholder="Full name"
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      {/* Checkbox */}
      <label className="flex items-start mb-4 sm:mb-6 text-xs sm:text-sm text-gray-700 gap-3 leading-snug">
        <input type="checkbox" className="mt-1 w-4 h-4" />
        Send me special offers, personalized recommendations, and learning tips.
      </label>

      {/* Continue button */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <button className="w-full sm:w-3/4 bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition text-sm sm:text-base">
          Continue with email
        </button>
      </div>

      {/* Divider */}
      <div className="text-center mb-4 text-gray-500 text-sm">Other sign up options</div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition"
          title="Google"
        >
          <img
            src="/assets/LoginPage/google-logo.png"
            alt="Google"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition"
          title="Facebook"
        >
          <FaFacebookF className="text-[#1877F2] text-lg sm:text-xl" />
        </button>
        <button
          className="p-3 border border-purple-600 rounded hover:scale-105 transition"
          title="Apple"
        >
          <FaApple className="text-black text-lg sm:text-xl" />
        </button>
      </div>

      {/* Terms and login */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
        By signing up, you agree to our{" "}
        <a href="#" className="text-purple-700 font-medium">Terms of Use</a> and{" "}
        <a href="#" className="text-purple-700 font-medium">Privacy Policy</a>.
      </p>

      <p className="text-center text-sm sm:text-base">
        Already have an account?{" "}
        <a href="#" className="text-purple-700 font-semibold">Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;
