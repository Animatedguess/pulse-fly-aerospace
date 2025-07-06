import { useState } from "react";
import PlusIcon from "../icons/footer-icons/PlusIcon";

const impactData = [
  {
    title: "Carbon Impact",
    image: "/assets/impact/impact-carbon.png",
    description: (
      <>
        At Pulsefly, we design drones with a lighter environmental footprint.
        Our flagship model emits just <strong>6.1 kg CO₂e</strong> — nearly
        <strong>66% less</strong> than the industry average of 17 kg CO₂e. This
        reduction is achieved through the use of lightweight biosourced
        materials, energy-efficient components, and optimized assembly
        processes. Our carbon footprint data is validated through independent
        third-party assessments to ensure transparency and trust.
      </>
    ),
  },
  {
    title: "Energy Efficiency",
    image: "/assets/impact/impact-recyclable.png",
    description: (
      <>
        Pulsefly drones are powered by{" "}
        <strong>high-efficiency battery systems</strong> that deliver extended
        flight time with <strong>30% less energy consumption</strong> compared
        to conventional models. Equipped with{" "}
        <strong>advanced power management circuits</strong> and{" "}
        <strong>smart flight algorithms</strong>, our drones minimize mid-air
        corrections and intelligently adapt to flight conditions — ensuring{" "}
        smoother, longer, and more sustainable missions every time.
      </>
    ),
  },
];

const ImpactOnMarket = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="impact-&-end-of-life"
      className="py-20 flex flex-col items-center space-y-16"
    >
      {/* Header */}
      <div className="text-start max-w-6xl space-y-4 px-8">
        <h2 className="text-5xl font-bold font-inter uppercase text-gray-800 leading-[58px]">
          Impact & End of Life
        </h2>
        <p className="text-2xl font-normal leading-7 font-inter text-neutral-500">
          Every Pulsefly drone is engineered with sustainability at its core —
          from materials and manufacturing to recyclability. Discover how we're
          reducing impact at every stage of the product lifecycle.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative h-[33vmax] w-full flex flex-col justify-center px-[16vmax] space-y-4">
        {/* Options */}
        <div className="flex flex-col space-y-6 z-10">
          {impactData.map(({ title }, index) => (
            <div
              key={index}
              className="group flex flex-col items-start cursor-pointer transition-transform duration-200 hover:scale-[1.015]"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-3 text-4xl font-normal text-gray-800 leading-tight font-inter">
                <div
                  className={`relative h-12 w-12 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-16 before:h-16 before:rounded-full before:z-0 before:transition-transform before:duration-500 ${
                    activeIndex === index
                      ? "before:scale-100 before:bg-gray-900"
                      : "before:scale-0 before:bg-gray-900"
                  }`}
                >
                  <PlusIcon
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 fill-current transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-gray-50"
                        : "text-gray-900 group-hover:text-gray-50"
                    }`}
                  />
                </div>
                {title}
              </div>
            </div>
          ))}
        </div>

        {/* Active Description */}
        <div className="absolute left-0 top-0 w-full -z-10 transition-opacity duration-500">
          <div className="flex flex-col lg:flex-row justify-center gap-12 w-full">
            <div className="relative w-[38vmax] h-[38vmax] rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <img
                src={impactData[activeIndex].image}
                alt={impactData[activeIndex].title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-neutral-500 max-w-sm text-base font-normal font-inter leading-7 text-center lg:text-left py-[9vmax]">
              {impactData[activeIndex].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactOnMarket;
