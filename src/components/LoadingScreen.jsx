import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl font-sketch text-blue-600"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        SV
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen 