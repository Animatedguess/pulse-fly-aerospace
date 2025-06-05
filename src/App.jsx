import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  // Define routes where the second navbar should appear
  const secondaryNavbarRoutes = ["/drone-product", "/earbuds-product", "/news"];

  const isSecondaryNavbar = secondaryNavbarRoutes.includes(location.pathname);
  return (
    <>
      <div>
        {isSecondaryNavbar ? (
          <Navbar2 />
        ) : (
          <div className="absolute w-full top-0 left-0 z-50 ">
            <Navbar />
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
