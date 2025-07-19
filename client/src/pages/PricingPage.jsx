import React, { useState } from "react";
import PricingHero from "../components/Plan&PricingPage/PricingHero";
import PricingCard from "../components/Plan&PricingPage/PricingCard";
import PricingComparison from "../components/Plan&PricingPage/PricingComparison";
import PricingFAQ from "../components/Plan&PricingPage/PricingFAQ";
import PricingCTA from "../components/Plan&PricingPage/PricingCTA";
import { plans } from "../components/Plan&PricingPage/pricingData";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("personal");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PricingHero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                isSelected={selectedPlan === plan.id}
                onSelect={setSelectedPlan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <PricingComparison />

      {/* FAQ Section */}
      <PricingFAQ />

      {/* CTA Section */}
      <PricingCTA />
    </div>
  );
};

export default PricingPage; 