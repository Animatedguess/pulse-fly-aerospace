import Home from "./pages/Home";
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
    </div>
  );
}

export default App;
