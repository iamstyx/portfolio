import { motion } from "framer-motion";

export const BackgroundPattern = () => {
  return (
    <div className="relative h-full w-full bg-black">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px circle at center, rgba(29,78,216,0.15), transparent 80%)`,
        }}
        initial={false}
      />
    </div>
  );
}; 