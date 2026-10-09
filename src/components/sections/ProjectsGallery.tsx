"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useStore } from "@/lib/store";

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
    <section id="projects" className="py-24 md:py-40 bg-background relative overflow-hidden">
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
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 04</span>
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
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              {/* Project Preview (Distinctive Visual Previews) */}
              <div className="w-full lg:w-3/5 group cursor-pointer relative overflow-hidden bg-section" onClick={() => handleCinematicView(project.id)}>
                <div className="aspect-[4/5] sm:aspect-square lg:aspect-[3/4] relative w-full h-full">
                  
                  {/* Distinctive Visual Treatments */}
                  {project.id === 'intentflow' && (
                    <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center p-8 overflow-hidden">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                        <div className="w-full h-12 border border-white/20 rounded-lg flex items-center px-4 bg-white/5 backdrop-blur-sm">
                          <div className="w-3 h-3 rounded-full bg-white/40 mr-3"></div>
                          <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="w-3/4 h-12 border border-primary/40 rounded-lg flex items-center px-4 bg-primary/10 backdrop-blur-sm ml-auto">
                          <div className="w-3 h-3 rounded-full bg-primary/60 mr-3"></div>
                          <div className="w-1/2 h-2 bg-primary/40 rounded-full"></div>
                        </div>
                        <div className="w-5/6 h-12 border border-white/20 rounded-lg flex items-center px-4 bg-white/5 backdrop-blur-sm">
                          <div className="w-3 h-3 rounded-full bg-white/40 mr-3"></div>
                          <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8">
                        <h3 className="font-sans text-xs tracking-[0.4em] text-white/50 uppercase">Workflow System</h3>
                      </div>
                    </div>
                  )}

                  {project.id === 'wedora' && (
                    <div className="absolute inset-0 bg-[#E9DED1] flex flex-col items-center justify-center p-12 overflow-hidden">
                      <div className="w-full h-full border border-[#702C3B]/20 p-4 flex items-center justify-center relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#702C3B]/30"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#702C3B]/30"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-[#702C3B]/30"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-[#702C3B]/30"></div>
                        
                        <div className="text-center z-10">
                          <h2 className="font-display text-5xl md:text-7xl text-[#702C3B] italic opacity-80 leading-none">W</h2>
                          <div className="w-8 h-px bg-[#702C3B]/40 mx-auto my-4"></div>
                          <p className="font-sans text-[8px] tracking-[0.4em] text-[#30211D] uppercase">Premium Planning</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'pransh' && (
                    <div className="absolute inset-0 bg-[#2B211D] flex items-center justify-center overflow-hidden">
                      <div className="w-[150%] h-[150%] absolute border-[1px] border-[#B69A62]/20 rounded-full scale-90"></div>
                      <div className="w-[120%] h-[120%] absolute border-[1px] border-[#B69A62]/30 rounded-full scale-75"></div>
                      <div className="w-[80%] h-[80%] absolute bg-gradient-to-tr from-[#B69A62]/10 to-transparent rounded-full backdrop-blur-3xl"></div>
                      <div className="z-10 text-center">
                        <h3 className="font-sans text-[10px] tracking-[0.5em] text-[#B69A62] uppercase mb-4">Origin & Earth</h3>
                        <div className="font-display text-6xl text-[#F8F3E9] opacity-90">03</div>
                      </div>
                    </div>
                  )}

                  {project.id === 'aasamant' && (
                    <div className="absolute inset-0 bg-[#F8F3E9] flex flex-col p-8 overflow-hidden">
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="col-span-2 bg-[#2B211D]/5 h-full rounded-sm"></div>
                        <div className="col-span-1 bg-[#2B211D]/10 h-full rounded-sm flex flex-col gap-2">
                          <div className="flex-1 bg-white/50 rounded-sm"></div>
                          <div className="flex-1 bg-white/50 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="h-1/3 mt-2 grid grid-cols-4 gap-2">
                        <div className="col-span-1 bg-[#2B211D]/10 rounded-sm"></div>
                        <div className="col-span-1 bg-[#2B211D]/10 rounded-sm"></div>
                        <div className="col-span-2 bg-[#702C3B]/10 rounded-sm"></div>
                      </div>
                      <div className="absolute top-12 left-12 bg-white/80 backdrop-blur-md p-4 shadow-xl border border-[#2B211D]/10">
                        <div className="w-16 h-1 bg-[#2B211D]/20 mb-2"></div>
                        <div className="w-24 h-1 bg-[#2B211D]/20"></div>
                      </div>
                    </div>
                  )}

                  {project.id === 'fashion' && (
                    <div className="absolute inset-0 bg-[#E9DED1] flex flex-col p-8 overflow-hidden items-center justify-center">
                      <div className="w-full h-full border border-[#702C3B]/10 p-2 relative flex items-center justify-center">
                        <div className="w-2/3 h-5/6 bg-[#30211D] relative overflow-hidden shadow-2xl">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-[#702C3B]/20 rotate-12 blur-xl"></div>
                          <div className="absolute bottom-4 left-4">
                            <h2 className="font-serif text-3xl italic text-[#E9DED1]">F/W 26</h2>
                          </div>
                        </div>
                        <div className="absolute -right-4 top-1/4 w-1/3 h-1/2 bg-[#B69A62] shadow-xl mix-blend-multiply opacity-80"></div>
                      </div>
                    </div>
                  )}

                  {/* Fallback if ID doesn't match */}
                  {!['intentflow', 'wedora', 'pransh', 'aasamant', 'fashion'].includes(project.id) && (
                    <div className="absolute inset-0 bg-section flex flex-col items-center justify-center">
                       <span className="font-display text-4xl italic opacity-50">0{idx + 1}</span>
                       <h3 className="font-display text-3xl font-light mt-4">{project.name}</h3>
                    </div>
                  )}

                  {/* Overlay Title */}
                  <div className="absolute top-8 left-8 z-20 pointer-events-none mix-blend-difference text-white">
                     <span className="text-[9px] tracking-[0.4em] uppercase font-sans opacity-80 block mb-2">Project Preview</span>
                     <h3 className="font-display text-3xl md:text-4xl">{project.name}</h3>
                  </div>

                </div>

                {/* Hover Reveal CTA */}
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-xs font-sans tracking-[0.3em] uppercase border-b border-white pb-1">
                    Enter Cinematic Experience
                  </span>
                </div>
              </div>

              {/* Editorial Details Column */}
              <div className="w-full lg:w-2/5 flex flex-col gap-10">
                <div>
                  <h3 className="text-[9px] tracking-[0.3em] font-sans text-primary uppercase mb-4 border-b border-foreground/10 pb-4">
                    Project Overview
                  </h3>
                  <p className="font-display text-3xl font-medium text-foreground mb-6 leading-[1.2]">{project.idea}</p>
                  <p className="font-sans text-sm font-light text-foreground-muted leading-relaxed">{project.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Role</h4>
                    <p className="font-sans text-xs text-foreground uppercase tracking-wider">{project.role.split(' ')[0]} Dev</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase mb-3">Tech</h4>
                    <div className="flex flex-col gap-1">
                      {project.technologies.slice(0, 3).map(tech => (
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
                      className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit"
                    >
                      <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
                      Visit Live Site
                    </a>
                  ) : (
                    <p className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">Deployment Pending</p>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit"
                    >
                      <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
                      View Source
                    </a>
                  )}
                  <button 
                    onClick={() => handleCinematicView(project.id)}
                    className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-sans text-primary uppercase transition-colors hover:text-foreground w-fit"
                  >
                    <span className="w-6 h-[1px] bg-primary group-hover:bg-foreground transition-colors"></span>
                    Cinematic View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
