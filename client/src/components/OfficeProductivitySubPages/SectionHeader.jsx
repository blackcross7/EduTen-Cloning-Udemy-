const SectionHeader = ({ tabs, activeTab, onTabChange }) => {
  console.log(tabs);

  return (
    <div className="mb-4">
      <div className="flex gap-6 border-b mt-4">
        {tabs?.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionHeader;
