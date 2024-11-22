import { motion } from 'framer-motion'
import { useState } from 'react'
import BentoBox from './BentoBox'

const skills = {
  "Frontend": {
    React: 90,
    "Next.js": 85,
    TypeScript: 80,
    "Three.js": 75,
    "Tailwind CSS": 85
  },
  "Backend": {
    "Node.js": 85,
    Express: 80,
    MongoDB: 75,
    "REST API": 85
  }
}

const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  return (
    <BentoBox>
      <div className="flex gap-4 mb-8 flex-wrap">
        {Object.keys(skills).map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-50 text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      <div className="space-y-6">
        {Object.entries(skills[activeCategory]).map(([skill, level]) => (
          <motion.div 
            key={skill}
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill}</span>
              <span>{level}%</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  opacity: hoveredSkill === skill ? 1 : 0.8
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </BentoBox>
  )
}

export default SkillsGraph 