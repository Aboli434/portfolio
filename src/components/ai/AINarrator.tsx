"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { SpeechService } from "@/lib/speechService";
import { projects } from "@/data/projects";
import { portfolioKnowledge } from "@/data/portfolio";

export default function AINarrator() {
  const { 
    phase, 
    activeProjectId, 
    aiStatus, 
    setAiStatus, 
    aiSubtitle, 
    setAiSubtitle 
  } = useStore();
  
  const speechService = SpeechService.getInstance();
  const currentSpeechRef = useRef<string | null>(null);

  const startNarration = (text: string) => {
    if (currentSpeechRef.current === text) return;
    
    currentSpeechRef.current = text;
    speechService.stop();
    setAiSubtitle(text);
    setAiStatus('speaking');
    
    if (speechService.isSupported()) {
      speechService.speak(text, () => {
        setAiStatus('idle');
        // keep subtitle visible or hide it? Let's hide it after 3s
        setTimeout(() => {
          if (useStore.getState().aiStatus === 'idle') {
            setAiSubtitle(null);
          }
        }, 3000);
      });
    } else {
      // Fake delay for unsupported browsers to show subtitles
      setTimeout(() => {
        setAiStatus('idle');
        setTimeout(() => {
          if (useStore.getState().aiStatus === 'idle') {
            setAiSubtitle(null);
          }
        }, 3000);
      }, text.length * 50); // rough estimate
    }
  };

  useEffect(() => {
    if (phase === 'universe' || phase === 'hero') {
      speechService.stop();
      currentSpeechRef.current = null;
      setAiStatus('idle');
      setAiSubtitle(null);
    } else if (phase === 'project' && activeProjectId) {
      const project = projects.find(p => p.id === activeProjectId);
      if (project?.aiNarration) {
        // Compile narration into one string
        const n = project.aiNarration;
        const text = `${n.intro} ${n.problem} ${n.approach} ${n.role} ${n.technologies} ${n.technicalHighlight}`;
        startNarration(text);
      }
    }
  }, [phase, activeProjectId]);

  return (
    <AnimatePresence>
      {aiSubtitle && (
        <motion.div 
          className={`fixed w-[90%] max-w-sm bg-[#0a0a0c]/90 backdrop-blur-md border border-white/10 p-6 z-[90] pointer-events-none transition-all duration-1000 ${
            phase === 'hero' ? 'top-1/4 right-8 md:right-16' : 
            phase === 'universe' ? 'top-20 right-8 md:right-16' : 
            'bottom-12 left-8 md:left-16'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex h-2 w-2">
              {aiStatus === 'speaking' && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              )}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
            <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-white/50">
              ABOLI
            </span>
          </div>
          <p className="text-sm md:text-base text-white/90 font-light leading-relaxed text-left">
            {aiSubtitle}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
