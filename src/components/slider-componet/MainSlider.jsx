import React, { useRef } from "react";
import SlideItem from "./SlideItem";

const MainSlider = ({ sliderRef }) => {
  return (
    <div
      ref={sliderRef}
      className="flex-1 overflow-x-auto scrollbar-default scroll-smooth"
    >
      <div className="flex space-x-2 w-max h-full py-4">
        {[
          { title: "AirPods Pro", price: "9,999" },
          { title: "Drone X", price: "24,499"},
          { title: "PulseFly Mini", price: "2,499"},
          { title: "Sky Drone", price: "14,999"},
          { title: "Bass Pods", price: "3,299"},
          { title: "HoverCam", price: "18,999"},
        ].map((item, idx) => (
          <div
            key={idx}
            className={`w-[33vw] h-full flex items-center justify-center text-white text-2xl font-bold`}
          >
            <SlideItem title={item.title} price={item.price} image={"/assets/resized.png"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
