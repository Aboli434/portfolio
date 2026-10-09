"use client";

import { useStore } from "@/lib/store";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/navigation/Navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";

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
      <a href="#about" className="absolute left-0 top-0 -translate-y-full focus:translate-y-0 bg-primary text-white p-3 z-[100] transition-transform">
        Skip to main content
      </a>
      
      {/* GLOBAL NAVIGATION */}
      <div className={phase === 'project' ? 'hidden' : 'block'}>
        <Navigation />
      </div>

      {/* EDITORIAL HERO */}
      <section id="home" className="relative w-full h-[100svh] bg-background overflow-hidden">
        <Hero />
      </section>

      {/* PROJECT DETAIL OVERLAY */}
      <AnimatePresence>
        {phase === 'project' && (
          <ProjectDetail />
        )}
      </AnimatePresence>

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
