import React from "react";

const WhyTeach = () => {
  return (
    <section className="bg-white text-center py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">So many reasons to start</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
        <div>
          <img src="/assets/EduTeachPage/nh2.png" alt="Teach your way" className="mx-auto mb-4 h-16" />
          <h3 className="font-semibold text-lg mb-2">Teach your way</h3>
          <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
        </div>
        <div>
          <img src="/assets/EduTeachPage/nh.png" alt="Inspire learners" className="mx-auto mb-4 h-16" />
          <h3 className="font-semibold text-lg mb-2">Inspire learners</h3>
          <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
        </div>
        <div>
          <img src="/assets/EduTeachPage/nh3.png" alt="Get rewarded" className="mx-auto mb-4 h-16" />
          <h3 className="font-semibold text-lg mb-2">Get rewarded</h3>
          <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
        </div>
      </div>

      {/* Purple Stats Block */}
      <div className="bg-purple-700 text-white mt-20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-lg font-semibold">
          <div>
            <div className="text-3xl font-bold">80M</div>
            Students
          </div>
          <div>
            <div className="text-3xl font-bold">75+</div>
            Languages
          </div>
          <div>
            <div className="text-3xl font-bold">1.1B</div>
            Enrollments
          </div>
          <div>
            <div className="text-3xl font-bold">180+</div>
            Countries
          </div>
          <div>
            <div className="text-3xl font-bold">17,200+</div>
            Enterprise customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTeach;
