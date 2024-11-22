import React from 'react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection 