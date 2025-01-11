import { motion } from "framer-motion";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js", 
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5/CSS3",
        "Redux",
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "API Integration",
      ]
    },
    {
      title: "Web3",
      skills: [
        "Ethereum",
        "Web3.js",
        "Smart Contracts",
      ]
    },
    {
      title: "AI & Cloud",
      skills: [
        "OpenAI API",
        "Microsoft Azure",
        "Speech Recognition",
        "Cloud Services"
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Webpack",
        "VS Code",
        "Vercel",
      ]
    },
    {
      title: "Design & UI",
      skills: [
        "UI/UX Design",
        "Figma",
        "SVG Animation",
        "Responsive Layouts"
      ]
    }
  ];

  const SkillItem = ({ skill }) => (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-4 py-2 text-sm text-white rounded-xl hover:bg-blue-500/10 transition-all duration-300"
    >
      <span className="relative z-10">
        {skill}
      </span>
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 100%)',
        }}
      />
    </motion.span>
  );

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center bg-black py-20">
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
            <div className="mt-2 h-1 w-24 bg-blue-500  mx-auto"></div>
          </div>

          {/* Professional Background */}
          <div className="text-neutral-400 space-y-6 text-center">
  <p className="text-lg leading-relaxed">
    I'm a passionate Full Stack Developer with 1+ years of experience crafting modern web applications. 
    My expertise lies in building scalable, user-centric solutions that combine cutting-edge frontend technologies 
    with robust backend architectures. I specialize in the React.js ecosystem and have a strong foundation in 
    both traditional and blockchain web development.
  </p>
  
  <p className="text-lg leading-relaxed text-center">
    Throughout my career, I've successfully delivered numerous projects ranging from interactive web platforms 
    to decentralized applications. My experience includes collaborating with startups to scale their MVPs 
    and working with enterprise teams to modernize legacy systems. I'm particularly proud of optimizing 
    application performance by 40% and implementing responsive designs that increased mobile user 
    engagement by 60%.
  </p>

</div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2 text-center ">Technical Skills</h3>
            <div className=" h-1 w-20 bg-blue-500 mx-auto "/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-4">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-xl  backdrop-blur-sm border border-neutral-800/50 hover:border-blue-500/20 transition-colors duration-300 "
                >
                  <h4 className="text-lg font-medium text-blue-500 mb-4 ">{category.title}</h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, index) => (
                      <SkillItem key={index} skill={skill} />
                    ))}
                  </div>
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

