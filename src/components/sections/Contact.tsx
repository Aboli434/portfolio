"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-section relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-primary/40"></span>
            <span className="text-[9px] tracking-[0.3em] font-sans text-primary uppercase">N° 06 — Connect</span>
            <span className="w-12 h-px bg-primary/40"></span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tight text-foreground leading-[1] mb-12">
            Let's build <br className="hidden md:block"/>
            <span className="italic text-primary">something</span> together.
          </h2>
          
          <p className="text-base text-foreground-muted font-sans font-light leading-relaxed mb-16 max-w-xl">
            Currently open to new opportunities. Whether you have a project idea, a technical challenge, or simply want to connect, my inbox is open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
            <a 
              href="mailto:hello@example.com" 
              className="group relative flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] font-sans text-foreground-muted uppercase">Email</span>
              <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">hello@example.com</span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>

            <a 
              href="https://www.linkedin.com/in/aboli-risbud-467708251" 
              target="_blank" rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] font-sans text-foreground-muted uppercase">Network</span>
              <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">LinkedIn</span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>

            <a 
              href="https://github.com/Aboli434" 
              target="_blank" rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] font-sans text-foreground-muted uppercase">Code</span>
              <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-300">GitHub</span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
