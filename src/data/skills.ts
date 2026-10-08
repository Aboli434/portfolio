export type Skill = {
  name: string;
  category: "Frontend" | "Animation" | "Backend" | "AI" | "Tools";
  description: string;
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend", description: "Used across my projects for building component-based interfaces and interactive experiences." },
  { name: "Next.js", category: "Frontend", description: "Building scalable, server-rendered applications and APIs." },
  { name: "TypeScript", category: "Frontend", description: "Ensuring type safety and robust architecture in my applications." },
  { name: "JavaScript", category: "Frontend", description: "Core language for web interactions." },
  { name: "Tailwind CSS", category: "Frontend", description: "Rapid, utility-first styling for modern responsive interfaces." },
  { name: "Three.js", category: "Animation", description: "Creating immersive 3D web experiences." },
  { name: "React Three Fiber", category: "Animation", description: "Declarative 3D within React for complex interactive scenes." },
  { name: "Framer Motion", category: "Animation", description: "Orchestrating smooth, complex UI animations." },
  { name: "GSAP", category: "Animation", description: "High-performance timeline-based animations." },
  { name: "Lenis", category: "Animation", description: "Smooth scrolling for cinematic web experiences." },
  { name: "Node.js", category: "Backend", description: "Server-side JavaScript environment." },
  { name: "Fastify", category: "Backend", description: "High-performance backend web framework." },
  { name: "REST APIs", category: "Backend", description: "Designing and integrating robust APIs." },
  { name: "OpenAI APIs", category: "AI", description: "Integrating intelligent AI models into applications." },
  { name: "AI integrations", category: "AI", description: "Connecting AI capabilities to product workflows." },
  { name: "Git", category: "Tools", description: "Version control for reliable development." },
  { name: "GitHub", category: "Tools", description: "Collaborative code hosting and CI/CD." },
  { name: "Vercel", category: "Tools", description: "Deploying high-performance frontend applications." },
];
