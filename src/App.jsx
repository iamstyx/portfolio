import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { MouseGradient } from "./components/MouseGradient";


const App = () => {
  return (
    <main className="min-h-screen w-full bg-black">
      <MouseGradient />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
