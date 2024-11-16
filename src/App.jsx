import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-gray-50/50 min-h-screen">
      <ScrollProgress />
      <Background3D />
      <BackToTop />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
