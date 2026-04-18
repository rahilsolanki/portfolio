import AnimatedBackground from './components/layout/AnimatedBackground'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Freelance from './components/sections/Freelance'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      {/* Fixed animated background — stays in place while content scrolls */}
      <AnimatedBackground />

      {/* Scrollable content layer */}
      <div className="relative z-10 min-h-screen font-sans antialiased text-[#f0f0f0] transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Freelance />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
