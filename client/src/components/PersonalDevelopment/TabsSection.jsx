import React from "react";

const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Most Popular", "New", "Trending"];

  return (
    <div className="tabs-section">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsSection;
