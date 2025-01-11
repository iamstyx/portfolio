import { motion } from "framer-motion";
import { BackgroundLines } from "./ui/background-lines";
import { FlipWords } from "./ui/flip-words";
import { scrollToSection } from "../utils/scroll";
import { rightArrow, download } from "../assets";

const Hero = () => {
  const words = ["Web Developer", "UI/UX Designer", "Full Stack Developer"];

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundLines className="absolute inset-0 z-0 h-screen" />
      
      <div className="relative z-40 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="mt-4 text-center text-4xl heading-text sm:text-5xl md:text-7xl select-none cursor-default">
          <span className="text-white">Hi, I'm </span>
          <span className="text-blue-500">Sushant</span>
          <br />
          <span className="text-white">I'm </span>
          <FlipWords words={words} className="text-blue-500" />
        </h1>
        
        <p className="mt-6 max-w-2xl text-center body-text text-lg text-neutral-400 select-none cursor-default">
          I create intuitive, visually stunning and highly functional web applications.
        </p>
        
        <div className="mt-8 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('work')}
            className="group inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span>See My Work</span>
            <img 
              src={rightArrow} 
              alt="right-arrow" 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 [filter:invert(0.6)] group-hover:[filter:invert(0.8)]" 
            />
          </motion.button>

          <motion.a
            href="/sushant-resume.pdf"
            download="Sushant_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 text-white transition-all hover:text-blue-500"
          >
            <img 
              src={download} 
              alt="download" 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1 [filter:invert(1)] group-hover:[filter:brightness(0)_invert(0.4)_sepia(1)_saturate(20)_hue-rotate(180deg)]" 
            />
            <span>Download CV</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Hero;