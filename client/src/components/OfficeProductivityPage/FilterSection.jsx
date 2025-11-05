import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FilterSection = () => {
  // Directly filter sidebar show karne ke liye default true
  const [showFilters, setShowFilters] = useState(true);
  const [showDurationMore, setShowDurationMore] = useState(false);
  const [showLangsMore, setShowLangsMore] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10">
        {showFilters && (
          <>
            <aside className="fixed top-0 left-0 z-50 h-full w-[85vw] max-w-xs xl:static xl:block lg:w-1/3 lg:min-w-[220px] bg-white shadow-2xl p-5 overflow-y-auto transition-transform duration-300 ease-in-out rounded-tr-xl rounded-br-xl">
              <button
                className="xl:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4 xl:hidden">Filters</h3>

              {showFilters && (
                <>
                  {/* Mobile Backdrop */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setShowFilters(false)}
                  ></div>

                  {/* Sidebar */}
                  <div
                    className={`
                              fixed z-50 top-0 left-0 h-full w-72 bg-white border-r shadow-lg
                              flex flex-col
                              transition-transform duration-300
                              ${
                                showFilters
                                  ? "translate-x-0"
                                  : "-translate-x-full"
                              }
                              md:static md:z-auto md:h-auto md:w-auto md:border md:rounded-lg md:p-4 md:shadow-none md:translate-x-0
                            `}
                  >
                    {/* Header + Close (Mobile) */}
                    <div className="flex justify-between items-center p-4 pb-0 md:hidden">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-600 text-xl font-bold"
                      >
                        &times;
                      </button>
                    </div>

                    {/* Scrollable Filter Content */}
                    <div className="flex-1 overflow-y-auto p-4 pt-2 md:p-0 md:overflow-visible">
                      <h3 className="text-sm font-semibold mb-2">Ratings</h3>
                      {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                        <div
                          key={rating}
                          className="flex items-center gap-2 mb-2"
                        >
                          <input type="radio" name="rating" />
                          <span className="flex items-center text-sm">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`text-yellow-400 ${
                                  i < Math.round(rating)
                                    ? "opacity-100"
                                    : "opacity-30"
                                }`}
                              />
                            ))}
                            &nbsp;{rating} & up
                          </span>
                        </div>
                      ))}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Video Duration
                      </h3>
                      {[
                        "0-1 Hour",
                        "1-3 Hours",
                        "3-6 Hours",
                        "6-17 Hours",
                        "17+ Hours",
                      ]
                        .slice(0, showDurationMore ? 5 : 3)
                        .map((label, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {label}
                          </div>
                        ))}
                      <button
                        onClick={() => setShowDurationMore(!showDurationMore)}
                        className="text-purple-600 text-xs font-semibold mt-2"
                      >
                        {showDurationMore ? "Show less" : "Show more"}
                      </button>

                      <h3 className="text-sm font-semibold mt-6 mb-2">Level</h3>
                      {["All Levels", "Beginner", "Intermediate", "Expert"].map(
                        (level, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {level}
                          </div>
                        )
                      )}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Language
                      </h3>
                      {/* {languages
                        .slice(0, showLangsMore ? languages.length : 5)
                        .map((lang, index) => (
                          <div key={index} className="mb-1 text-sm">
                            <input type="checkbox" className="mr-2" /> {lang}
                          </div>
                        ))} */}
                      <button
                        onClick={() => setShowLangsMore(!showLangsMore)}
                        className="text-purple-600 text-xs font-semibold mt-2"
                      >
                        {showLangsMore ? "Show less" : "Show more"}
                      </button>

                      <h3 className="text-sm font-semibold mt-6 mb-2">Price</h3>
                      {["Paid", "Free"].map((price, index) => (
                        <div key={index} className="mb-1 text-sm">
                          <input type="checkbox" className="mr-2" /> {price}
                        </div>
                      ))}

                      <h3 className="text-sm font-semibold mt-6 mb-2">
                        Subtitles
                      </h3>
                      <div className="text-sm">
                        <input type="checkbox" className="mr-2" /> Available
                      </div>
                    </div>

                    {/* Footer (Mobile) */}
                    <div className="p-4 border-t md:hidden">
                      <button
                        onClick={() => setShowFilters(false)}
                        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 text-sm font-semibold"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </>
              )}
            </aside>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
              onClick={() => setShowFilters(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default FilterSection;
