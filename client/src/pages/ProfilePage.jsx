import React from 'react';
import { motion } from 'framer-motion';
import ProfileSidebar from '../components/ProfilePage/ProfileSidebar';
import ProfileForm from '../components/ProfilePage/ProfileForm';

const ProfilePage = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center max-w-7xl mx-auto p-6 md:p-10 lg:p-6 my-10">
        {/* Sidebar Animation */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full md:w-[30%] lg:w-[25%] bg-white shadow-md border border-gray-300 mb-6 sm:mb-0"
        >
          <ProfileSidebar />
        </motion.aside>

        {/* Form Animation */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-[70%] lg:w-[75%] bg-white shadow-md border border-gray-300"
        >
          <ProfileForm />
        </motion.section>
      </div>
    </main>
  );
};

export default ProfilePage;
