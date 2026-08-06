"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Food Critic",
    text: "A masterclass in modern dining. Every course was a revelation of flavor and texture.",
  },
  {
    name: "David Chen",
    role: "Business Executive",
    text: "The perfect venue for impressing clients. The service is impeccable and the atmosphere is pure luxury.",
  },
  {
    name: "Elena Rodriguez",
    role: "Culinary Enthusiast",
    text: "Chef Marco has truly outdone himself. The truffle wagyu is the best I've had in my life.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-brand-text mb-4">Guest Experiences</h2>
          <p className="text-brand-text-secondary">What our diners say about their time with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-brand-bg-secondary p-8 rounded-3xl border border-white/5 relative group hover:bg-white/5 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-sm">★</span>
                ))}
              </div>
              
              <p className="text-brand-text-secondary italic mb-8 relative z-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gold font-heading text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-brand-text-secondary text-sm">{t.role}</p>
                </div>
              </div>
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
