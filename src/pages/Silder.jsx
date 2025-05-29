import React from "react";
import PaginationBar from "../components/slider-componet/PaginationBar";
import SliderHeader from "../components/slider-componet/SliderHeader";
import MainSlider from "../components/slider-componet/MainSlider";

const Silder = () => {
  return (
    <div className="w-screen h-screen">
        <SliderHeader/>
        <div className="w-full h-6/7 flex overflow-x-auto overflow-y-hidden">
            <PaginationBar/>
            <MainSlider/>
        </div>
    </div>
  );
};

export default Silder;
