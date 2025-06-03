import React from "react";
import BrandLogo from "../icons/BrandLogo";
import ShoppingCard from "../icons/ShoppingCard";
import UserProfile from "../icons/UserProfile";

const HoverPanel = ({image}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-[90vh] bg-gray-50 transition-opacity duration-500 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible z-40">
      <div className="relative h-1/6">
        <div className="relative text-gray-100 font-inter font-semibold leading-3 text-sm flex items-center justify-center w-full">
          {/* Brand logo */}
          <div className="absolute z-50 left-10 -top-2">
            <BrandLogo className={"text-gray-800 fill-current size-32"} />
          </div>
          {/* main menu of navbar */}
          <div className="flex items-center mt-11 w-full justify-center space-x-8">
            {/* drone devices */}
            <div className="relative z-50 text-gray-800 before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
              DRONE
            </div>

            {/* EARBUDS devices */}
            <div className="relative z-50 text-gray-800 before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
              EARBUDS
            </div>

            {/* NEWS devices */}
            <div className="relative z-50 text-gray-800 before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
              NEWS
            </div>

            {/* VISION devices */}
            <div className="relative z-50 text-gray-800 before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
              VISION
            </div>
            {/* icons */}
            <div className="flex items-center gap-3">
              {/* shoping card */}
              <div>
                <ShoppingCard className={"text-gray-800 fill-current size-5"} />
              </div>
              {/* user profile */}
              <div>
                <UserProfile className={"text-gray-800 fill-current size-5"} />
              </div>
            </div>
          </div>
          {/* language changer */}
          <div className="absolute right-10 top-9 bg-gray-800 rounded-full w-9 h-9 flex items-center justify-center">
            <p className="text-gray-100 font-semibold text-sm">EG</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full h-5/6 px-12 py-10 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="w-1/4 h-full flex items-start justify-start">
          <img
            src={image}
            alt="Earbuds"
            className="w-full h-full object-contain rounded-md shadow-md"
          />
        </div>

        {/* Earbuds Column 1 */}
        <div className="w-1/4 px-10 space-y-6 border-r">
          <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">
            Earbuds
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:underline">
              AERO BUDS -{" "}
              <span className="text-xs text-gray-500">Noise cancelling</span>
            </li>
            <li className="hover:underline">
              NOVA TUNE -{" "}
              <span className="text-xs text-gray-500">Deep bass</span>
            </li>
            <li className="hover:underline">
              SONIQ FLEX -{" "}
              <span className="text-xs text-gray-500">Ergonomic design</span>
            </li>
            <li className="hover:underline">
              ECHO PODS -{" "}
              <span className="text-xs text-gray-500">Crystal clear calls</span>
            </li>
            <li className="hover:underline">
              PULSE Z -{" "}
              <span className="text-xs text-gray-500">Compact & powerful</span>
            </li>
          </ul>
        </div>

        {/* Earbuds Column 2 */}
        <div className="w-1/4 px-10 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">
            Earbuds
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:underline">
              AERO BUDS -{" "}
              <span className="text-xs text-gray-500">Noise cancelling</span>
            </li>
            <li className="hover:underline">
              NOVA TUNE -{" "}
              <span className="text-xs text-gray-500">Deep bass</span>
            </li>
            <li className="hover:underline">
              SONIQ FLEX -{" "}
              <span className="text-xs text-gray-500">Ergonomic design</span>
            </li>
            <li className="hover:underline">
              ECHO PODS -{" "}
              <span className="text-xs text-gray-500">Crystal clear calls</span>
            </li>
            <li className="hover:underline">
              PULSE Z -{" "}
              <span className="text-xs text-gray-500">Compact & powerful</span>
            </li>
          </ul>
        </div>

        {/* Optional: Right side spacer or promo */}
        <div className="w-1/4 flex items-center justify-center text-center text-gray-400 text-sm">
          {/* Leave empty or add text/banner later */}
        </div>
      </div>
    </div>
  );
};

export default HoverPanel;
