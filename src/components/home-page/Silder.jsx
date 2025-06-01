import { useRef } from "react";
import PaginationBar from "../slider-componet/PaginationBar";
import SliderHeader from "../slider-componet/SliderHeader";
import MainSlider from "../slider-componet/MainSlider";

const Silder = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen h-screen flex">
      <PaginationBar onScrollLeft={scrollLeft} onScrollRight={scrollRight}/>
      <div className="w-12/13 h-full flex flex-col overflow-x-auto overflow-y-hidden">
        <SliderHeader />
        <MainSlider sliderRef={sliderRef}/>
      </div>
    </div>
  );
};

export default Silder;
