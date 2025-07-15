import React from "react";

const InstructorSupport = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      {/* Support Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-6">
        
        {/* Left Illustration */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src="/assets/EduTeachPage/imag22.jpeg"
            alt="Support Left"
            className="w-56 sm:w-64 md:w-72"
          />
        </div>

        {/* Center Text Content */}
        <div className="text-center lg:w-2/4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            You won’t have to do it alone
          </h2>
          <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
            Our <strong>Instructor Support Team</strong> is here to answer your questions and review
            your test video, while our <strong>Teaching Center</strong> gives you plenty of resources
            to help you through the process. Plus, get the support of experienced instructors in our
            <strong> online community</strong>.
          </p>
          <a
            href="#"
            className="text-purple-700 font-semibold hover:underline text-sm sm:text-base"
          >
            Need more details before you start? Learn more.
          </a>
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src="/assets/EduTeachPage/image 11.jpeg"
            alt="Support Right"
            className="w-56 sm:w-64 md:w-72"
          />
        </div>
      </div>

      {/* New Section Below */}
      <div className="w-full text-center px-4 py-12 bg-[#f7f7f7]">
  <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-2">
    Become an instructor today
  </h1>
  <p className="text-gray-700 text-lg sm:text-xl mb-6">
  Join one of the world’s largest online learning marketplaces.
</p>

   
  <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-28 py-2 rounded-lg transition">
    Get started
  </button>
</div>

    </div>
  );
};

export default InstructorSupport;
