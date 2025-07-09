import React from 'react';
import WebCourseGrid from '../components/WebDevelopmentPage/WebCourseGrid';
import PopularTopics from '../components/WebDevelopmentPage/PopularTopics';
import WebCourseInfoPanel from '../components/WebDevelopmentPage/WebCourseInfoPanel';

const WebDevelopmentPage = () => {
  return (
    <main className="bg-white text-gray-800 py-10">
      <div className="w-[95vw] lg:w-[90vw] mx-auto">
        <WebCourseGrid />
        <PopularTopics />
        <WebCourseInfoPanel /> 

      </div>
    </main>
  );
};

export default WebDevelopmentPage;
 