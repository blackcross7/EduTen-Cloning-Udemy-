const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Most Popular", "New", "Trending"];
  return (
    <div className="flex justify-start items-center my-6 md:my-3  mx-4 ">
      <div className="inline-flex items-center  md:rounded-2xl p-2 gap-4  md:px-4 px-6 ">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              className={[
                "md:px-5 px-3 py-2 text-sm font-medium  rounded-2xl transition-all duration-200 border border-gray-400",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
                isActive
                  ? "bg-[#5624d0] text-white shadow-md scale-105"
                  : " bg-white text-black  hover:shadow-sm",
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
