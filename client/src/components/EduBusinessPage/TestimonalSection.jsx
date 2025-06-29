import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading aligned left */}
      <div className="mb-10 pl-4 sm:pl-6 md:pl-10 lg:pl-16">
        <h1 className="text-4xl lg:text-5xl font-semibold text-black text-left">
          Don’t just take it from us
        </h1>
      </div>

      {/* Logos and Avatar (logo in front, less overlap) */}
      <div className="flex justify-center mb-6 relative h-20">
        {/* Profile in back */}
        <img
          src="/assets/business/testimonial-person.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-cyan-900 z-0"
        />
        {/* Logo in front, slightly overlapping left */}
        <img
          src="/assets/business/Ten-logo.webp"
          alt="Genpact Logo"
          className="w-20 h-20 rounded-full border-4 border-white z-10 absolute left-1/2 -translate-x-1/2"
          style={{ marginLeft: "-60px" }}
        />
      </div>


      {/* Quote */}
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-center text-gray-800 leading-relaxed mb-6 px-4 sm:px-8">
          “We wanted a holistic, easy-to-use, cloud-based platform where we
          could curate our own GenAI program — all with support from a partner
          who truly understands the industry landscape. That partner is EduTen.”
        </p>

        {/* Name and Title */}
        <div>
          <p className="text-lg text-center font-semibold text-black">
            Jyoti Singh
          </p>
          <p className="text-sm text-center text-gray-500 mt-1">
            Assistant Manager of L&D for Data and AI, Genpact
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
