const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Most Popular", "New", "Trending"];
  return (
    <div className="flex justify-start items-center my-6  ">
      <div className="inline-flex items-center gap-2 md:rounded-2xl md:bg-gray-200 p-2 md:shadow-inner md:px-4 px-6 ">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              className={[
                "md:px-5 px-3 py-2 text-sm font-medium  rounded-xl transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
                isActive
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-gray-700 hover:bg-white hover:shadow-sm",
              ].join(" ")}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabsSection;
