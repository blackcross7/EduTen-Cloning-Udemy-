import React from "react";

const testimonials = [
  {
    quote: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.",
    name: "Diksha S",
    initials: "DS",
    course: "Business Intelligence (BI)",
    courseLink: "#",
  },
  {
    quote: "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.",
    name: "Chethan B",
    initials: "CB",
    course: "Go (golang)",
    courseLink: "#",
  },
  {
    quote: "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.",
    name: "Batchu K",
    initials: "BK",
    course: "Java",
    courseLink: "#",
  },
  {
    quote: "I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance their skills in this field.",
    name: "Ankit K",
    initials: "AK",
    course: "Web Development",
    courseLink: "#",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]">
    <div className="max-w-7xl mx-auto px-4">
      {/* Heading */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">See what others are achieving through learning</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Real stories from students who transformed their careers with our courses
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-purple-600 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <span className="text-gray-400 text-sm">Verified Student</span>
            </div>
            <p className="text-gray-800 flex-1 mb-6">{t.quote}</p>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
                {t.initials}
              </div>
              <span className="text-gray-700 font-medium">{t.name}</span>
            </div>
            <a
              href={t.courseLink}
              className="text-purple-700 font-medium text-sm hover:text-purple-800 hover:font-semibold transition duration-200 flex items-center gap-1"
            >
              View this {t.course} course <span aria-hidden>›</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;