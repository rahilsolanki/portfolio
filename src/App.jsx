import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Freelance from './components/Freelance'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
