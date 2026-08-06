"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium leading-[1.1] text-brand-text"
          >
            Crafted for <br />
            <span className="italic text-brand-gold">Extraordinary</span> <br />
            Dining Experiences
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-lg md:text-xl text-brand-text-secondary max-w-lg font-light leading-relaxed"
          >
            A Michelin-inspired culinary destination where every meal is designed to be unforgettable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a href="#reservations" className="px-8 py-4 bg-white text-brand-bg font-medium rounded-full text-center hover:bg-brand-gold hover:text-white transition-colors duration-300">
              Reserve a Table
            </a>
            <a href="#menu" className="px-8 py-4 bg-transparent border border-white/20 text-brand-text font-medium rounded-full text-center hover:bg-white/5 transition-colors duration-300">
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* Right Content / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative h-[400px] md:h-[600px] w-full hidden lg:block"
        >
          {/* Using a placeholder gradient visual to represent the 3D plate/interior for now */}
          <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center relative shadow-[0_0_100px_rgba(212,175,55,0.1)]">
            <div className="w-3/4 h-3/4 rounded-full border border-brand-gold/30 animate-[spin_60s_linear_infinite] flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-brand-bg-secondary via-brand-gold/10 to-transparent flex items-center justify-center backdrop-blur-sm overflow-hidden">
                   {/* Fallback image if needed, for now an elegant abstract circle */}
                   <div className="w-1/2 h-1/2 bg-brand-gold/20 rounded-full blur-2xl animate-pulse" />
                </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-brand-text-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-text-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
