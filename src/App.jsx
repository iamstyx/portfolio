import React from 'react'
import Hero from './components/Hero'
import Background3D from './components/Background3D'

const App = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      <Background3D />
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm">
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
      </nav>
      
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
