import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React.js", "TypeScript", "JavaScript", "Next.js",
    
    "Tailwind CSS", "Framer Motion",
    
    "Node.js", "Express", "MongoDB", "REST APIs",
    
    "Vite", "Git",
    
    "OpenAI API", "Microsoft Azure",
    
    "Ethereum", "Web3"
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex  items-center justify-center bg-black py-20">
      <div className="relative z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          {/* Professional Background */}
          <div className="text-neutral-400 space-y-6">
  <p className="text-lg leading-relaxed">
    I'm a passionate Full Stack Developer with 1+ years of experience crafting modern web applications. 
    My expertise lies in building scalable, user-centric solutions that combine cutting-edge frontend technologies 
    with robust backend architectures. I specialize in React.js ecosystem and have a strong foundation in 
    both traditional and blockchain web development.
  </p>
  
  <p className="text-lg leading-relaxed">
    Throughout my career, I've successfully delivered numerous projects ranging from high-performance 
    e-commerce platforms to decentralized applications. My experience includes working with startups 
    to scale their MVPs and collaborating with enterprise teams to modernize legacy systems. I'm particularly 
    proud of reducing load times by 40% through performance optimization and implementing responsive designs 
    that increased mobile user engagement by 60%.
  </p>

  <p className="text-lg leading-relaxed">
    I'm deeply committed to writing clean, maintainable code and staying current with industry best practices. 
    Whether it's implementing complex UI animations with Framer Motion or architecting RESTful APIs, 
    I approach each project with attention to detail and a focus on delivering exceptional user experiences.
  </p>
</div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="shadow-[inset_0_0_0_2px_#616467] text-white  px-12 py-4 rounded-full tracking-widest uppercase font-bold hover:text-blue-500 dark:text-neutral-200 transition duration-200 "
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 

