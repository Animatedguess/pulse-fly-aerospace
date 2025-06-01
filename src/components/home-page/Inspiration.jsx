import React from 'react';

const Inspiration = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-white to-gray-100">
      <h2 className="font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-snug mb-6 drop-shadow-sm">
        "ENGINEERED BY INNOVATION,<br className="hidden sm:block" />
        INSPIRED BY FLIGHT"
      </h2>
      
      <p className="text-base sm:text-lg md:text-xl font-inter font-medium text-gray-700 max-w-3xl leading-relaxed">
        At <span className="font-semibold text-gray-900">PulseFly</span>, we fuse advanced technology with elegant design —
        crafting drones, AirPods, and mobile accessories that elevate everyday experiences. Every detail reflects our
        passion for performance, sustainability, and futuristic aesthetics.
      </p>

      <button className="mt-10 px-6 py-3 bg-gray-900 text-white text-sm sm:text-base font-semibold tracking-wide rounded-full shadow-md hover:bg-gray-800 transition-all duration-300">
        Discover More
      </button>
    </div>
  );
};

export default Inspiration;
