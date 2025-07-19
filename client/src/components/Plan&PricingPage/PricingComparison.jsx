import React from "react";
import { Check, X } from "lucide-react";
import { comparisonData } from "./pricingData";

const PricingComparison = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Compare plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Personal</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Team</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-6 text-sm text-gray-700 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.personal === 'boolean' ? (
                      row.personal ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700">{row.personal}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.team === 'boolean' ? (
                      row.team ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700">{row.team}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700">{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison; 