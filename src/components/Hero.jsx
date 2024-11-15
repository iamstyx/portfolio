import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl px-4 text-center p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Sushant Verma
        </h1>
        <h2 className="text-2xl text-gray-600/90 mb-8">
          Web Developer
        </h2>
        <p className="text-lg text-gray-600/80 mb-8">
          Crafting beautiful and performant web experiences with modern technologies
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 