import Navbar from '../navbar/Navbar'
import HomePage from './HomePage'

const WelcomeHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      {/* Background Image */}
      <img
        src="/assets/HeroPage.png"
        alt="PulseFly Hero"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      <Navbar />
      <HomePage />
    </div>
  )
}

export default WelcomeHome
