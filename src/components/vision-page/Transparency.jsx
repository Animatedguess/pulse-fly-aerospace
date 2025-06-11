const Transparency = () => {
  const data = [
    {
      key: "R&D and Engineering",
      percentage: "35.00%",
      degree: 126,
    },
    {
      key: "Hardware & Components",
      percentage: "40.00%",
      degree: 144,
    },
    {
      key: "Marketing & Distribution",
      percentage: "15.00%",
      degree: 54,
    },
    {
      key: "Operating Margin",
      percentage: "10.00%",
      degree: 36,
    },
  ];

  return (
    <section id="transparency" className="py-20 bg-white text-center">
      <div className="space-y-4 mb-12">
        <h2 className="text-5xl font-bold text-gray-900 font-inter">TRANSPARENCY</h2>
        <p className="text-2xl text-gray-500 font-inter">Cost Breakdown</p>
        <p className="max-w-2xl mx-auto text-base text-gray-500 font-inter">
          Here's how we allocate the cost of our drones—from development to
          delivery—based on our latest financial review. This helps you
          understand exactly where your investment goes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {data.map(({ key, percentage, degree }) => (
          <div
            key={key}
            className="w-64 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-64 h-64 rounded-full shadow-md border border-gray-300 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#F3F4F3 ${degree}deg, transparent ${degree}deg)`,
                }}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
                  <img
                    src="https://prismic-io.s3.amazonaws.com/ubac/9602910c-253d-448c-b8e7-621436d879d7_distributeur.svg"
                    alt={key}
                    className="w-7 h-7"
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-xl font-normal text-gray-800 font-inter">{key}</p>
            <p className="text-base font-bold text-gray-900 font-inter">{percentage}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transparency;
