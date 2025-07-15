import React from "react";
import { useNavigate } from "react-router-dom";

const InstructorHero = () => {
  const navigate = useNavigate();

  return (
   <div className="min-h-screen bg-white flex items-center justify-center px-2 pt-0">
  <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center">
    
    {/* Left Text Content */}
    <div className="w-full lg:w-1/2 text-left p-0 sm:p-10 -mt-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Come <br /> teach with us
          </h1>
          <p className="text-gray-700 text-lg mt-4">
            Become an instructor and change lives — including your own.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="mt-6 px-6 py-3 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition"
          >
            Get started
          </button>
        </div>

        {/* Right Transparent Image */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center p-4">
          <img
            src="/assets/EduTeachPage/teach2-removebg-preview.png" 
            alt="Instructor"
            className="w-full max-h-[90vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorHero;
