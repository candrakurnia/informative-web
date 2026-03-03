import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import WhyUs from './sections/WhyUs'
import ParentMessage from './sections/ParentMessage'
import Gallery from './sections/Gallery'
import Programs from './sections/Programs'
import FeaturedPrograms from './sections/FeaturedPrograms'
import Testimonials from './sections/Testimonials'
import Team from './sections/Team'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <ParentMessage />
        <Gallery />
        <Programs />
        <FeaturedPrograms />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
