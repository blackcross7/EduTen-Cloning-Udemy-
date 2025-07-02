import React from "react";

const cards = [
  {
    image: "/assets/business/prodapt.png",
    title: "How Prodapt Leveraged AI-Driven Learning",
    link: "Read case study",
  },
  {
    image: "/assets/business/EduTen-ai.jpg",
    title: "Get a glimpse into the future of learning: EduTen AI",
    link: "Watch now",
  },
  {
    image: "/assets/business/genai-leader.jpg",
    title: "An L&D Leader’s Cheat Sheet to Supercharge Learning With GenAI",
    link: "Download guide",
  },
];

const AiShowcaseSection = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top heading and button */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 text-center md:text-left gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
            Accelerate your skills <br /> journey <span className="font-bold">with AI</span>
          </h2>
          <button className="bg-black text-white px-5 py-2 rounded font-semibold hover:bg-purple-600 transition">
            Request a demo
          </button>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="space-y-2 text-center md:text-left">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl w-full h-[220px] object-cover"
              />
              <h3 className="font-semibold text-black text-lg">{card.title}</h3>
              <a
                href="#"
                className="text-purple-700 font-medium hover:text-black transition"
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiShowcaseSection;
