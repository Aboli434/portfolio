"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "Understanding your business goals, target audience, and the core message we need to communicate."
  },
  {
    title: "Design Direction",
    description: "Creating a visual language and structural layout that aligns with your brand identity and appeals to your market."
  },
  {
    title: "Development",
    description: "Building the website with modern, reliable technologies ensuring speed, responsiveness, and accessibility."
  },
  {
    title: "Review",
    description: "Collaborative testing and refinement to ensure everything works flawlessly and meets your expectations."
  },
  {
    title: "Launch",
    description: "Deploying your new website, connecting domains, and ensuring a smooth transition to your live online presence."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-40 bg-background relative overflow-hidden scroll-mt-24">
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
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground-muted uppercase">N° 04</span>
              <span className="w-16 h-px bg-foreground/20"></span>
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Methodology</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
              The <span className="italic text-primary">Process</span>.
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
              A structured approach from concept to deployment, ensuring clarity and quality at every step.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 relative"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-sans text-primary tracking-[0.2em] whitespace-nowrap">STEP 0{idx + 1}</span>
                <div className="w-full h-[1px] bg-foreground/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute left-0 top-0 h-full bg-primary/30"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: idx * 0.15 + 0.3, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: "backOut" }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground font-medium mb-3">{step.title}</h3>
                <p className="text-foreground-muted font-sans font-light text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
