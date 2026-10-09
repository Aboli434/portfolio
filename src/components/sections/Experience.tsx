"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 07</span>
              <span className="w-16 h-px bg-foreground/20"></span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Background</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
              Experience &amp; <span className="italic text-primary">Education</span>.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-sans text-xs tracking-[0.3em] text-foreground-muted uppercase border-b border-foreground/10 pb-6 mb-10">Freelance &amp; Project Work</h3>
            
            <div className="relative pl-6 border-l border-foreground/10 mb-12">
              <div className="absolute top-1 -left-[3px] w-[5px] h-[5px] bg-primary rounded-full"></div>
              
              <div className="mb-4 flex items-center justify-between">
                <p className="font-sans text-[10px] tracking-[0.2em] text-primary uppercase">2023 — Present</p>
                <p className="font-sans text-[10px] tracking-[0.2em] text-foreground-muted uppercase">Pune, IN</p>
              </div>
              
              <h4 className="font-display text-3xl font-medium text-foreground mb-2">Frontend Developer</h4>
              <p className="font-sans text-sm text-foreground-muted uppercase tracking-widest mb-6">Freelance / Client Projects</p>
              
              <ul className="flex flex-col gap-4 text-sm text-foreground font-light leading-relaxed">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-[3px] h-[3px] bg-foreground/40 rounded-full"></span>
                  Built and delivered client websites including Wedora (wedding platform), PRANSH (agriculture brand), and Aasamant (hospitality).
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-[3px] h-[3px] bg-foreground/40 rounded-full"></span>
                  Translated Figma designs into pixel-accurate, responsive React applications with custom animations.
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-2 w-[3px] h-[3px] bg-foreground/40 rounded-full"></span>
                  Developed IntentFlow, a personal AI-powered workflow platform integrating OpenAI APIs with a full-stack Next.js + Fastify architecture.
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="font-sans text-xs tracking-[0.3em] text-foreground-muted uppercase border-b border-foreground/10 pb-6 mb-10">Education</h3>
            
            <div className="relative pl-6 border-l border-foreground/10">
              <div className="absolute top-1 -left-[3px] w-[5px] h-[5px] bg-foreground/30 rounded-full"></div>
              
              <div className="mb-4 flex items-center justify-between">
                <p className="font-sans text-[10px] tracking-[0.2em] text-foreground-muted uppercase">2021 — 2025</p>
                <p className="font-sans text-[10px] tracking-[0.2em] text-foreground-muted uppercase">Pune, IN</p>
              </div>
              
              <h4 className="font-display text-3xl font-medium text-foreground mb-2">Bachelor of Engineering</h4>
              <p className="font-sans text-sm text-foreground-muted uppercase tracking-widest mb-6">Electronics &amp; Telecommunication</p>
              
              <p className="text-sm text-foreground font-light leading-relaxed">
                Built a strong foundation in systematic problem-solving, algorithms, and technical architecture. Applied this analytical thinking directly to frontend engineering — building structured, performant web applications.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
