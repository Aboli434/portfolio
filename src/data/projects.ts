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
    id: "aasamant",
    name: "Aasamant",
    description: "Hospitality website built from Figma designs with responsive layouts and animations.",
    problem: "Hospitality business needed a modern, high-quality digital presence.",
    idea: "Translate high-fidelity Figma designs into a pixel-perfect, interactive React application.",
    role: "Frontend Developer.",
    technologies: ["React", "Figma", "Animations"],
    challenges: "Ensuring pixel-perfect implementation from design to code across all screen sizes.",
    learnings: "Figma-to-React translation, responsive layout systems, and robust deployment pipelines.",
    liveUrl: "https://aasamanthospitality.com/",
    aiNarration: {
      intro: "This is Aasamant, a high-quality digital presence I built for a hospitality business.",
      problem: "The client needed a modern, interactive platform that accurately reflected their real-world quality.",
      approach: "I translated high-fidelity Figma designs into a pixel-perfect, interactive React application.",
      role: "I served as the primary Frontend Developer.",
      technologies: "I focused the stack on React and complex CSS animations.",
      technicalHighlight: "My main focus was ensuring pixel-perfect implementation and robust responsive layouts across every screen size."
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
    liveUrl: "https://wedora-rho.vercel.app/",
    aiNarration: {
      intro: "For Wedora, I focused on creating a premium wedding-planning experience with elegant visuals and smooth interactions.",
      problem: "It addresses the scattered and stressful process of managing luxury wedding vendors.",
      approach: "My solution was to build a unified, high-end digital experience that feels luxurious and seamless.",
      role: "I focused on the frontend development and UI/UX implementation.",
      technologies: "I used React and Next.js extensively.",
      technicalHighlight: "My major technical focus was creating smooth, premium animations without sacrificing browser performance."
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
    liveUrl: "https://pransh.vercel.app/",
    aiNarration: {
      intro: "With PRANSH, I explored storytelling through an immersive digital experience for an agricultural brand.",
      problem: "The goal was to bring compelling digital storytelling to a traditional farm brand.",
      approach: "I visually communicated the journey from raw farming to refined rice production through 3D and scroll animations.",
      role: "I acted as both Frontend and Creative Developer.",
      technologies: "I relied on React, 3D interactions, and advanced animation techniques.",
      technicalHighlight: "A significant achievement for me here was optimizing the 3D assets to ensure a smooth, cinematic experience across all devices."
    }
  },
  {
    id: "fashion",
    name: "Fashion Designer",
    description: "Elegant visual design, responsive layouts, animations, and showcasing a fashion designer's work.",
    problem: "Fashion portfolios require a high degree of visual polish and elegant animations to reflect the brand's aesthetic.",
    idea: "Create a distinctive, premium fashion-editorial visual experience that showcases the designer's collections beautifully.",
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "Animations", "Tailwind CSS"],
    challenges: "Implementing sophisticated animations and typography while maintaining responsive layouts.",
    learnings: "Editorial web design, advanced CSS animations, and premium visual storytelling.",
    liveUrl: "https://fashion-designer-mauve.vercel.app/",
    aiNarration: {
      intro: "For the Fashion Designer Website, I focused on an elegant, editorial visual design.",
      problem: "The challenge was translating a high-end fashion aesthetic into a digital portfolio.",
      approach: "I used sophisticated typography, smooth animations, and responsive layouts to showcase the designer's work.",
      role: "I handled the frontend development and visual polish.",
      technologies: "The stack is built on React and Next.js, with custom Tailwind styling.",
      technicalHighlight: "My focus was on fluid animations and ensuring the imagery took center stage."
    }
  },
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
      intro: "This is IntentFlow, a project I've been building to turn unstructured communication into actionable work.",
      problem: "I wanted to solve the translation gap between what clients say and what developers actually need to build.",
      approach: "I created an experience where unstructured thoughts are automatically parsed by an AI agent into actionable work.",
      role: "I worked across the full stack, designing the UI and integrating the OpenAI API.",
      technologies: "I built the platform with Next.js, React, TypeScript, Fastify, and a complex database architecture.",
      technicalHighlight: "A key highlight for me was managing real-time AI processing and complex state reliably."
    }
  }
];
