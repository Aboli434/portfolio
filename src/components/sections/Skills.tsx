"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Frontend & Architecture",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    demonstratedIn: "Wedora, Aasamant, Fashion Designer"
  },
  {
    title: "Interaction & Motion",
    skills: ["Framer Motion", "GSAP", "CSS Animations", "Smooth Scrolling"],
    demonstratedIn: "Fashion Designer, PRANSH"
  },
  {
    title: "Full-Stack & APIs",
    skills: ["Node.js", "Fastify", "REST APIs", "OpenAI API Integration"],
    demonstratedIn: "IntentFlow"
  },
  {
    title: "3D & WebGL",
    skills: ["React Three Fiber", "Three.js", "3D Optimization"],
    demonstratedIn: "PRANSH, Portfolio Hero"
  }
];

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ConstellationBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { particleCount, positions, colors } = useMemo(() => {
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2;
      
      const color = new THREE.Color(Math.random() > 0.5 ? "#B69A62" : "#702C3B");
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { particleCount, positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} sizeAttenuation />
      </points>
      {/* Subtle connecting lines could be added here, but dots are lighter */}
    </group>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 bg-section relative overflow-hidden scroll-mt-24">
      
      {/* 3D Constellation Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ConstellationBackground />
        </Canvas>
      </div>

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
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 06</span>
              <span className="w-16 h-px bg-foreground/20"></span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Capabilities</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
              Technical <span className="italic text-primary">Index</span>.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:max-w-xs"
          >
            <p className="text-foreground-muted font-sans font-light text-sm leading-relaxed">
              My core competencies, grouped by discipline and linked directly to the work that demonstrates them.
            </p>
          </motion.div>
        </div>

        {/* Editorial Index List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-end justify-between border-b border-foreground/10 pb-4 mb-6">
                <h3 className="font-display text-2xl text-foreground font-medium tracking-wide">
                  {category.title}
                </h3>
                <span className="text-[9px] font-sans text-foreground-muted tracking-[0.2em] mb-1">
                  0{idx + 1}
                </span>
              </div>
              
              <ul className="grid grid-cols-2 gap-y-4 gap-x-4 mb-6">
                {category.skills.map(skill => (
                  <li key={skill} className="text-foreground font-sans font-light text-sm hover:text-primary transition-colors duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-foreground/5">
                <p className="text-xs font-sans text-foreground-muted">
                  <span className="uppercase tracking-widest text-[9px] mr-2 text-primary">Demonstrated in:</span>
                  {category.demonstratedIn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
