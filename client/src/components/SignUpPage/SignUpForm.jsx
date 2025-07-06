import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';

const SignUpForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const navigate = useNavigate();
  const { signup, user, error, loading, clearError } = useAuthStore();

  useEffect(() => {
    clearError(); // Clear store error on mount
  }, [clearError]);

  useEffect(() => {
    if (user && !error) navigate('/');
  }, [user, error, navigate]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error || errorMsg) {
      clearError();
      setErrorMsg('');
    }
  };

  const validateInputs = () => {
    const { name, email, password } = form;

    if (name.trim().length < 2) return 'Name must be at least 2 characters long.';

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must be at least 6 characters and include uppercase, lowercase, and a number.';
    }

    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    const validationError = validateInputs();

    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setErrorMsg('');
    await signup(form);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white text-black flex flex-col justify-center p-6 sm:p-8 md:p-8 shadow-md rounded-xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Sign up with email
      </h2>

      {hasSubmitted && (errorMsg || error) && (
        <p className="text-red-600 text-sm text-center mb-4">
          {errorMsg || error}
        </p>
      )}


      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-400 rounded-lg mb-4 sm:mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <div className="flex justify-center mb-5 sm:mb-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-3/4 bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition text-sm sm:text-base disabled:opacity-60"
        >
          {loading ? 'Signing up...' : 'Continue to Signup'}
        </button>
      </div>

      <div className="text-center mb-4 text-gray-500 text-sm">
        Other sign up options
      </div>

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

      <p className="text-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
        By signing up, you agree to our{' '}
        <Link to="#" className="text-purple-700 font-medium">Terms of Use</Link> and{' '}
        <Link to="#" className="text-purple-700 font-medium">Privacy Policy</Link>.
      </p>

      <p className="text-center text-sm sm:text-base">
        Already have an account?{' '}
        <Link to="/login" className="text-purple-700 font-semibold">Log in</Link>
      </p>
    </motion.form>
  );
};

export default SignUpForm;
