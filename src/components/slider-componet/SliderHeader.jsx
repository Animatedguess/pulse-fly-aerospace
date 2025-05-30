import React, { useState } from 'react';

const SliderHeader = () => {
  const [selected, setSelected] = useState('earpods');

  return (
    <div className="relative w-full h-1/7">
      {/* Tab Buttons */}
      <div className="absolute flex items-center bottom-4 left-1/13 z-10 bg-gray-800/10 backdrop-blur-md rounded-full px-4 py-2 shadow-md">
        <button onClick={() => setSelected('earpods')} className="px-14 transition-all duration-200">
          <p
            className={`text-2xl font-inter font-semibold tracking-wide ${
              selected === 'earpods' ? 'text-gray-800 opacity-100' : 'text-gray-800/60 hover:opacity-80'
            }`}
          >
            Earpods
          </p>
        </button>
        <button onClick={() => setSelected('drones')} className="px-14 transition-all duration-200">
          <p
            className={`text-2xl font-inter font-semibold tracking-wide ${
              selected === 'drones' ? 'text-gray-800 opacity-100' : 'text-gray-800/60 hover:opacity-80'
            }`}
          >
            Drones
          </p>
        </button>
      </div>

      {/* Base Line */}
      <div className="absolute bottom-0 left-1/13 w-5/6 h-1 bg-gray-800/20 z-0 rounded-full" />

      {/* Animated Highlight */}
      <div
        className={`absolute bottom-0 h-1 w-52 bg-gray-800 transition-all duration-300 ease-in-out z-10 rounded-full ${
          selected === 'earpods' ? 'left-1/13' : 'left-[22.5%]'
        }`}
      />
    </div>
  );
};

export default SliderHeader;
