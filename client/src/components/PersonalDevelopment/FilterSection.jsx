import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterSection = () => {
  const [setShowFilters, showFilters] = useState(false);
  const [setSortVisible, sortVisible] = useState(false);
  return (
    <>
      {/* Filters + Sort buttons */}
      <div className="flex items-center gap-4 mt-4 flex-wrap pb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 border border-gray-600 font-semibold px-4 py-2 rounded text-sm hover:bg-gray-100 transition"
        >
          <FaFilter /> Filter
        </button>

        <div className="relative inline-block text-left">
          <button
            onClick={() => setSortVisible(!sortVisible)}
            className="border border-gray-600 px-4 py-2 rounded font-semibold text-sm"
          >
            Sort by: Most Popular
          </button>
          {sortVisible && (
            <div className="absolute mt-1 w-40 bg-white border rounded shadow z-10">
              <div className="py-1 text-sm text-gray-900">
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Most Popular
                </div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Highest Rated
                </div>
                <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  Newest
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
