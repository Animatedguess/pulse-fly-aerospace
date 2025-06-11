import React from "react";

const impactData = [
  {
    title: "Carbon Impact",
    image: "/assets/impact/impact-carbon.png", // Update with actual path
    description: (
      <>
        Our drones are designed with sustainability in mind. For example, our flagship model has a carbon footprint of only <strong>6.1 kg CO₂e</strong>, which is 66% lower than the industry average (17 kg CO₂e), as validated by independent assessment.
        <br />
        <a href="/product/vortex-x2" className="text-blue-600 hover:underline mt-2 inline-block">
          Learn more about Vortex-X2
        </a>
      </>
    ),
  },
  {
    title: "Recyclability",
    image: "/assets/impact/impact-recyclable.png", // Update with actual path
    description: (
      <>
        All components of our drones are <strong>recyclable</strong> and partially reintegrated into production. Remaining parts are reused in other industries such as insulation or e-waste recycling.
        <br />
        <span className="block mt-2">
          Contact us at <a href="mailto:recycle@yourcompany.com" className="text-blue-600 hover:underline">recycle@yourcompany.com</a> to return your end-of-life drones.
        </span>
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
          className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full px-4"
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <img src={image} alt={title} className="object-cover w-full h-full" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4 px-6">
              <div className="text-black text-2xl font-semibold">
                + {title}
              </div>
            </div>
          </div>

          <div className="text-left text-gray-600 text-lg max-w-lg">
            {description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactOnMarket;
