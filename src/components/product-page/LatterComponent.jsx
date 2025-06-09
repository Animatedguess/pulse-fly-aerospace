import { useState } from "react";

const LatterComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white font-inter">
      {/* Letter heading */}
      <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
        ECO-RESPONSIBLE WOMEN'S SHOES
      </h3>

      {/* Subject of letter */}
      <p className="mt-4 max-w-4xl text-base font-semibold text-gray-800 text-left">
        Since its creation, Ubac has been committed to designing eco-responsible
        sneakers made of natural and recycled materials.
      </p>

      {/* Letter content (toggle section) */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          show ? "max-h-[5000px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
        aria-expanded={show}
      >
        <div className="max-w-4xl text-gray-700 text-base space-y-4 text-left font-normal">
          <p>
            In an ethical approach, concerned about the environment and human
            well-being, we have our shoes made in excellent workshops in
            Portugal, with recycled wool in France, hemp in the Kana collection,
            and other materials with low environmental impact. Here you will
            find ethical sneakers for women. Ubac also offers a range of
            eco-responsible sneakers for men.
          </p>
          <p>
            The environment of fashion and footwear is often black or full of
            brands doing greenwashing at indecent prices...
          </p>
          {/* Other <p> blocks remain the same */}
          <p>
            If you're looking for ethical and responsible footwear brands,
            you've come to the right place.
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShow(!show)}
        aria-label={show ? "Collapse letter content" : "Expand letter content"}
        className="mt-10 w-12 h-12 rounded-full border border-black flex items-center justify-center text-2xl hover:bg-black hover:text-white transition-all duration-300"
      >
        {show ? "−" : "+"}
      </button>
    </div>
  );
};

export default LatterComponent;
