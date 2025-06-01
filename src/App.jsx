import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Silder from "./pages/Silder";

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
    </div>
  );
}

export default App;
