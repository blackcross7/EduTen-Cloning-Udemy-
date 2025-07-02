import React from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-8 shadow-md rounded-xl mx-auto"
    >
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

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      {/* Continue button */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <button className="w-full sm:w-3/4 bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition text-sm sm:text-base">
          Continue to Signup
        </button>
      </div>

      {/* Divider */}
      <div className="text-center mb-4 text-gray-500 text-sm">
        Other sign up options
      </div>

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
        By signing up, you agree to our{' '}
        <Link to="#" className="text-purple-700 font-medium">Terms of Use</Link> and{' '}
        <Link to="#" className="text-purple-700 font-medium">Privacy Policy</Link>.
      </p>

      <p className="text-center text-sm sm:text-base">
        Already have an account?{' '}
        <Link to="/login" className="text-purple-700 font-semibold">Log in</Link>
      </p>
    </motion.div>
  );
};

export default SignUpForm;
