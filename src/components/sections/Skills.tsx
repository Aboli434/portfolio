"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "Interaction, Motion & 3D",
    skills: ["Framer Motion", "React Three Fiber", "Three.js", "GSAP", "Responsive Design", "Figma"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Fastify", "REST APIs", "OpenAI API", "State Management", "Data Architecture"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "npm/pnpm", "ESLint", "Prettier"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 bg-section relative overflow-hidden">
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
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 03</span>
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
              A curated selection of the technologies and frameworks I use to engineer robust, interactive digital experiences.
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
              
              <ul className="grid grid-cols-2 gap-y-4 gap-x-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-foreground font-sans font-light text-sm hover:text-primary transition-colors duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
