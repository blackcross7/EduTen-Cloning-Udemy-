import React from "react";

const features = [
  {
    title: "Hands-on training",
    desc: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    icon: "🧤",
    highlight: true,
  },
  {
    title: "Personalized learning paths",
    desc: "Follow tailored courses that adapt to your skill level and goals.",
    icon: "🛤️",
  },
  {
    title: "Expert mentorship",
    desc: "Get guidance and feedback from experienced professionals in the field.",
    icon: "👨‍🏫",
  },
  {
    title: "Flexible scheduling",
    desc: "Learn at your own pace with 24/7 access to course materials and recordings.",
    icon: "⏰",
  },
  {
    title: "Comprehensive resources",
    desc: "Access a wide range of learning materials, including videos, articles, and tools.",
    icon: "📚",
  },
  {
    title: "Community support",
    desc: "Join a vibrant community of learners and experts to share knowledge and experiences.",
    icon: "🌐",
  },
];

const FocusedLearningSection = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
        Learning focused on your goals
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Features */}
        <div className="flex-1 space-y-6 w-full max-w-xl">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex items-start gap-4 rounded-xl p-5 border transition
                ${f.highlight ? "border-purple-500 bg-white shadow-md" : "border-gray-200 bg-gray-100"}
              `}
            >
              <div className="text-3xl">{f.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{f.title}</h3>
                  {f.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-purple-100 text-purple-700 font-semibold">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-1">{f.desc}</p>
                {f.cta && (
                  <a
                    href={f.cta.link}
                    className="text-purple-700 font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    {f.cta.label} <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Right: Assessment Preview */}
        <div className="flex-1 flex justify-center w-full">
          <img
            src="assets/landingPage/desktop.jpg"
            alt="Assessment Preview"
            className="rounded-2xl shadow-xl w-full max-w-lg border"
          />
        </div>
      </div>
    </div>
  </section>
);

export default FocusedLearningSection;