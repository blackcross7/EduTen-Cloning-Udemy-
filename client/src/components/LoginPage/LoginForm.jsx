import React, { useState } from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    await login({ email, password });

    const user = useAuthStore.getState().user;
    const error = useAuthStore.getState().error;

    if (user) {
      navigate('/');
    } else {
      setErrorMsg(error || 'Invalid email or password');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-10 shadow-md rounded-xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Log in to continue your learning journey
      </h2>

      {errorMsg && (
        <div className="text-red-600 text-sm text-center mb-4">{errorMsg}</div>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-black rounded-lg mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-black rounded-lg mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <div className="flex justify-center mb-4 sm:mb-6">
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-3/4 bg-purple-700 text-white py-3 rounded-full transition text-sm sm:text-base ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-800'
          }`}
        >
          {loading ? 'Logging in...' : 'Continue to Login'}
        </button>
      </div>

      <div className="text-center mb-4 text-gray-500 text-sm">
        Other log in options
      </div>

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

      <p className="text-center text-sm">
        Don't have an account?{' '}
        <Link to="/signup" className="text-purple-700 font-medium">
          Sign up
        </Link>
      </p>
      <p className="text-center text-sm mt-2">
        <Link to="#" className="text-purple-700 font-medium">
          Log in with your organization
        </Link>
      </p>
    </motion.form>
  );
};

export default LoginForm;
