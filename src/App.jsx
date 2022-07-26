import AboutUs from "./components/AboutUs"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Mail from './components/Mail'
import Footer from "./components/Footer"

function App() {
  return (
    <div  className="bg-sky-100">
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Mail />
      <Footer />
    </div>
  )
}

export default App
