import { useState } from "react";
import Order from "../components/userprofile-page/Order";
import Address from "../components/userprofile-page/Address";
import Info from "../components/userprofile-page/Info";

const tabs = [
  { key: "order", label: "My orders" },
  { key: "address", label: "My addresses" },
  { key: "info", label: "My informations" },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("order");

  const renderContent = () => {
    switch (activeTab) {
      case "order":
        return <Order/>;
      case "address":
        return <Address/>;
      case "info":
        return <Info/>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full text-gray-800 bg-gray-100 flex flex-col md:flex-row justify-center py-16 px-4 md:px-12">
      {/* Sidebar */}
      <div className="flex flex-col items-center gap-12 h-fit bg-gray-50 shadow-lg rounded-lg p-20">
        <div className="flex flex-col w-full text-3xl font-inter">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full text-left py-1 pr-8 border-b leading-loose border-gray-300 transition-colors font-medium ${
                activeTab === key
                  ? "text-gray-900 border-gray-800 cursor-default border-b-2"
                  : "text-gray-800/40 cursor-pointer"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button className="w-full bg-gray-800 text-white py-4 rounded-md hover:bg-gray-700 transition">
          Log out
        </button>
      </div>

      {/* Content */}
      <div className="mt-10 md:mt-0 md:ml-12 bg-gray-50 rounded-lg shadow-md p-8 w-full max-w-2xl text-center space-y-4 md:text-left">
		    {/* welcome message */}
		    <h2 className="text-gray-800 font-medium text-4xl font-inter leading-tight">Bonjour , Kailash</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
