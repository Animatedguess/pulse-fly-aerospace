import HomePage from './HomePage'

const WelcomeHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      {/* Background Image */}
      <img
        src="/assets/HomePage1.png"
        alt="PulseFly Hero"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <HomePage />
    </div>
  )
}

export default WelcomeHome
