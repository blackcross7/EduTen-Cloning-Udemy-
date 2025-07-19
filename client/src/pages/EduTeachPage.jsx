import React from "react";
import InstructorHero from "../components/EduTeachPage/InstructorHero";
import WhyTeach from "../components/EduTeachPage/WhyTeach";
import HowToBegin from "../components/EduTeachPage/HowToBegin";
import EduInstructorStories from "../components/EduTeachPage/EduInstructorStories";
import InstructorSupport from "../components/EduTeachPage/InstructorSupport";



const EduTeachPage = () => {
  return (
    <div className="pt-6">
      <InstructorHero />
      <WhyTeach />
      <HowToBegin />
      <EduInstructorStories />
      <InstructorSupport />
    </div>
  );
};

export default EduTeachPage;
