import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillCategories = {
  "Frontend": ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
  "Backend": ['Node.js', 'Express', 'MongoDB', 'REST API'],
  "Tools": ['Git', 'Figma', 'VS Code', 'Postman'],
  "Other": ['Responsive Design', 'UI/UX', 'SEO', 'Performance Optimization']
}

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white/50">
      <AnimatedSection className="max-w-5xl px-6 py-20">
        <motion.h2 
          className="text-5xl font-sketch text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <motion.p 
              className="text-lg text-gray-700/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              I'm a passionate web developer with expertise in modern JavaScript frameworks 
              and a keen eye for design. I specialize in building responsive, performant 
              web applications using React and related technologies.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My journey in web development started with a curiosity for creating 
              interactive experiences, and has evolved into a professional pursuit 
              of crafting elegant solutions for complex problems.
            </motion.p>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-sketch text-3xl mb-6 text-gray-800">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span 
                      key={skill}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05 + categoryIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -2 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default About