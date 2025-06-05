import React from "react";

const DroneShowcase = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-4 md:px-12 font-inter">
      <div className="max-w-7xl mx-auto bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-12 rounded-xl shadow-lg">
        
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
            Home <span className="mx-1">·</span> Drone Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            High-Performance Drones
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Explore our advanced drone collection built with{" "}
            <span className="font-semibold text-gray-800">
              cutting-edge technology and precision engineering
            </span>
            , delivering exceptional durability, flight control, and an
            unmatched aerial experience.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="https://images.prismic.io/ubac/ZqtLOh5LeNNTxtch_22.jpg?auto=format%2Ccompress&rect=0%2C0%2C3400%2C2000&w=1920&q=80"
            alt="Drone showcasing aerial capabilities"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DroneShowcase;
