import React from "react";

const impactData = [
  {
    title: "Carbon Impact",
    image: "/assets/impact/impact-carbon.png", // Update with actual path
    description: (
      <>
        Our drones are designed with sustainability in mind. For example, our flagship model has a carbon footprint of only <strong>6.1 kg CO₂e</strong>, which is 66% lower than the industry average (17 kg CO₂e), as validated by independent assessment.
      </>
    ),
  },
  {
    title: "Recyclability",
    image: "/assets/impact/impact-recyclable.png", // Update with actual path
    description: (
      <>
        All components of our drones are <strong>recyclable</strong> and partially reintegrated into production. Remaining parts are reused in other industries such as insulation or e-waste recycling.
      </>
    ),
  },
];

const ImpactOnMarket = () => {
  return (
    <section id="impact-&-end-of-life" className="py-20 bg-white flex flex-col items-center space-y-16">
      <div className="text-start max-w-6xl space-y-4">
        <h2 className="text-5xl font-bold font-inter uppercase text-gray-800">Impact & End of Life</h2>
        <p className="text-2xl text-gray-800/60 font-inter">
          From carbon footprint to recyclability, we consider every stage of our drones' life cycle. Here's how we're making a difference.
        </p>
      </div>

      {impactData.map(({ title, image, description }) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-9xl w-full px-4"
        >
          <div className="relative w-[38vmax] h-[38vmax] rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <img src={image} alt={title} className="object-cover w-full h-full" />
          </div>

          <div className="text-gray-500 max-w-sm text-base font-normal font-inter leading-7">
            {description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactOnMarket;
