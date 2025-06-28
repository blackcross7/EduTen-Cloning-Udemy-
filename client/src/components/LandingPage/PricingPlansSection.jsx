import React from "react";

const plans = [
  {
    name: "Personal Plan",
    subtitle: "For you",
    icon: "👤",
    users: "Individual",
    price: "Starting at ₹500 per month",
    note: "Billed monthly or annually. Cancel anytime.",
    button: { label: "Start subscription", link: "#" },
    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
    highlight: true,
  },
  {
    name: "Team Plan",
    subtitle: "For your team",
    icon: "👥",
    users: "2 to 20 people",
    price: "₹2,000 a month per user",
    note: "Billed annually. Cancel anytime.",
    button: { label: "Start subscription", link: "#" },
    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
  {
    name: "Enterprise Plan",
    subtitle: "For your whole organization",
    icon: "🏢",
    users: "More than 20 people",
    price: "Contact sales for pricing",
    note: "",
    button: { label: "Request a demo", link: "#" },
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
  },
];

const PricingPlansSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
        Accelerate growth – for you or your organization
      </h2>
      <p className="text-gray-600 mb-8">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`rounded-2xl border ${
              plan.highlight
                ? "border-purple-500 shadow-lg"
                : "border-gray-200"
            } bg-white flex flex-col p-6 pt-4`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{plan.icon}</span>
              <span className="font-semibold text-lg">{plan.name}</span>
            </div>
            <div className="text-gray-500 text-sm mb-1">{plan.subtitle}</div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
              <span className="text-base">👥</span>
              <span>{plan.users}</span>
            </div>
            <div className="font-bold text-lg mb-1">{plan.price}</div>
            {plan.note && (
              <div className="text-xs text-gray-500 mb-4">{plan.note}</div>
            )}
            <a
              href={plan.button.link}
              className={`block w-full text-center font-bold py-2 rounded-md mb-4 transition ${
                plan.highlight
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              {plan.button.label} <span aria-hidden>→</span>
            </a>
            <ul className="space-y-2 text-sm text-gray-800 flex-1">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✔️</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPlansSection;