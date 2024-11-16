import { motion, useScroll, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const BackToTop = () => {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest > 0.2) {
        controls.start({ opacity: 1, y: 0 })
      } else {
        controls.start({ opacity: 0, y: 20 })
      }
    })
  }, [scrollYProgress, controls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
    >
      ↑
    </motion.button>
  )
}

export default BackToTop 