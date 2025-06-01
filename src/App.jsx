import Gallery from "./components/home-page/Gallery";
import Home from "./pages/Home";
import Inspiration from "./components/home-page/Inspiration";
import Silder from "./components/home-page/Silder";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* First section: full screen home page */}
      <section className="w-screen h-screen">
        <Home />
      </section>

      {/* Second section: horizontally scrollable gallery */}
      <section className="w-screen h-screen overflow-hidden">
        <Silder/>
      </section>

      <section className="w-screen h-[400vh] overflow-hidden">
        <Gallery/>
      </section>

      <section className="w-screen h-screen overflow-hidden">
        <Inspiration/>
      </section>

      <section className="w-screen overflow-hidden">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
