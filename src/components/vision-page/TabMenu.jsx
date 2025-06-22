import { useState } from "react";

const tabs = [
  "Actions",
  "Transparency",
  "Our certifications",
  "Impact & end of life",
  "Review",
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("Review");

  return (
    <div className="flex flex-wrap w-full justify-around py-8 border-b border-gray-200 bg-white">
      {tabs.map((tab) => (
        <a
          href={`#${tab.replace(/\s+/g, "-").toLowerCase()}`}
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative text-sm md:text-base font-inter transition-colors duration-200 font-normal font-inter before:content-[''] before:absolute before:bg-gray-800/60 before:left-0 before:-bottom-0.5 before:h-0.5 before:w-full before:transition-transform before:duration-300 ${
            activeTab === tab ? "before:scale-x-80" : "before:scale-x-0 hover:before:scale-x-80"
          }`}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default TabMenu;
