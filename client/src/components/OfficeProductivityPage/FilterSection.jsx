import React from "react";

// Single filter section component
const FilterSection = ({ title, options, selectedOptions, onChange }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="flex flex-col gap-1">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.value)}
            onChange={() => onChange(option.value)}
            className="accent-purple-600"
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

// Main Sidebar Filters component
const SidebarFilters = ({
  levels = [],
  providers = [],
  prices = [],
  ratings = [],
  languages = [],
  selectedFilters = {},
  setSelectedFilters,
}) => {
  // Helper to handle checkbox changes
  const handleCheckboxChange = (category, value) => {
    const currentValues = selectedFilters[category] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setSelectedFilters({
      ...selectedFilters,
      [category]: updatedValues,
    });
  };

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4 mb-6 md:mb-0">
      <h2 className="font-bold text-lg mb-4">Filters</h2>

      <FilterSection
        title="Level"
        options={levels.map((lvl) => ({ label: lvl, value: lvl }))}
        selectedOptions={selectedFilters.level || []}
        onChange={(val) => handleCheckboxChange("level", val)}
      />

      <FilterSection
        title="Provider"
        options={providers.map((p) => ({ label: p, value: p }))}
        selectedOptions={selectedFilters.provider || []}
        onChange={(val) => handleCheckboxChange("provider", val)}
      />

      <FilterSection
        title="Price"
        options={prices.map((p) => ({ label: p, value: p }))}
        selectedOptions={selectedFilters.price || []}
        onChange={(val) => handleCheckboxChange("price", val)}
      />

      <FilterSection
        title="Rating"
        options={ratings.map((r) => ({ label: r, value: r }))}
        selectedOptions={selectedFilters.rating || []}
        onChange={(val) => handleCheckboxChange("rating", val)}
      />

      <FilterSection
        title="Language"
        options={languages.map((l) => ({ label: l, value: l }))}
        selectedOptions={selectedFilters.language || []}
        onChange={(val) => handleCheckboxChange("language", val)}
      />
    </aside>
  );
};

export default SidebarFilters;
