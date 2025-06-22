import React from "react";
import PlusIcon from "../icons/footer-icons/PlusIcon";

const Introduction = () => {
  return (
    <div className="p-24 gap-20 flex flex-col">
      <div className="flex justify-center w-full">
        <div className="pt-24 pl-16 h-[115vh] w-1/2">
          <img
            src="./assets/vision/introduction.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 space-y-16 flex flex-col items-center">
          <div className="flex justify-center h-auto">
            <img
              src="./assets/vision/treeImage.png"
              alt=""
              className="object-cover w-1/3"
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-inter text-4xl font-bold text-gray-800 leading-11">
              INSPIRED BY INNOVATION, <br />
              DESIGNED FOR THE SKIES.
            </h1>
            <div className="space-y-6">
              <p className="font-normal text-base text-gray-500 font-inter leading-6 max-w-md">
                Since its formation, Pulsefly Aerospace has been dedicated to
                crafting advanced drone technology that redefines air mobility
                and precision performance.
              </p>
              <p className="font-normal text-base text-gray-500 font-inter leading-6 max-w-md">
                The name Pulsefly symbolizes agility and intelligence in aerial
                systems, reflecting our vision to harmonize innovation with
                sustainable engineering. At Pulsefly, we create solutions for a
                smarter, cleaner, and more connected sky.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-1/2 flex flex-col items-center space-y-6">
          <p className="font-normal text-base text-gray-500 font-inter leading-6 max-w-md">
            All Pulsefly products are engineered and assembled in high-tech
            facilities across India, using cutting-edge practices to ensure
            sustainability and performance excellence.
          </p>
          <p className="font-normal text-base text-gray-500 font-inter leading-6 max-w-md">
            Our drones are crafted with advanced composite materials and
            recyclable components, minimizing environmental impact while
            delivering top-tier performance. It's our promise to innovate
            responsibly and lead by example.
          </p>
        </div>
        <div className="w-1/2 space-y-6">
          <div className="w-full flex flex-col items-center">
            <p className="font-medium text-xl text-gray-800 font-inter leading-6 max-w-md">
              Because action speaks louder than claims, we dedicate a portion of
              our earnings to programs that support environmental restoration
              and STEM education.
            </p>
          </div>
          <div className="flex items-center gap-1 text-base pl-[7vw] text-gray-800 font-medium font-inter leading-6 cursor-pointer group transition">
            <PlusIcon className="h-4 w-4 text-gray-800 group-hover:rotate-180 transition-transform duration-300 fill-current" />
            <span className="">Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
