import React from 'react'

const SmallCard = () => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src="/assets/chat.png" // Replace with actual image path
        alt="TERRA-E VERT ARCTIC SNEAKERS"
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-sm text-gray-500">Recycled wool</h3>
        <h2 className="text-lg font-semibold text-gray-900">
          TERRA-E VERT ARCTIC SNEAKERS
        </h2>
        <p className="text-lg font-semibold mt-2">139.00€</p>
      </div>
    </div>
  )
}

export default SmallCard
