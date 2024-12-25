import { motion } from "framer-motion";
import { nftverse, sketchify, brandly, aiAssistant, arrowIcon } from "../assets";
const ProjectCard = ({ title, description, tags, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm"
    >
      <div className="space-y-4">
        {/* Project Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-2xl">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          
          {description && (
            <p className="text-neutral-400 text-sm line-clamp-2">
              {description}
            </p>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-black/50 text-white rounded-full text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-8 right-8 p-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <img 
            src={arrowIcon} 
            alt="arrow-icon" 
            className="w-4 h-4 [filter:invert(1)]" 
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "NFTverse",
      description: "A decentralized NFT marketplace enabling users to browse and buy digital assets, built with blockchain technology and Ethereum wallet support.",
      tags: ["React 18", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Ethereum"],
      image: nftverse
    },
    {
      title: "Sketchify",
      description: "A web-based drawing application inspired by Excalidraw, featuring hand-drawn style diagrams with multiple tools and canvas controls.",
      tags: ["React 18", "Rough.js", "Perfect Freehand", "Tailwind CSS", "Vite"],
      image: sketchify
    },
    {
      title: "Brandly",
      description: "A modern logo creation platform with professional design tools, enabling users to create custom logos with extensive customization options.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "html2canvas", "Lucide Icons"],
      image: brandly
    },
    {
      title: "AI Meeting Assistant",
      description: "An AI-powered platform for transcribing and analyzing meetings, boosting team productivity through actionable insights.",
      tags: ["React.js", "Vite", "TailwindCSS", "Microsoft Cognitive Services", "OpenAI API"],
      image: aiAssistant
    }
  ];

  return (
    <section id="work" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
          <button className="px-4 py-2 rounded-full bg-neutral-900/50 text-white text-sm backdrop-blur-sm hover:bg-neutral-800/50 transition-colors">
            All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
