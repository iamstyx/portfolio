import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tags, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm"
    >
      <div className="space-y-4">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Shoptidy",
      tags: ["TypeScript", "React", "Redux", "Supabase", "TailwindCSS", "shadcn/ui"],
      image: "/project1.jpg"
    },
    {
      title: "SocialSphere",
      tags: ["JavaScript", "React", "CRUD", "Appwrite", "TailwindCSS", "TanStack"],
      image: "/project2.jpg"
    },
    {
      title: "NextCut",
      tags: ["TypeScript", "NextJS", "Appwrite", "TailwindCSS", "Advanced forms"],
      image: "/project3.jpg"
    },
    {
      title: "NextCut",
      tags: ["TypeScript", "NextJS", "Appwrite", "TailwindCSS", "Advanced forms"],
      image: "/project3.jpg"
    }
  ];

  return (
    <section id="work" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">My portfolio</h2>
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
