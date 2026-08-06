"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop", // Restaurant interior
  "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?q=80&w=2070&auto=format&fit=crop", // Plated dish
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop", // Wine pouring
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // Restaurant table
  "https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=2070&auto=format&fit=crop", // Dessert
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", // Chef cooking
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-brand-bg relative z-10">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading text-brand-text mb-4"
        >
          The <span className="italic text-brand-gold">Suhas</span> Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-text-secondary max-w-2xl mx-auto"
        >
          A visual journey through our culinary creations and immersive atmosphere.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white border border-white/30 rounded-full px-6 py-2 uppercase tracking-widest text-xs">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
