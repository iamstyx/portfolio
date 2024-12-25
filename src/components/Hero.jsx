import { motion } from "framer-motion";
import { BackgroundLines } from "./ui/background-lines";
import { FlipWords } from "./ui/flip-words";
import { scrollToSection } from "../utils/scroll";

const Hero = () => {
  const words = ["Web Developer", "UI/UX Designer", "Full Stack Developer"];

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundLines className="absolute inset-0 z-0" />
      
      <div className="relative z-50 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="mt-4 text-center text-4xl font-bold sm:text-5xl md:text-7xl">
          <span className="text-white">Hi, I'm </span>
          <span className="text-blue-500">Sushant</span>
          <br />
          <span className="text-white">I'm </span>
          <FlipWords words={words} className="text-blue-500" /> <br />
        </h1>
        
        <p className="mt-6 max-w-2xl text-center text-lg text-neutral-400">
          I create intuitive, visually stunning and highly functional web applications.
        </p>
        
        <div className="mt-8 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('work')}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span>See My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 text-white transition-all hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-y-1"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;