import React from "react";
import { motion } from "framer-motion";

const LoginIllustration = () => {
  return (
    <motion.div
      className="hidden lg:flex items-center justify-center lg:w-[500px] xl:w-[600px] p-6"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="/assets/LoginPage/login-illustration.png"
        alt="Login Illustration"
        className="w-full h-auto object-contain rounded-xl shadow-lg"
      />
    </motion.div>
  );
};

export default LoginIllustration;
