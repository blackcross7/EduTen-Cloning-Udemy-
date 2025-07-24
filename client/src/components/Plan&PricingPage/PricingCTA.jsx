import React from "react";

const PricingCTA = () => {
  return (
    <section className="py-16 bg-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to start learning?
        </h2>
        <p className="text-purple-100 mb-8 text-lg">
          Join millions of learners worldwide and start your learning journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start free trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Contact sales
          </button>
        </div>
        <p className="text-purple-200 text-sm mt-4">
          No credit card required • Cancel anytime • 7-day free trial
        </p>
      </div>
    </section>
  );
};

export default PricingCTA; 