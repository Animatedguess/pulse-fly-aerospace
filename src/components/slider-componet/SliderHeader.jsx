import React, { useState } from "react";

const SliderHeader = () => {
  const [selected, setSelected] = useState("earpods");

  return (
    <div className="relative w-full h-1/7 before:content-[''] before:absolute before:bg-gray-800 before:h-1 before:w-5/6 before:left-0 before:bottom-0 before:opacity-50 before:rounded-full">
      {/* Tab Buttons */}
      <div className="absolute flex items-center bottom-4 left-0 z-10">
        <button
          onClick={() => setSelected("earpods")}
          className={`bg-gray-800/10 backdrop-blur-md rounded-l-full px-16 py-2 before:bg-gray-800 before:content-[''] before:absolute before:w-full before:h-1 before:-bottom-4 before:left-0 before:rounded-l-full before:z-10  before:transform before:transition-transform before:duration-400 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 ${
            selected === "earpods" ? "before:scale-x-100" : ""
          }`}
        >
          <p
            className={`text-2xl font-inter font-semibold tracking-wide hover:text-gray-800 ${
              selected === "earpods"
                ? "text-gray-800 opacity-100"
                : "text-gray-800/60"
            }`}
          >
            Earpods
          </p>
        </button>
        <button
          onClick={() => setSelected("drones")}
          className={`bg-gray-800/10 backdrop-blur-md rounded-r-full px-16 py-2 before:bg-gray-800 before:content-[''] before:absolute before:w-full before:h-1 before:-bottom-4 before:left-0 before:rounded-r-full before:z-10  before:transform before:transition-transform before:duration-400 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 ${
            selected === "drones" ? "before:scale-x-100" : ""
          }`}
        >
          <p
            className={`text-2xl font-inter font-semibold tracking-wide hover:text-gray-800 ${
              selected === "drones"
                ? "text-gray-800 opacity-100"
                : "text-gray-800/60"
            }`}
          >
            Drones
          </p>
        </button>
      </div>
    </div>
  );
};

export default SliderHeader;
