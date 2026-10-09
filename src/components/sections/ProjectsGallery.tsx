"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useStore } from "@/lib/store";

function ProjectCard({ project, idx, handleCinematicView }: { project: any, idx: number, handleCinematicView: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
      style={{ perspective: 1200 }}
    >
      {/* Project Preview (Distinctive Visual Previews) */}
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full lg:w-3/5 group cursor-pointer relative bg-section/30 rounded-xl p-4 md:p-6 shadow-2xl shadow-black/5" 
        onClick={() => handleCinematicView(project.id)}
      >
        <div 
          className="aspect-[4/5] sm:aspect-square lg:aspect-[3/4] relative w-full h-full rounded-lg overflow-hidden"
          style={{ transform: "translateZ(30px)" }}
        >
          
          {/* Distinctive Visual Treatments -> Actual Project Screenshots */}
          <Image 
            src={`/projects/${project.id}.jpg`} 
            alt={`${project.name} preview`} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-10 pointer-events-none"></div>

          {/* Overlay Title */}
          <div className="absolute top-8 left-8 z-20 pointer-events-none mix-blend-difference text-white">
             <span className="text-xs tracking-[0.4em] uppercase font-sans opacity-80 block mb-2">Project Preview</span>
             <h3 className="font-display text-3xl md:text-4xl">{project.name}</h3>
          </div>

        </div>

        {/* Hover Reveal CTA */}
        <div 
          className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm rounded-xl z-30"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="text-white text-xs font-sans tracking-[0.3em] uppercase border-b border-white pb-1">
            Enter Cinematic Experience
          </span>
        </div>
      </motion.div>

      {/* Editorial Details Column */}
      <div className="w-full lg:w-2/5 flex flex-col gap-10">
        <div>
          <h3 className="text-xs tracking-[0.3em] font-sans text-primary uppercase mb-4 border-b border-foreground/10 pb-4">
            Project Overview
          </h3>
          <p className="font-display text-3xl font-medium text-foreground mb-6 leading-[1.2]">{project.idea}</p>
          <p className="font-sans text-sm font-light text-foreground-muted leading-relaxed">{project.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Role</h4>
            <p className="font-sans text-xs text-foreground uppercase tracking-wider">{project.role.split(' ')[0]} Dev</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Tech</h4>
            <div className="flex flex-col gap-1">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="font-sans text-xs text-foreground uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 pt-8 border-t border-foreground/10 mt-4">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-4 text-xs tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit"
            >
              <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
              Visit Live Site
            </a>
          ) : (
            <p className="text-xs tracking-[0.3em] font-sans text-foreground-muted uppercase opacity-50 cursor-not-allowed">Deployment Pending</p>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-4 text-xs tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit"
            >
              <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
              View Source
            </a>
          )}
          <button 
            onClick={() => handleCinematicView(project.id)}
            className="group flex items-center gap-4 text-xs tracking-[0.3em] font-sans text-primary uppercase transition-colors hover:text-foreground w-fit"
          >
            <span className="w-6 h-[1px] bg-primary group-hover:bg-foreground transition-colors"></span>
            Cinematic View
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  const { setPhase, setActiveProject } = useStore();

  const handleCinematicView = (projectId: string) => {
    // Scroll back to top to see the 3D cinematic hero
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveProject(projectId);
      setPhase('project');
    }, 500);
  };

  return (
    <section id="projects" className="py-24 md:py-40 bg-background relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 05</span>
              <span className="w-16 h-px bg-foreground/20"></span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Selected Work</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight text-foreground leading-[1] max-w-2xl">
              Featured <span className="italic text-primary">Case Studies</span>.
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-40 lg:gap-60">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} handleCinematicView={handleCinematicView} />
          ))}
        </div>
      </div>
    </section>
  );
}
