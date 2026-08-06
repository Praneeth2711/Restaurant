"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-bg-secondary/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading text-brand-text mb-4"
            >
              Reserve a Table
            </motion.h2>
            <p className="text-brand-text-secondary">Join us for an unforgettable dining experience.</p>
          </div>

          {!isSubmitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Phone</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Guests</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option className="bg-brand-bg text-white">2 People</option>
                  <option className="bg-brand-bg text-white">3 People</option>
                  <option className="bg-brand-bg text-white">4 People</option>
                  <option className="bg-brand-bg text-white">5+ People</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Date</label>
                <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Time</label>
                <input required type="time" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-text-secondary pl-4">Special Requests (Occasion, Allergies)</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Let us know how we can make your visit special..." />
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full bg-brand-gold text-white font-medium rounded-full py-4 text-lg hover:bg-white hover:text-brand-bg transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  Confirm Reservation
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl mb-4">
                ✓
              </div>
              <h3 className="text-3xl font-heading text-white">Request Received</h3>
              <p className="text-brand-text-secondary">We will contact you shortly to confirm your table.</p>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
