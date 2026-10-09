"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { projects } from "@/data/projects";
import { SpeechService } from "@/lib/speechService";
import { useEffect } from "react";

// Project Components
import IntentFlow from "../projects/IntentFlow";
import Wedora from "../projects/Wedora";
import Pransh from "../projects/Pransh";
import Aasamant from "../projects/Aasamant";
import Fashion from "../projects/Fashion";

export default function ProjectDetail() {
  const { activeProjectId, setPhase, setActiveProject, setAiStatus, setAiSubtitle, aiStatus } = useStore();
  const project = projects.find(p => p.id === activeProjectId);

  // Auto-play narration when project opens
  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    if (project && project.aiNarration) {
      const svc = SpeechService.getInstance();
      svc.stop(); // Stop any existing speech
      
      const n = project.aiNarration;
      const text = `${n.intro} ${n.problem} ${n.approach} ${n.role}`;
      setAiSubtitle(text);
      setAiStatus('speaking');
      
      svc.speak(text, () => {
        setAiStatus('idle');
        setTimeout(() => {
          if (useStore.getState().aiStatus === 'idle') setAiSubtitle(null);
        }, 3000);
      });
    }
    
    return () => {
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Cleanup on unmount (back to universe)
      SpeechService.getInstance().stop();
      setAiStatus('idle');
      setAiSubtitle(null);
    };
  }, [project?.id]); // Only re-run when project ID changes

  if (!project) return null;

  const handleBack = () => {
    SpeechService.getInstance().stop();
    setAiStatus('idle');
    setAiSubtitle(null);
    setActiveProject(null);
    // After state clears, scroll to the projects section
    requestAnimationFrame(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const renderProjectComponent = () => {
    switch (project.id) {
      case 'intentflow': return <IntentFlow project={project} />;
      case 'wedora': return <Wedora project={project} />;
      case 'pransh': return <Pransh project={project} />;
      case 'aasamant': return <Aasamant project={project} />;
      case 'fashion': return <Fashion project={project} />;
      default: return null;
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col pointer-events-auto bg-background text-foreground overflow-y-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30, transition: { duration: 0.3, ease: "easeIn" } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full min-h-screen flex flex-col relative container mx-auto px-6 md:px-12 max-w-6xl py-8">
        
        {/* Header / Nav */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-5 bg-background border-b border-foreground/5">
          <button 
            onClick={handleBack}
            className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium hover:text-primary text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 rounded transition-colors flex items-center gap-3 group"
          >
            <div className="w-6 sm:w-8 h-px bg-foreground/70 group-hover:bg-primary group-hover:w-12 transition-all duration-300 motion-reduce:transition-none" />
            <span>BACK TO PROJECTS</span>
          </button>

          {/* Narration Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-muted hidden sm:block">
              NARRATION
            </span>
            <button 
              onClick={() => {
                const svc = SpeechService.getInstance();
                svc.stop();
                const n = project.aiNarration;
                if (n) {
                  const text = `${n.intro} ${n.problem} ${n.approach} ${n.role}`;
                  setAiSubtitle(text);
                  setAiStatus('speaking');
                  svc.speak(text, () => {
                    setAiStatus('idle');
                    setTimeout(() => {
                      if (useStore.getState().aiStatus === 'idle') setAiSubtitle(null);
                    }, 3000);
                  });
                }
              }}
              className="text-[10px] uppercase tracking-widest text-foreground/60 hover:text-primary focus:outline-none focus:text-primary transition-colors"
            >
              REPLAY
            </button>
            <button 
              onClick={() => {
                SpeechService.getInstance().stop();
                setAiStatus('idle');
                setAiSubtitle(null);
              }}
              className="text-[10px] uppercase tracking-widest text-foreground/60 hover:text-primary focus:outline-none focus:text-primary transition-colors"
            >
              STOP
            </button>
          </div>
        </div>

        {/* Project Content */}
        <div className="flex-1 p-6 md:p-8 pt-6">
          {renderProjectComponent()}

          {/* External Links Footer */}
          <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row gap-6 pb-8">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit">
                <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
                EXPLORE LIVE
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-sans text-foreground uppercase transition-colors hover:text-primary w-fit">
                <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors"></span>
                VIEW CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
