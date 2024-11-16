import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillCategories = {
  "Frontend": {
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"]
  },
  "Backend": {
    icon: "⚙️",
    skills: ["Node.js", "Express", "MongoDB", "REST API"]
  },
  "Tools": {
    icon: "🛠️",
    skills: ["Git", "VS Code", "Figma", "Postman"]
  }
}

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

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <AnimatedSection className="max-w-7xl px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-sketch text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About*/}
          <BentoBox className="md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
              <span>👋</span>
              About Me
            </h3>
            <p className="text-lg text-gray-700/80 leading-relaxed">
              I'm a passionate web developer with expertise in modern JavaScript frameworks 
              and a keen eye for design. I specialize in building responsive, performant 
              web applications using React and related technologies.
            </p>
          </BentoBox>

          {/* Profile Picture */}
          <BentoBox className="aspect-square flex items-center justify-center" delay={0.1}>
            <div className="text-6xl">👨‍💻</div>
          </BentoBox>

          {/* Skill */}
          {Object.entries(skillCategories).map(([category, { icon, skills }], index) => (
            <BentoBox key={category} delay={0.2 + index * 0.1}>
              <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
                <span>{icon}</span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </BentoBox>
          ))}

          {/* Journey */}
          <BentoBox className="md:col-span-2 lg:col-span-2" delay={0.5}>
            <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
              <span>🚀</span>
              My Journey
            </h3>
            <p className="text-lg text-gray-700/80 leading-relaxed">
              My journey in web development started with a curiosity for creating 
              interactive experiences, and has evolved into a professional pursuit 
              of crafting elegant solutions for complex problems.
            </p>
          </BentoBox>

          {/* Contact */}
          <BentoBox className="text-center flex flex-col items-center justify-center" delay={0.6}>
            <h3 className="text-2xl font-sketch mb-4 text-gray-800">Let's Connect!</h3>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-sketch text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </BentoBox>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default About