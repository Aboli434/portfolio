"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

export default function Wedora({ project }: { project: Project }) {
  return (
    <div className="flex flex-col xl:flex-row-reverse gap-12 w-full h-full">
      {/* Visual Scene */}
      <div className="w-full xl:w-1/2 flex items-center justify-center relative min-h-[300px]">
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#d4af37]/20">
          <Image
            src="/projects/wedora.jpg"
            alt="Wedora – Premium wedding planning platform screenshot"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#30211D]/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase">Live Preview</span>
          </div>
        </div>
      </div>



      {/* Project Details */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-8">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-wide leading-[0.9] text-foreground mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-foreground-muted font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="h-px w-full bg-foreground/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-primary font-medium uppercase">The Challenge</h3>
            <p className="text-sm text-foreground-muted font-light leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] text-primary font-medium uppercase">The Vision</h3>
            <p className="text-sm text-foreground-muted font-light leading-relaxed">
              {project.idea}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs tracking-[0.2em] text-primary font-medium uppercase">My Role & Stack</h3>
          <p className="text-sm text-foreground-muted font-light leading-relaxed mb-4">
            {project.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-section border border-border text-xs text-foreground-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
