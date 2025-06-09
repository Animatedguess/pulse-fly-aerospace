import React from 'react'

const VideoComponent = () => {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Video */}
      <video
        src="assets/vision/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-gray-100 px-4 z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter">PULSEFLY INNOVATION</h1>
          <p className="text-lg md:text-2xl mt-4 font-medium font-inter">
            Where cutting-edge tech meets sleek design
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoComponent
