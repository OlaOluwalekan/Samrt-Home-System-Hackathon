import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Testimonial from '../components/testimonial/Testimonial'
import Download from '../components/download/Download'

const Home = () => {
  return (
    <div>
      {/* HERO SECTION BELOW */}
      <Hero />

      {/* ABOUT US SECTION BELOW */}
      <About />

      {/* TESTIMONIAL SECTION BELOW */}

      <Testimonial />

      {/* APP DOWNLOAD SECTION BELOW */}

      <Download />
    </div>
  )
}
export default Home
