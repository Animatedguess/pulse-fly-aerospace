import { FaInstagram, FaFacebookF } from "react-icons/fa";
import PlusIcon from "../icons/footer-icons/PlusIcon";

const Footer = () => {
  const links = ["Frequently Asked Questions", "Help center", "Size guide"];
  return (
    <div className="font-inter">
      {/* contact section */}
      <div className="bg-white border-t border-gray-800/10">
        {/* Newsletter */}
        <div className="max-w-5xl mx-auto py-20 px-4 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">NEWSLETTER</h2>
            <p className="mt-4 text-gray-500 text-pretty text-sm">
              Discover in preview all our new products, our latest actions and{" "}
              <br />
              get 10€ off your first order by subscribing to our newsletter!
            </p>
            <div className="mt-8 flex justify-center">
              <input
                type="email"
                placeholder="Type your email address here"
                className="w-full max-w-md px-6 py-4 rounded-full border border-gray-200 focus:outline-none text-gray-800"
              />
              <button className="ml-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200">
              <FaInstagram className="text-xl" />
            </div>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200">
              <FaFacebookF className="text-xl" />
            </div>
          </div>
        </div>
        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="border-r py-20 border-t border-b border-gray-800/10">
            <div className="flex justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 0v6m6 4H6a2 2 0 01-2-2v-1a9 9 0 0118 0v1a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Secure payment</h3>
            <p className="text-gray-500">credit card</p>
          </div>
          <div className="border-r py-20 border-t border-b border-gray-800/10">
            <div className="flex justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v16h16V4H4zm4 6h8m-8 4h8"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Simplified return</h3>
            <p className="text-gray-500">(under 60 days)</p>
          </div>
          <div className="border-r py-20 border-t border-b border-gray-800/10">
            <div className="flex justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 20l-6-5h12l-6 5zM6 8a6 6 0 1112 0v1.5a3 3 0 01-6 0V8"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <p className="text-gray-500">to associations</p>
          </div>
        </div>
      </div>
      {/* faq section */}
      <div className="bg-[#f9f8f5] py-10">
        <div className="max-w-xl mx-40 space-y-4">
          {links.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-4xl text-gray-900 font-medium font-inter cursor-pointer group"
            >
              <div className="relative h-16 w-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-16 before:h-16 before:rounded-full before:bg-gray-900 before:z-0 before:scale-0 before:transition-transform before:duration-500 group-hover:before:scale-100">
                <PlusIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 text-gray-900 group-hover:text-gray-50 fill-current" />
              </div>
              {text}
            </div>
          ))}
        </div>
      </div>
      {/* bottom footer */}
      <div className="bg-[#1a1b19] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-y-4 text-sm text-gray-300">
          <a href="#" className="hover:underline">
            Contact us
          </a>
          <a href="#" className="hover:underline">
            Ubac vision
          </a>
          <a href="#" className="hover:underline">
            10€ on your first order
          </a>
          <a href="#" className="hover:underline">
            Manage cookies
          </a>

          <a href="#" className="hover:underline">
            Terms and conditions of sale
          </a>
          <a href="#" className="hover:underline">
            Legal information
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
