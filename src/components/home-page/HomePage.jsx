const HomePage = () => {
  return (
    <>
      {/* Center Hero Tagline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-inter px-4">
        <p className="text-sm sm:text-base tracking-[0.3em] font-semibold uppercase text-gray-200 mb-4">
          High-Fly Precision
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md">
          PULSEFLY TECH-GEAR<span className="text-green-300">®</span>
        </h1>
      </div>

      {/* Bottom Nav Buttons */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-16 text-white font-inter">
        <button className="relative text-lg md:text-2xl font-medium text-white px-5 py-2 group">
          EARBUDS
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform group-hover:scale-x-0" />
        </button>
        <button className="relative text-lg md:text-2xl font-medium text-white px-5 py-2 group">
          DRONE
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 transform group-hover:scale-x-0" />
        </button>
      </div>
    </>
  );
};

export default HomePage;
