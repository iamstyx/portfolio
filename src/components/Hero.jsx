import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-3xl text-center p-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-normal text-gray-900 mb-6 font-sketch bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400"  
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sushant Verma
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl text-gray-800/90 mb-8 font-sketch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-gray-700/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting beautiful and performant web experiences with modern technologies
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:opacity-90 transition-all font-sketch text-lg md:text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 