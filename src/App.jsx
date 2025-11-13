import GameNavbar from './components/GameNavbar'
import GameHero from './components/GameHero'
import HoverShowcase from './components/HoverShowcase'
import GameCarouselSection from './components/GameCarouselSection'
import ParallaxPlayfield from './components/ParallaxPlayfield'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GameNavbar />
      <main>
        <GameHero />
        <HoverShowcase />
        <section id="playfield"><ParallaxPlayfield /></section>
        <GameCarouselSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
