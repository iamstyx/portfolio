import { motion } from 'framer-motion'

const BentoBox = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    {children}
  </motion.div>
)

export default BentoBox 