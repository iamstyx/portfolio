import { motion } from 'framer-motion'
import BentoBox from './BentoBox'
import { FaDownload } from 'react-icons/fa'

const ResumeDownload = () => {
  return (
    <BentoBox className="md:col-span-2">
      <h3 className="text-2xl font-sketch mb-6 text-gray-800 flex items-center gap-3">
        <span>📄</span>
        Resume
      </h3>
      
      <div className="space-y-4">
        <p className="text-gray-700/80">
          Download my resume to learn more about my experience and skills.
        </p>
        
        <motion.a
          href="https://drive.google.com/file/d/1LQD0rLBpAy73ggtUYF-gP8DdBzAsTcKw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-sketch text-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </div>
    </BentoBox>
  )
}

export default ResumeDownload 