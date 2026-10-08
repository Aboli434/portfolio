export type Project = {
  id: string;
  name: string;
  description: string;
  problem: string;
  idea: string;
  role: string;
  technologies: string[];
  challenges: string;
  learnings: string;
  liveUrl?: string;
  githubUrl?: string;
  aiNarration: {
    intro: string;
    problem: string;
    approach: string;
    role: string;
    technologies: string;
    technicalHighlight: string;
  };
};

export const projects: Project[] = [
  {
    id: "intentflow",
    name: "IntentFlow",
    description: "AI-powered workflow/productivity platform. AI turns messy communication into structured work.",
    problem: "Messy communication slows down workflows and productivity.",
    idea: "Use AI to turn unstructured communication into organized tasks and workflows.",
    role: "Developed the frontend, backend, and integrated AI features.",
    technologies: ["Next.js", "React", "React Native", "TypeScript", "Fastify", "OpenAI", "Database architecture"],
    challenges: "Handling real-time AI processing and structuring unstructured data reliably.",
    learnings: "Advanced AI API integration, complex state management, and full-stack architecture.",
    aiNarration: {
      intro: "You're looking at IntentFlow, an AI-powered workflow platform designed to turn messy client communication into structured development tasks.",
      problem: "The goal was to solve the translation gap between what clients say and what developers actually need to build.",
      approach: "Aboli created an experience where unstructured thoughts are automatically parsed by an AI agent into actionable work.",
      role: "She worked across the full stack, designing the UI and integrating the OpenAI API.",
      technologies: "The platform is built with Next.js, React, TypeScript, Fastify, and complex database architecture.",
      technicalHighlight: "A key highlight was managing real-time AI processing and complex state reliably."
    }
  },
  {
    id: "wedora",
    name: "Wedora",
    description: "Premium Indian wedding planning and vendor management platform.",
    problem: "Finding and managing premium wedding vendors is scattered and stressful.",
    idea: "A luxury, unified platform for premium wedding planning with an exceptional user experience.",
    role: "Frontend Development & UI/UX Implementation.",
    technologies: ["React", "Next.js", "Animations", "Responsive Design"],
    challenges: "Creating smooth, premium animations without sacrificing performance.",
    learnings: "Advanced animation systems, premium UI implementation, and performance optimization.",
    aiNarration: {
      intro: "This is Wedora, a premium Indian wedding planning platform.",
      problem: "It addresses the scattered and stressful process of managing luxury wedding vendors.",
      approach: "The solution was to build a unified, high-end digital experience that feels luxurious and seamless.",
      role: "Aboli focused on the frontend development and UI/UX implementation.",
      technologies: "It uses React and Next.js extensively.",
      technicalHighlight: "The major technical focus was creating smooth, premium animations without sacrificing browser performance."
    }
  },
  {
    id: "pransh",
    name: "PRANSH",
    description: "Agriculture/farm brand website telling the journey from farming to rice production.",
    problem: "Traditional farm brands lack compelling digital storytelling.",
    idea: "Use 3D and storytelling to show the journey of rice production.",
    role: "Frontend Developer and Creative Developer.",
    technologies: ["React", "3D Interactions", "Animation"],
    challenges: "Optimizing 3D assets for a smooth experience across devices.",
    learnings: "Web 3D integration, storytelling through scroll animations, and multilingual support.",
    aiNarration: {
      intro: "Welcome to PRANSH, an interactive agriculture brand experience.",
      problem: "The project brings compelling digital storytelling to a traditional farm brand.",
      approach: "It visually communicates the journey from raw farming to refined rice production through 3D and scroll animations.",
      role: "Aboli acted as both Frontend and Creative Developer.",
      technologies: "It relies on React, 3D interactions, and advanced animation techniques.",
      technicalHighlight: "A significant achievement here was optimizing the 3D assets to ensure a smooth, cinematic experience across all devices."
    }
  },
  {
    id: "aasamant",
    name: "Aasamant",
    description: "Hospitality website built from Figma designs with responsive layouts and animations.",
    problem: "Hospitality business needed a modern, high-quality digital presence.",
    idea: "Translate high-fidelity Figma designs into a pixel-perfect, interactive React application.",
    role: "Frontend Developer.",
    technologies: ["React", "Figma", "Animations"],
    challenges: "Ensuring pixel-perfect implementation from design to code across all screen sizes.",
    learnings: "Figma-to-React translation, responsive layout systems, and robust deployment pipelines.",
    aiNarration: {
      intro: "This is Aasamant, a high-quality digital presence for a hospitality business.",
      problem: "The client needed a modern, interactive platform that accurately reflected their real-world quality.",
      approach: "Aboli translated high-fidelity Figma designs into a pixel-perfect, interactive React application.",
      role: "She served as the primary Frontend Developer.",
      technologies: "The stack is focused on React and complex CSS animations.",
      technicalHighlight: "The main focus was ensuring pixel-perfect implementation and robust responsive layouts across every screen size."
    }
  }
];
