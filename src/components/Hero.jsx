import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl px-4 text-center p-8">
        <h1 className="text-7xl font-normal text-gray-800/90 mb-6 font-sketch">
          Sushant Verma
        </h1>
        <h2 className="text-3xl text-gray-600/90 mb-8 font-sketch">
          Web Developer
        </h2>
        <p className="text-lg text-gray-600/80 mb-8">
          Crafting beautiful and performant web experiences with modern technologies
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-sketch text-xl"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-sketch text-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 