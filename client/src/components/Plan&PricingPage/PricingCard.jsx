import React from "react";
import { Check, X, Users, Building, User } from "lucide-react";

const PricingCard = ({ plan, billingCycle, isSelected, onSelect }) => {
  const getIcon = (planId) => {
    switch (planId) {
      case 'personal':
        return <User className="w-6 h-6" />;
      case 'team':
        return <Users className="w-6 h-6" />;
      case 'enterprise':
        return <Building className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={`relative rounded-2xl border-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
        plan.highlight
          ? "border-purple-600 shadow-2xl bg-white"
          : "border-gray-200 bg-white hover:border-purple-300"
      } flex flex-col p-8`}
      onClick={() => onSelect && onSelect(plan.id)}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className="text-purple-600">{getIcon(plan.id)}</div>
        <div>
          <h3 className="font-bold text-xl text-gray-900">{plan.name}</h3>
          <p className="text-gray-500 text-sm">{plan.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <Users className="w-4 h-4" />
        <span>{plan.users}</span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">
            {billingCycle === 'monthly' ? plan.monthlyPriceText : plan.annualPriceText}
          </span>
          {billingCycle === 'monthly' && plan.monthlyPrice && (
            <span className="text-gray-500">/month</span>
          )}
          {billingCycle === 'annual' && plan.annualPrice && (
            <span className="text-gray-500">/year</span>
          )}
        </div>
        {billingCycle === 'annual' && plan.savings && (
          <div className="text-green-600 text-sm font-semibold mt-1">{plan.savings}</div>
        )}
      </div>

      {plan.note && (
        <p className="text-xs text-gray-500 mb-6">{plan.note}</p>
      )}

      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold mb-6 transition ${
          plan.highlight
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
        }`}
      >
        {plan.button.label}
      </button>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">What's included:</h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.notIncluded.length > 0 && (
          <>
            <h4 className="font-semibold text-gray-900 mt-6">Not included:</h4>
            <ul className="space-y-3">
              {plan.notIncluded.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PricingCard; 