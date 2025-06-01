import React from "react";
import RightArrow from "../icons/slider-icons/RightArrow";
import LeftArrow from "../icons/slider-icons/LeftArrow";

const PaginationBar = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="relative w-1/13 h-full flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 p-2 bg-white/70 backdrop-blur-md rounded-xl shadow-lg">
        <button
          aria-label="Scroll Right"
          onClick={onScrollRight}
          className="group p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all duration-200"
        >
          <RightArrow className="size-5 text-gray-800 group-hover:scale-110 transition-transform" />
        </button>
        <button
          aria-label="Scroll Left"
          onClick={onScrollLeft}
          className="group p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all duration-200"
        >
          <LeftArrow className="size-5 text-gray-800 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
