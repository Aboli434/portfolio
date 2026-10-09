"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
        >
          {/* Header & Statement */}
          <div className="lg:col-span-5 flex flex-col justify-start relative">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 02</span>
              <span className="w-16 h-px bg-foreground/20"></span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Profile</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-6">
              Bridging <span className="italic text-primary">design</span> &amp; engineering.
            </h2>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">
            <div className="text-lg md:text-xl text-foreground font-sans font-light leading-[1.8] tracking-wide relative">
               <div className="absolute -left-6 top-2 w-[1px] h-full bg-foreground/10 hidden md:block"></div>
               <p className="mb-6">
                 I am a Frontend Developer who builds polished, interactive websites and applications for brands and businesses. I focus on responsive design, smooth animations, and clean code that works reliably across devices.
               </p>
               <p className="text-foreground-muted">
                 I graduated with a B.E. in Electronics &amp; Telecommunication in 2025. I specialize in the React and Next.js ecosystem — turning design concepts and business requirements into real, well-crafted digital experiences.
               </p>
               <p className="text-foreground-muted mt-4 text-sm">
                 Available for: responsive websites, interactive landing pages, frontend applications, API integrations, and deployment support.
               </p>
            </div>
            
            {/* Structured Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-foreground/10">
              <div>
                <h3 className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Education</h3>
                <p className="text-foreground font-display text-xl mb-1">B.E. Electronics &amp; E&amp;TC</p>
                <p className="text-foreground-muted text-xs font-sans tracking-widest uppercase">Graduated 2025</p>
              </div>
              <div>
                <h3 className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Specialization</h3>
                <p className="text-foreground font-display text-xl mb-1">Frontend Engineering</p>
                <p className="text-foreground-muted text-xs font-sans tracking-widest uppercase">React, Next.js, Motion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
