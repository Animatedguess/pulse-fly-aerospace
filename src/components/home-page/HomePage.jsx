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
        <button className="text-xl sm:text-2xl font-medium px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
          EARPODS
        </button>
        <button className="text-xl sm:text-2xl font-medium px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
          DRONE
        </button>
      </div>
    </>
  );
};

export default HomePage;
