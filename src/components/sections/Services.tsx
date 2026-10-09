"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Business Websites",
    description: "Responsive, performant websites designed to establish credibility, clearly communicate your value, and generate qualified leads. Built on modern tech to ensure fast loading and robust SEO."
  },
  {
    title: "Premium Interactive Websites",
    description: "For brands that need to stand out. Integrating fluid animations, scroll-triggered interactions, and custom 3D elements to create immersive digital experiences."
  },
  {
    title: "Website Upgrades & Maintenance",
    description: "Revamping existing platforms with modern architecture. Improving performance, fixing responsive issues, and ensuring your site remains secure and up to date."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-section relative overflow-hidden scroll-mt-24">
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
              <span className="text-[9px] tracking-[0.3em] font-sans text-foreground uppercase">Offerings</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
              Core <span className="italic text-primary">Services</span>.
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
              Delivering high-quality digital solutions tailored to your business goals.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-foreground/10 pb-12"
            >
              <div className="w-full md:w-1/3 flex items-start gap-4">
                <span className="text-xs font-sans text-foreground-muted tracking-[0.2em] mt-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium tracking-wide">
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-2/3 flex flex-col items-start gap-6">
                <p className="text-foreground-muted font-sans font-light text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="group relative flex items-center gap-3 text-[10px] tracking-[0.2em] font-medium text-foreground uppercase hover:text-primary transition-colors duration-500"
                >
                  <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors duration-500"></span>
                  Enquire about this service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
