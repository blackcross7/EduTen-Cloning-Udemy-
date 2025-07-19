import React, { useState } from "react";

const tabData = [
  {
    title: "Plan your curriculum",
    content: [
      "Start by identifying your strongest subject or skill. With guidance from our insights tool, you can select a topic that’s in demand.",
      "Your delivery and teaching style — that’s where your uniqueness shines.",
      "How we support you",
      "We provide tools and templates to help you organize your course structure efficiently. Plus, our dashboard makes tracking everything simple."
    ],
    image: "/assets/EduTeachPage/new2.png"
  },
  {
    title: "Record your video",
    content: [
      "Use a smartphone or a basic DSLR to get started. Good lighting and a clear microphone will make a huge difference.",
      "Camera shy? Just record your screen — that works too. Aim to deliver at least 2 hours of high-quality content.",
      "How we support you",
      "We offer guidance on video production and provide feedback on test recordings. You're never alone in the process."
    ],
    image: "/assets/EduTeachPage/new1.png"
  },
  {
    title: "Launch your course",
    content: [
      "Share your course on social platforms or through your email list to get your first students and reviews.",
      "Once published, your course becomes visible to learners around the world and you earn every time someone enrolls.",
      "How we support you",
      "With marketing tools like coupon generators and promotional campaigns, we help boost your course reach and revenue potential."
    ],
    image: "/assets/EduTeachPage/new3.png"
  }
];

const HowToBegin = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white text-gray-800 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">How to begin</h2>

      {/* Tab Headers */}
      <div className="flex justify-center space-x-8 text-lg font-semibold text-gray-500 mb-10">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-1 transition duration-200 ${
              activeTab === index
                ? "text-black border-b-2 border-black"
                : "hover:text-black"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 gap-8 px-6 md:px-12 lg:px-20">
        
        {/* Text */}
        <div className="space-y-4 text-left text-base md:text-lg leading-relaxed">
          {tabData[activeTab].content.map((para, i) => (
            <p key={i} className={i === 2 ? "font-semibold" : ""}>{para}</p>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            className="w-full max-w-[380px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToBegin;
