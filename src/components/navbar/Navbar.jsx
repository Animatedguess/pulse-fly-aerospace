import BrandLogo from "../icons/BrandLogo";
import ShoppingCard from "../icons/ShoppingCard";
import UserProfile from "../icons/UserProfile";

const Navbar = () => {
  return (
    <div className="relative text-white font-inter font-semibold leading-3 text-sm flex items-center justify-center w-full">
      {/* Brand logo */}
      <div className="absolute left-10 -top-2">
        <BrandLogo className={"text-white fill-current size-32"} />
      </div>
      {/* main menu of navbar */}
      <div className="flex items-center mt-11 w-full justify-center space-x-8">
        {/* drone devices */}
        <div className="relative before:content-[''] before:bg-white before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">DRONE</div>
        {/* earpods devices */}
        <div className="relative before:content-[''] before:bg-white before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">EARPODS</div>
        {/* news section */}
        <div className="relative before:content-[''] before:bg-white before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">NEWS</div>
        {/* vision section */}
        <div className="relative before:content-[''] before:bg-white before:h-0.5 before:w-full before:absolute before:left-0 before:-bottom-2 before:transform before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100">VISION</div>
        {/* icons */}
        <div className="flex items-center gap-3">
          {/* shoping card */}
          <div>
            <ShoppingCard className={"text-white fill-current size-5"} />
          </div>
          {/* user profile */}
          <div>
            <UserProfile className={"text-white fill-current size-5"} />
          </div>
        </div>
      </div>
      {/* language changer */}
      <div className="absolute right-10 top-9 bg-white rounded-full w-9 h-9 flex items-center justify-center">
        <p className="text-gray-800 font-semibold text-sm">
          EG
        </p>
      </div>
    </div>
  );
};

export default Navbar;
