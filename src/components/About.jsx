import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js", 
    "Tailwind CSS", "Next.js", "Git", "REST APIs"
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-black py-20">
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
              I'm a passionate web developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend development, I create
              seamless digital experiences that combine aesthetic appeal with functional excellence.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in web development started 5 years ago, and since then, I've worked
              on various projects ranging from e-commerce platforms to enterprise applications.
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

