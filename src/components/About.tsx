"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "1998", title: "First Restaurant", desc: "A humble beginning focused on authentic flavors." },
  { year: "2010", title: "Award Winning Chef", desc: "Chef Marco receives national recognition." },
  { year: "2018", title: "Michelin Inspired", desc: "Elevating the menu to world-class standards." },
  { year: "Today", title: "Global Icon", desc: "Setting the benchmark for luxury dining." },
];

export default function About() {
  return (
    <section id="experience" className="py-32 bg-brand-bg relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading text-brand-text mb-6"
          >
            A Legacy of <span className="italic text-brand-gold">Perfection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-text-secondary text-lg"
          >
            Our journey from a local favorite to a Michelin-inspired destination.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 md:gap-24 relative">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 w-full md:text-right px-12 relative">
                    <div className={`absolute top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] ${
                      isEven ? "-left-2 md:-left-2" : "-left-2 md:auto md:-right-2"
                    }`} />
                    <h3 className="text-5xl md:text-7xl font-number text-white/5 font-bold md:mb-4">{item.year}</h3>
                  </div>
                  
                  <div className={`flex-1 w-full px-12 ${isEven ? "md:text-left" : "md:text-left"}`}>
                    <h4 className="text-2xl font-heading text-brand-gold mb-2">{item.title}</h4>
                    <p className="text-brand-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
