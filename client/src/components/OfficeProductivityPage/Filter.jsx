import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Single filter section
const FilterSection = ({ title, options, selectedOption, onSelect }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-6 ">
      <div
        className="flex justify-between items-center mb-3 cursor-pointer text-lg font-semibold"
        onClick={() => setShow(!show)}
      >
        <h4>{title}</h4>
        {show ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {show &&
        options.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 mb-2 text-[15px] ${
              item.disabled ? "opacity-50" : ""
            }`}
          >
            <input
              type="radio"
              name={title} // ensures only one selection per filter
              checked={selectedOption === item.value}
              onChange={() => onSelect(item.value)}
              disabled={item.disabled}
              className="accent-purple-600"
            />
            <div className="flex items-center gap-1">
              <span className="text-gray-700 font-medium">{item.label}</span>

              {/* Optional: Ratings stars */}
              {title === "Ratings" && (
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const rating = parseFloat(item.label);
                    return (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={
                          rating >= star
                            ? "#facc15"
                            : rating >= star - 0.5
                            ? "url(#half-grad)"
                            : "#e5e7eb"
                        }
                        className="w-4 h-4"
                      >
                        <defs>
                          <linearGradient id="half-grad">
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                          </linearGradient>
                        </defs>
                        <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
                      </svg>
                    );
                  })}
                  <span className="text-gray-600 text-sm ml-1">& up</span>
                </div>
              )}
            </div>
            <span className="text-gray-500">{item.count}</span>
          </div>
        ))}

      {show && (
        <button className="mt-2 text-purple-600 font-medium text-[15px]">
          Show more
        </button>
      )}
      <hr className="mt-4 border-gray-300" />
    </div>
  );
};

// Main Filter component
const Filter = ({
  levels,
  topics,
  priceTypes,
  selectedLevel,
  setSelectedLevel,
  selectedTopic,
  setSelectedTopic,
  selectedPrice,
  setSelectedPrice,
  sortBy,
  setSortBy,
}) => {
  const filtersData = [
    {
      title: "Level",
      options: levels.map((lvl) => ({ label: lvl, value: lvl })),
    },
    {
      title: "Topic",
      options: topics.map((t) => ({ label: t, value: t })),
    },
    {
      title: "Price",
      options: priceTypes.map((p) => ({ label: p, value: p })),
    },
    {
      title: "Sort By",
      options: ["Most Popular", "Highest Rated", "Newest"].map((s) => ({
        label: s,
        value: s,
      })),
    },
  ];

  return (
    <aside className="w-full l bg-white shadow-2xl p-5 overflow-y-auto rounded-tr-xl rounded-br-xl">
      {filtersData.map((filter) => {
        const getSelectedSetter = () => {
          switch (filter.title) {
            case "Level":
              return setSelectedLevel;
            case "Topic":
              return setSelectedTopic;
            case "Price":
              return setSelectedPrice;
            case "Sort By":
              return setSortBy;
            default:
              return () => {};
          }
        };

        const selectedOption =
          filter.title === "Level"
            ? selectedLevel
            : filter.title === "Topic"
            ? selectedTopic
            : filter.title === "Price"
            ? selectedPrice
            : filter.title === "Sort By"
            ? sortBy
            : null;

        return (
          <FilterSection
            key={filter.title}
            title={filter.title}
            options={filter.options}
            selectedOption={selectedOption}
            onSelect={getSelectedSetter()}
          />
        );
      })}
    </aside>
  );
};

export default Filter;
