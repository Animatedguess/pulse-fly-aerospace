import HomePage from "./components/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return(
    <div className="h-screen w-screen relative">
      <img src="/assets/HeroPage.png" alt="" className="absolute -z-10 top-0 object-cover h-full w-full" />
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App
