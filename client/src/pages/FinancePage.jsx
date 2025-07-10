import React from 'react';
import FinanceCourceSection from '../components/FinanceCoursePage/FinanceCourceSection';
import PopularTopics from '../components/WebDevelopmentPage/PopularTopics';
import WebCourseInfoPanel from '../components/WebDevelopmentPage/WebCourseInfoPanel';

const FinancePage = () => {
  return (
    <main className="bg-white text-gray-800 py-10">
      <div className="w-[95vw] lg:w-[90vw] mx-auto">
        <FinanceCourceSection />
        <PopularTopics />
        <WebCourseInfoPanel /> 

      </div>
    </main>
  );
};

export default FinancePage;
 // 