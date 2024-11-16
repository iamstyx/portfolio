import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl px-4 text-center p-8">
        <motion.h1 
          className="text-7xl font-normal text-gray-900 mb-6 font-sketch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sushant Verma
        </motion.h1>
        <motion.h2 
          className="text-3xl text-gray-800/90 mb-8 font-sketch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting beautiful and performant web experiences with modern technologies
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-sketch text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-blue-600 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-sketch text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 