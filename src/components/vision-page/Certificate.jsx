const Certificate = () => {
  return (
    <div id="our-certifications" className="snap-normal px-4 md:px-32 lg:px-48 py-24 bg-white">
      <div className="flex flex-col items-center justify-center py-16 space-y-16 bg-gray-50/90 rounded-2xl shadow-md">
        <iframe
            src="/assets/vision/certificate.pdf"
            width="100%"
            height="800px"
            title="PDF Viewer"
        />
      </div>
    </div>
  )
}

export default Certificate
