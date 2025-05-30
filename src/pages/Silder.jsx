import { useRef } from "react";
import PaginationBar from "../components/slider-componet/PaginationBar";
import SliderHeader from "../components/slider-componet/SliderHeader";
import MainSlider from "../components/slider-componet/MainSlider";

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
    <div className="w-screen h-screen">
      <SliderHeader />
      <div className="w-full h-6/7 flex overflow-x-auto overflow-y-hidden">
        <PaginationBar onScrollLeft={scrollLeft} onScrollRight={scrollRight}/>
        <MainSlider sliderRef={sliderRef}/>
      </div>
    </div>
  );
};

export default Silder;
