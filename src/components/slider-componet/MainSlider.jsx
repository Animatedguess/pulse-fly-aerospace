const MainSlider = () => {
  return (
    <div className="flex-1 overflow-x-auto">
      <div className="flex space-x-2 w-max h-full px-4 py-4">
        {/* Example slide items */}
        <div className="w-[33vw] h-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 1
        </div>
        <div className="w-[33vw] h-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 2
        </div>
        <div className="w-[33vw] h-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 3
        </div>
        {/* Add more slides as needed */}
        <div className="w-[33vw] h-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 1
        </div>
        <div className="w-[33vw] h-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 2
        </div>
        <div className="w-[33vw] h-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          Slide 3
        </div>
      </div>
    </div>
  )
}

export default MainSlider
