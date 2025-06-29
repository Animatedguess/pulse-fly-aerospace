import BrandLogo from "../icons/BrandLogo";
import ShoppingCard from "../icons/ShoppingCard";
import UserProfile from "../icons/UserProfile";
import "../../App.css";
import HoverPanel from "./HoverPanel";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="relative text-gray-100 font-inter font-semibold leading-3 text-sm flex items-center justify-center w-full">
            {/* Brand logo */}
            <Link to="/">
                <div className="absolute left-10 -top-2">
                    <BrandLogo
                        className={"text-gray-100 fill-current size-32"}
                    />
                </div>
            </Link>
            {/* main menu of navbar */}
            <div className="navbar flex items-center mt-11 w-full justify-center space-x-8">
                {/* drone devices */}
                <NavLink to="drone-product" className="group">
                    {({ isActive }) => (
                        <>
                            <p
                                className={`relative before:content-[''] before:absolute before:bg-gray-100 before:left-0 before:-bottom-2 before:h-0.5 before:w-full before:transition-transform before:duration-300 ${
                                    isActive
                                        ? "before:scale-x-100"
                                        : "before:scale-x-0 group-hover:before:scale-x-100"
                                }`}
                            >
                                DRONE
                            </p>
                            {/* FULL WIDTH HOVER PANEL */}
                            <HoverPanel image="assets/image.png" />
                        </>
                    )}
                </NavLink>

                {/* earpods devices */}
                <NavLink to="earbuds-product" className="group">
                    {({ isActive }) => (
                        <>
                            <p
                                className={`relative before:content-[''] before:absolute before:bg-gray-100 before:left-0 before:-bottom-2 before:h-0.5 before:w-full before:transition-transform before:duration-300 ${
                                    isActive
                                        ? "before:scale-x-100"
                                        : "before:scale-x-0 group-hover:before:scale-x-100"
                                }`}
                            >
                                EARBUDS
                            </p>
                            {/* FULL WIDTH HOVER PANEL */}
                            <HoverPanel image="assets/image.png" />
                        </>
                    )}
                </NavLink>
                {/* news section */}
                <NavLink to="news" className="group">
                    {({ isActive }) => (
                        <>
                            <p
                                className={`relative before:content-[''] before:absolute before:bg-gray-100 before:left-0 before:-bottom-2 before:h-0.5 before:w-full before:transition-transform before:duration-300 ${
                                    isActive
                                        ? "before:scale-x-100"
                                        : "before:scale-x-0 group-hover:before:scale-x-100"
                                }`}
                            >
                                NEWS
                            </p>
                            {/* FULL WIDTH HOVER PANEL */}
                            <HoverPanel image="assets/image.png" />
                        </>
                    )}
                </NavLink>
                {/* vision section */}
                <NavLink to="vision" className="group">
                    {({ isActive }) => (
                        <>
                            <p
                                className={`relative before:content-[''] before:absolute before:bg-gray-100 before:left-0 before:-bottom-2 before:h-0.5 before:w-full before:transition-transform before:duration-300 ${
                                    isActive
                                        ? "before:scale-x-100"
                                        : "before:scale-x-0 group-hover:before:scale-x-100"
                                }`}
                            >
                                VISION
                            </p>
                        </>
                    )}
                </NavLink>

                {/* icons */}
                <div className="flex items-center gap-3">
                    {/* shoping card */}
                    <div>
                        <ShoppingCard
                            className={"text-gray-100 fill-current size-5"}
                        />
                    </div>
                    {/* user profile */}
                    <Link to="/userprofile">
                        <div>
                            <UserProfile
                                className={"text-gray-100 fill-current size-5"}
                            />
                        </div>
                    </Link>
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
