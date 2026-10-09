export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-16 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start md:flex-row justify-between gap-10">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="font-display text-4xl font-light text-foreground mb-4">Aboli<span className="italic text-primary">.</span></div>
          <div className="text-[9px] text-foreground-muted font-sans tracking-[0.3em] uppercase">
            © 2026 Interactive Web Experience.
          </div>
        </div>
        
        <div className="flex gap-10 text-[9px] tracking-[0.3em] text-foreground-muted font-sans uppercase">
          <a href="https://www.linkedin.com/in/aboli-risbud-467708251" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors focus:outline-none">LinkedIn</a>
          <a href="https://github.com/Aboli434" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors focus:outline-none">GitHub</a>
        </div>
        
      </div>
    </footer>
  );
}
