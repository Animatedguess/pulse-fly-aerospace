import React from "react";

const Certificate = () => {
  return (
    <div
      id="our-certifications"
      className="flex items-center justify-center py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="bg-white w-[90vw] max-w-6xl px-10 py-20 rounded-3xl shadow-xl flex flex-col items-center space-y-10">
        {/* Section Heading */}
        <h3 className="text-4xl md:text-5xl font-inter font-extrabold text-gray-800 tracking-tight text-center">
          Our Certifications
        </h3>

        {/* Certificate Card */}
        <div className="relative w-full max-w-xl bg-gray-50 border border-gray-200 rounded-2xl shadow-md flex flex-col items-center px-6 py-12 transition-transform hover:scale-[1.02] duration-300 ease-in-out">
          {/* Certificate Logo */}
          <div className="w-1/2 flex items-center justify-center mb-6">
            <img
              src="assets/vision/certificateLogo.png"
              alt="Official certification logo from Vision"
              loading="lazy"
              className="object-contain scale-175"
            />
          </div>

          {/* Download Button */}
          <a
            href="assets/vision/certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download certificate"
            className="relative group mt-4 inline-block"
          >
            <span className="px-8 py-3 font-inter font-semibold text-lg tracking-wide bg-gray-800 text-white border-2 border-gray-800 rounded-full transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-gray-900 group-hover:shadow-md">
              Download Certificate
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
