const Review = () => {
  return (
    <div id="review" className="snap-normal px-4 md:px-32 lg:px-48 py-24 bg-white">
      <div className="flex flex-col items-center justify-center py-16 space-y-16 bg-gray-50/90 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-inter tracking-tight">
          Why Choose Pulsefly?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h4 className="text-3xl font-bold text-gray-900 font-inter">30H+</h4>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-sm text-gray-600 font-inter">
                Battery life (TWS-08 Earbuds)
              </p>
              <span className="w-5 h-5 flex items-center justify-center bg-black text-white text-xs font-semibold rounded-full cursor-pointer">
                i
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h4 className="text-3xl font-bold text-gray-900 font-inter">4.8★</h4>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-sm text-gray-600 font-inter">
                Average customer rating
              </p>
              <span className="w-5 h-5 flex items-center justify-center bg-black text-white text-xs font-semibold rounded-full cursor-pointer">
                i
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h4 className="text-3xl font-bold text-gray-900 font-inter">100m+</h4>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-sm text-gray-600 font-inter">
                Wireless drone range
              </p>
              <span className="w-5 h-5 flex items-center justify-center bg-black text-white text-xs font-semibold rounded-full cursor-pointer">
                i
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
