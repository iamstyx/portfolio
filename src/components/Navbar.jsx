import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-8 rounded-full bg-neutral-900/30 px-8 py-3 backdrop-blur-md">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
          className="text-sm font-medium text-white transition-colors hover:text-blue-500"
        >
          Home
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('about')}
          className="text-sm font-medium text-white transition-colors hover:text-blue-500"
        >
          About
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('work')}
          className="text-sm font-medium text-white transition-colors hover:text-blue-500"
        >
          Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('contact')}
          className="text-sm font-medium text-white transition-colors hover:text-blue-500"
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
