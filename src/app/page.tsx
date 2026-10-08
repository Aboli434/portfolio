"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/navigation/Navigation";
import Cursor from "@/components/ui/Cursor";
import ProjectDetail from "@/components/sections/ProjectDetail";
import AINarrator from "@/components/ai/AINarrator";
import { useStore } from "@/lib/store";

export default function Home() {
  const { phase, setPhase } = useStore();

  return (
    <main 
      className="relative w-full h-screen overflow-hidden bg-[#050507]"
    >
      {/* 3D Background - Only interactive during Universe phase */}
      <div className={`absolute inset-0 z-0 ${phase === 'universe' ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <Scene />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Navigation />
        
        <AnimatePresence>
          {phase === 'hero' && (
            <Hero onStart={() => setPhase('universe')} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === 'project' && (
            <ProjectDetail />
          )}
        </AnimatePresence>

        <AINarrator />
      </div>
    </main>
  );
}
