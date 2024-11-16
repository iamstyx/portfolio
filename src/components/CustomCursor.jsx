import { motion, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const cursorX = useSpring(0, { damping: 25, stiffness: 150 })
  const cursorY = useSpring(0, { damping: 25, stiffness: 150 })

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed w-6 h-6 border-2 border-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}

export default CustomCursor 