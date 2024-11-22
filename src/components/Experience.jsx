import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'
import AnimatedSection from './AnimatedSection'
import BentoBox from './BentoBox'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const experiences = [
  {
    period: "June 2024 - Present",
    role: "Software Developer",
    company: "Navneet Education Ltd.",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Working as a full-stack developer at Navneet Education, focusing on building and optimizing educational technology solutions. Leading the development of responsive web applications and collaborating with cross-functional teams to deliver high-quality software solutions that enhance the learning experience for students and educators.",
    achievements: [
      "Developed and launched a Factory Tool application that increased workflow efficiency by 60% for factory workers by streamlining Excel file processing",
      "Implemented responsive design principles and optimized frontend performance, reducing load times by 40% across all platforms",
      "Built and maintained RESTful APIs using Node.js and Express, handling data for over 1000+ daily active users",
      "Collaborated with UI/UX team to implement modern design patterns and improve user experience across multiple applications",
      "Integrated MongoDB for efficient data management, resulting in 30% faster query response times"
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "REST API"]
  }
]

const Experience = () => {
  const { ref, y } = useParallax(50)
  
  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-sketch text-center mb-16 text-gray-900"
          ref={ref}
          style={{ y }}
        >
          Experience
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Experience Card */}
          <BentoBox className="lg:col-span-2">
            <div className="relative">
              <span className="text-blue-600 font-medium">{experiences[0].period}</span>
              <h3 className="text-xl font-sketch mt-2">{experiences[0].role}</h3>
              
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <span>{experiences[0].company}</span>
                <span>•</span>
                <span>{experiences[0].location}</span>
                <span>•</span>
                <span className="text-blue-600">{experiences[0].type}</span>
              </div>

              <p className="text-gray-700/80 mb-4">{experiences[0].description}</p>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700/80">
                  {experiences[0].achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[0].skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Side Content */}
          <div className="space-y-8">
            <BentoBox>
              <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
                <span>🎯</span>
                Professional Growth
              </h3>
              <p className="text-gray-700/80 mb-6 leading-relaxed">
                Starting my journey at Navneet Education, I've been focused on developing scalable web applications 
                and contributing to team success through technical leadership and innovation.
              </p>
            </BentoBox>

            <BentoBox>
              <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
                <span>🔗</span>
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/in/sushant-verma-523151198/" 
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/iamstyx" 
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </BentoBox>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Experience 