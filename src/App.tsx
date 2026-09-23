import CursorSpotlight from "./components/CursorSpotlight"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* Global Cursor Animation */}
      <CursorSpotlight />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App