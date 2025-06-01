import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-full font-inter">
      <div className="h-full">
        {/* Gallery 1 */}
        <div className="relative w-full h-1/4 flex">
          <img
            src="assets/imageEar2.png"
            alt="Earbud 2"
            className="w-1/2 h-full object-cover"
          />
          <img
            src="assets/imageEar3.png"
            alt="Earbud 3"
            className="w-1/2 h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
              EARBUDS
            </h1>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <button className="relative text-lg md:text-xl font-medium text-white px-5 py-2 group">
              Explore
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform origin-left group-hover:scale-x-0" />
            </button>
          </div>
        </div>

        {/* Gallery 2 */}
        <div className="relative w-full h-1/4 flex">
          <img
            src="assets/imageEar1.png"
            alt="Earbud 1"
            className="w-1/2 h-full object-cover"
          />
          <img
            src="assets/imageDro1.png"
            alt="Drone 1"
            className="w-1/2 h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md">
              NEWS
            </h1>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex space-x-10">
            <button className="relative text-lg md:text-xl font-medium text-white px-4 py-2 group">
              Earbuds
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform origin-left group-hover:scale-x-0" />
            </button>
            <button className="relative text-lg md:text-xl font-medium text-white px-4 py-2 group">
              Drone
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform origin-left group-hover:scale-x-0" />
            </button>
          </div>
        </div>

        {/* Gallery 3 */}
        <div className="relative w-full h-1/4 overflow-hidden">
          <img
            src="/assets/image1.png"
            alt="PulseFly Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-xl">
              MOBILE ACCESSORIES
            </h1>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <button className="relative text-lg md:text-xl font-semibold text-white px-5 py-2 group">
              Discover
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform group-hover:scale-x-0" />
            </button>
          </div>
        </div>

        {/* Gallery 4 */}
        <div className="relative w-full h-1/4 overflow-hidden">
          <img
            src="assets/discover.jpg"
            alt="Discover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-xl">
              PULSEFLY AEROSPACE
              <br />
              VISION
            </h1>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <button className="relative text-lg md:text-xl font-semibold text-white px-5 py-2 group">
              Discover
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform group-hover:scale-x-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
