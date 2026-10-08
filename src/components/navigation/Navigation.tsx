"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "01", name: "INTRO" },
  { id: "02", name: "AI" },
  { id: "03", name: "ABOUT" },
  { id: "04", name: "WORK" },
  { id: "05", name: "SKILLS" },
  { id: "06", name: "CONTACT" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-auto z-50">
        <div className="font-display font-medium tracking-widest text-xl">ABOLI</div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="text-xs tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors group flex items-center gap-3"
        >
          <span className="hidden sm:inline">MENU</span>
          <div className="flex flex-col gap-1.5 items-end">
            <div className="w-8 h-px bg-white group-hover:w-6 transition-all duration-300" />
            <div className="w-5 h-px bg-white group-hover:w-8 transition-all duration-300" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#08080a] z-[100] flex flex-col justify-center items-center pointer-events-auto"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-xs tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors flex items-center gap-3 group"
            >
              <span className="hidden sm:inline">CLOSE</span>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-8 h-px bg-white rotate-45 group-hover:rotate-[135deg] transition-all duration-500" />
                <div className="absolute w-8 h-px bg-white -rotate-45 group-hover:-rotate-[135deg] transition-all duration-500" />
              </div>
            </button>

            <nav className="flex flex-col items-center gap-6 md:gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.id}
                  className="group cursor-pointer flex items-baseline gap-4 md:gap-8 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: [0.33, 1, 0.68, 1] }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xs md:text-sm text-white/40 font-mono translate-y-[-10px] md:translate-y-[-20px]">{link.id}</span>
                  <span className="font-display text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight group-hover:text-white/50 transition-colors duration-300">
                    {link.name}
                  </span>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="absolute bottom-10 flex gap-10 text-xs tracking-[0.2em] text-white/40 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-white transition-colors">GITHUB</a>
              <a href="#" className="hover:text-white transition-colors">RESUME</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
