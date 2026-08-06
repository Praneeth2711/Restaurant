"use client";

import { motion } from "framer-motion";

export default function Chef() {
  return (
    <section id="chef" className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10" />
            <img 
              // Unsplash placeholder for chef
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop" 
              alt="Chef Marco"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          {/* Bio & Details */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-heading text-brand-text mb-4"
            >
              Meet Chef <span className="italic text-brand-gold">Marco.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-text-secondary text-lg leading-relaxed mb-8"
            >
              With over two decades of culinary mastery across Europe's finest kitchens, 
              Chef Marco brings a philosophy of simplicity elevated by technique. 
              Every dish is a testament to his dedication to sourcing the finest seasonal 
              ingredients and transforming them into works of edible art.
            </motion.p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-4xl font-number text-brand-gold mb-2">25</h4>
                <p className="text-brand-text-secondary uppercase tracking-widest text-xs font-bold">Years Experience</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h4 className="text-4xl font-number text-brand-gold mb-2">2</h4>
                <p className="text-brand-text-secondary uppercase tracking-widest text-xs font-bold">Michelin Stars</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
