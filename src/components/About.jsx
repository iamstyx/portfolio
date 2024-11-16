import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white/50">
      <div className="max-w-4xl px-6 py-20">
        <h2 className="text-5xl font-sketch text-center mb-12 text-gray-900">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700/80">
              I'm a passionate web developer with expertise in modern JavaScript frameworks 
              and a keen eye for design. I specialize in building responsive, performant 
              web applications using React and related technologies.
            </p>
            <p className="text-lg text-gray-700/80">
              My journey in web development started with a curiosity for creating 
              interactive experiences, and has evolved into a professional pursuit 
              of crafting elegant solutions for complex problems.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="font-sketch text-2xl mb-4 text-gray-800">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Node.js', 'Git' , 'MongoDB' , 'Express' , 'Next.js' , 'Figma'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About