"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      {/* Editorial decorative lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-foreground/10 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">
        
        {/* Left side: Editorial Typography */}
        <div className="flex flex-col items-start text-left pointer-events-auto pl-[4%] lg:pl-[8%] max-w-4xl">
          
          <motion.div
            className="flex items-center gap-6 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-foreground-muted text-xs tracking-[0.2em] uppercase font-sans">N° 01</span>
            <span className="w-12 h-px bg-foreground/30"></span>
            <span className="text-foreground tracking-[0.4em] text-xs font-medium uppercase font-sans">
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1 
            className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-medium tracking-tight leading-[0.85] text-foreground mb-12 relative"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Aboli<span className="text-primary italic pr-2">.</span>
          </motion.h1>

          <motion.div 
            className="flex gap-6 items-start max-w-xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
          >
            <div className="w-[2px] h-full bg-burgundy/60 mt-1 min-h-[60px]"></div>
            <p className="text-base md:text-lg text-foreground-muted font-sans font-light leading-relaxed tracking-wide">
              I design and develop premium, responsive websites that help businesses present their brand beautifully, build trust, and turn visitors into enquiries.
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-8 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <a 
              href="#contact"
              className="group relative flex items-center gap-3 text-xs tracking-[0.2em] font-medium text-foreground uppercase hover:text-primary transition-colors duration-500"
            >
              <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors duration-500"></span>
              Discuss Your Project
            </a>

            <a 
              href="#projects"
              className="text-xs tracking-[0.2em] uppercase font-sans text-foreground-muted hover:text-foreground transition-colors relative group"
            >
              Explore Selected Work
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>
        </div>

        {/* Right side: Vertical label text */}
        <motion.div 
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center text-xs tracking-[0.4em] text-foreground-muted uppercase font-sans whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          Interactive Web Experience — 2026
        </motion.div>

      </div>

    </motion.div>
  );
}
