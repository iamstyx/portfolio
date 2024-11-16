import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { zazoo , colorMixer , factoryTool } from '../assets/asset'
import { useState } from 'react'

const projects = [
  {
    title: 'ZAZOO AI',
    description: 'Al-driven meeting summaries and in-app transcriptions, simplified',
    tech: ['React', 'Express', 'MongoDB', 'Node.js',  'Tailwind CSS'],
    category: 'Full Stack',
    image: zazoo,
    liveUrl: 'https://www.zazoo.in/',
    githubUrl: '#'
  },
  {
    title: 'Color Mixer',
    description: 'Inspiration in every stroke',
    tech: ['React', 'Express', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    category: 'Frontend',
    image: colorMixer,
    liveUrl: 'https://youva.vercel.app/colormixer',
    githubUrl: '#'
  },
  {
    title: 'Factory Tool',
    description: 'The Factory Tool was developed for Navneet factory workers to streamline their workflow. It allows users to view selected rows from Excel files in a clear, formatted manner, eliminating the need to read entire files.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js',  'Tailwind CSS'],
    category: 'Backend',
    image: factoryTool,
    liveUrl: 'https://factory-product-excel-reader.vercel.app/',
    githubUrl: '#'
  }
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
  >
    <img 
      src={project.image} 
      alt={project.title}
      className="h-48 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-sketch text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-700/80 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.liveUrl} target='_blank' className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
        <a href={project.githubUrl} target='_blank' className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
      </div>
    </div>
  </motion.div>
)

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All', 'Frontend', 'Backend', 'Full Stack']
  
  return (
    <motion.div 
      className="flex justify-center gap-4 mb-12 flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {filters.map(filter => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeFilter === filter 
              ? 'bg-blue-600 text-white' 
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ?
      true :
      project.category === activeFilter
  )
  
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <AnimatedSection className="max-w-6xl px-6">
        <h2 className="text-5xl font-sketch text-center mb-12 text-gray-900">
          My Projects
        </h2>
        <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Projects