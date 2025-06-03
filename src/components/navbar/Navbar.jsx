import BrandLogo from "../icons/BrandLogo";
import ShoppingCard from "../icons/ShoppingCard";
import UserProfile from "../icons/UserProfile";
import "../../App.css";
import HoverPanel from "./HoverPanel";

const Navbar = () => {
  return (
    <div className="relative text-gray-100 font-inter font-semibold leading-3 text-sm flex items-center justify-center w-full">
      {/* Brand logo */}
      <div className="absolute left-10 -top-2">
        <BrandLogo className={"text-gray-100 fill-current size-32"} />
      </div>
      {/* main menu of navbar */}
      <div className="navbar flex items-center mt-11 w-full justify-center space-x-8">
        {/* drone devices */}
        <div className="group">
          <p className="relative before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
            DRONE
          </p>
          {/* FULL WIDTH HOVER PANEL */}
          <HoverPanel image="assets/image.png"/>
        </div>
        {/* earpods devices */}
        <div className="group">
          <p className="relative before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
            EARBUDS
          </p>
          {/* FULL WIDTH HOVER PANEL */}
          <HoverPanel image="assets/image.png"/>
        </div>
        {/* news section */}
        <div className="group">
          <p className="relative before:content-[''] before:bg-gray-800 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
            NEWS
          </p>
          {/* FULL WIDTH HOVER PANEL */}
          <HoverPanel image="assets/image.png"/>
        </div>
        {/* vision section */}
        <div>
          <p className="relative before:content-[''] before:bg-gray-100 before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">
            VISION
          </p>
        </div>

        {/* icons */}
        <div className="flex items-center gap-3">
          {/* shoping card */}
          <div>
            <ShoppingCard className={"text-gray-100 fill-current size-5"} />
          </div>
          {/* user profile */}
          <div>
            <UserProfile className={"text-gray-100 fill-current size-5"} />
          </div>
        </div>
      </div>
      {/* language changer */}
      <div className="absolute right-10 top-9 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center">
        <p className="text-gray-800 font-semibold text-sm">EG</p>
      </div>
    </div>
  );
};

export default Navbar;
