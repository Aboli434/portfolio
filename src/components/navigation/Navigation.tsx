"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "01", name: "ABOUT", href: "#about" },
  { id: "02", name: "SKILLS", href: "#skills" },
  { id: "03", name: "PROJECTS", href: "#projects" },
  { id: "04", name: "EXPERIENCE", href: "#experience" },
  { id: "05", name: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll state for navbar appearance and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple section tracking
      const sections = links.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 pointer-events-auto ${scrolled ? 'bg-background/95 backdrop-blur-md py-4 shadow-[0_2px_15px_rgba(48,34,29,0.03)] border-b border-foreground/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className={`font-display font-medium text-2xl transition-colors text-foreground hover:text-primary flex items-center gap-1`}
          >
            Aboli<span className="text-primary italic">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[10px] tracking-[0.2em] uppercase font-sans transition-colors relative group ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-primary transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className={`md:hidden text-xs tracking-[0.2em] uppercase font-medium transition-colors group flex items-center gap-3 focus:outline-none p-2 -mr-2 text-foreground hover:text-primary`}
            aria-label="Open Menu"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-2 items-end">
              <div className={`h-[1px] transition-all duration-300 w-6 group-hover:w-4 bg-foreground group-hover:bg-primary`} />
              <div className={`h-[1px] transition-all duration-300 w-4 group-hover:w-6 bg-foreground group-hover:bg-primary`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[100] flex flex-col justify-center items-center pointer-events-auto overflow-y-auto border-l border-border md:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:text-primary transition-colors flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded p-2 z-10"
              aria-label="Close Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-6 h-px bg-foreground rotate-45 group-hover:rotate-[135deg] group-hover:bg-primary transition-transform duration-500" />
                <div className="absolute w-6 h-px bg-foreground -rotate-45 group-hover:-rotate-[135deg] group-hover:bg-primary transition-transform duration-500" />
              </div>
            </button>

            <nav className="flex flex-col items-center gap-8 my-16 z-10 w-full px-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="w-full text-center group flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded py-2 border-b border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                >
                  <span className="text-[10px] text-primary/70 font-mono tracking-widest">{link.id}</span>
                  <span className="font-display text-2xl font-medium tracking-tight text-foreground group-hover:text-primary transition-all duration-300">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
