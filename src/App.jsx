import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      <Background3D />
      <motion.nav 
        className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-semibold text-gray-800">SV</a>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
