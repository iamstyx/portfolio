import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MouseGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 20,
        minHeight: '100vh',
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`,
      }}
    />
  );
}; 