"use client";

import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { projects } from "@/data/projects";
import { SpeechService } from "@/lib/speechService";

export default function ProjectDetail() {
  const { activeProjectId, setPhase, setActiveProject } = useStore();
  const project = projects.find(p => p.id === activeProjectId);

  if (!project) return null;

  const handleBack = () => {
    setActiveProject(null);
  };

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-end pointer-events-auto p-8 md:p-16 z-20"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeIn" } }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 lg:w-1/3 h-full flex flex-col justify-center gap-8">
        
        <button 
          onClick={handleBack}
          className="self-start text-xs tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors flex items-center gap-3 group"
        >
          <div className="w-8 h-px bg-white group-hover:w-12 transition-all duration-300" />
          <span>BACK TO UNIVERSE</span>
        </button>

        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight uppercase leading-[0.9] text-white mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-white/40 font-medium">THE PROBLEM</h3>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-white/40 font-medium">THE IDEA</h3>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {project.idea}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-white/40 font-medium">MY ROLE</h3>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              {project.role}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-white/40 font-medium">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 pb-10">
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors pointer-events-auto">
                  EXPLORE LIVE
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/20 text-white font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors pointer-events-auto">
                  VIEW CODE
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-6">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-white/40">
                NARRATION
              </span>
              <button 
                onClick={() => {
                  const store = useStore.getState();
                  const svc = SpeechService.getInstance();
                  const n = project.aiNarration;
                  if (n) {
                    const text = `${n.intro} ${n.problem} ${n.approach} ${n.role} ${n.technologies} ${n.technicalHighlight}`;
                    store.setAiSubtitle(text);
                    store.setAiStatus('speaking');
                    svc.speak(text, () => {
                      store.setAiStatus('idle');
                      setTimeout(() => {
                        if (useStore.getState().aiStatus === 'idle') store.setAiSubtitle(null);
                      }, 3000);
                    });
                  }
                }}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors pointer-events-auto"
              >
                REPLAY
              </button>
              <button 
                onClick={() => {
                  const store = useStore.getState();
                  SpeechService.getInstance().stop();
                  store.setAiStatus('idle');
                  store.setAiSubtitle(null);
                }}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors pointer-events-auto"
              >
                STOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
