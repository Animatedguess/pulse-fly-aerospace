import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <div className="overflow-x-hidden">
      <div className="absolute w-full top-0 left-0 z-50 ">
        <Navbar/>
      </div>
      </div>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
