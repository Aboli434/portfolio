"use client";

import { motion } from "framer-motion";

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      <div className="text-center flex flex-col items-center relative z-20 px-6 max-w-4xl w-full">
        <motion.p
          className="text-white/50 tracking-[0.3em] text-xs font-medium mb-6 uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Frontend Developer
        </motion.p>

        <motion.h1 
          className="font-display text-[15vw] md:text-[180px] font-medium tracking-tight uppercase leading-[0.8] text-white mix-blend-plus-lighter mb-8"
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
        >
          ABOLI
        </motion.h1>

        <motion.p 
          className="text-base md:text-xl text-white/70 max-w-lg mx-auto mb-16 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        >
          Building digital experiences where design, interaction and technology meet.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-medium text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-500 ease-out relative group overflow-hidden pointer-events-auto"
          >
            <span className="relative z-10">ENTER MY WORLD</span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
