import React from "react";

const SlideItem = ({ image, title, price }) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Image */}
      <div className="w-full overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Title, Rating & Price */}
      <div className="px-5 py-4 text-start bg-white rounded-b-xl shadow-sm">
        {/* Title */}
        <h4 className="text-xl font-semibold text-gray-900 truncate">
          {title || "Item Title"}
        </h4>

        {/* Product Rating */}
        <div className="flex items-center text-gray-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-xs text-gray-500 ml-1">(120)</span>
        </div>

        {/* Price and Button in a horizontal row */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800 tracking-wide">
            {price ? `₹${price}` : "₹0.00"}
          </p>

          <button className="px-4 py-1.5 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
