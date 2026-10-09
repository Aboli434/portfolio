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
            Let&apos;s build <br className="hidden md:block"/>
            <span className="italic text-primary">something</span> together.
          </h2>
          
          <p className="text-base text-foreground-muted font-sans font-light leading-relaxed mb-16 max-w-xl">
            Open to freelance projects, client work, and collaborations. Whether you have a brief, a design to implement, or an idea to explore — reach out and let&apos;s talk.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
            <a 
              href="mailto:abolirisbud434@gmail.com" 
              className="group relative flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] font-sans text-foreground-muted uppercase">Email</span>
              <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 break-all">abolirisbud434@gmail.com</span>
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

          {/* Start a Project CTA */}
          <div className="mt-16 pt-12 border-t border-foreground/10 w-full flex justify-center">
            <a
              href="mailto:abolirisbud434@gmail.com?subject=Project Enquiry&body=Hi Aboli,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0AProject type: %0D%0ABrief description: %0D%0ATimeline: "
              className="group inline-flex items-center gap-4 text-xs tracking-[0.25em] font-medium text-foreground uppercase hover:text-primary transition-colors duration-500"
            >
              <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:w-14 transition-all duration-500"></span>
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
