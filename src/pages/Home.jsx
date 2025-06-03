import WelcomeHome from "../components/home-page/WelcomeHome";
import Silder from "../components/home-page/Silder";
import Gallery from "../components/home-page/Gallery";
import Inspiration from "../components/home-page/Inspiration";
import Footer from "../components/footer/Footer";

const Home = () => {
   return (
    <div className="overflow-x-hidden">
      
      <section className="w-screen h-screen">
        <WelcomeHome/>
      </section>

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
};

export default Home;
