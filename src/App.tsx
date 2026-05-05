import Header from './sections/Header'
import Hero from './sections/Hero'
import DemoShowcase from './sections/DemoShowcase'
import Philosophy from './sections/Philosophy'
import Benefits from './sections/Benefits'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <DemoShowcase />
        <Philosophy />
        <Benefits />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
