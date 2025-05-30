import React from "react";

const SlideItem = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4 bg-green-100">
      {/* Image */}
      <div className="w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
      {/* Title & Price */}
      <div className="mt-4 text-center">
        <h4 className="text-lg font-semibold text-gray-800">
          {title || "Item Title"}
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          {price ? `₹${price}` : "₹0.00"}
        </p>
      </div>
    </div>
  );
};

export default SlideItem;
