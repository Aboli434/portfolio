"use client";

import { useStore } from "@/lib/store";
import { AnimatePresence } from "framer-motion";
import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/navigation/Navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import AINarrator from "@/components/ai/AINarrator";

// Actual imports for Phase 2 components
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ProjectsGallery from "@/components/sections/ProjectsGallery";

export default function Home() {
  const { phase, setPhase } = useStore();

  return (
    <main className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent">
      
      {/* GLOBAL NAVIGATION */}
      <div className={phase === 'project' ? 'hidden' : 'block'}>
        <Navigation />
      </div>

      {/* 3D CINEMATIC HERO */}
      <section id="home" className="relative w-full h-[100svh] bg-background overflow-hidden">
        {/* 3D Background */}
        {phase !== 'project' && (
          <div className={`absolute inset-0 z-0 ${phase === 'universe' ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <Scene />
          </div>
        )}
        
        {/* UI Overlay for Hero */}
        <div className="absolute inset-0 z-10 pointer-events-none">
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
      </section>

      {/* SCROLLING CONTENT SECTIONS (Standard DOM) */}
      <div className="relative z-20 bg-background w-full">
        <About />
        <Services />
        <Process />
        <ProjectsGallery />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </main>
  );
}
