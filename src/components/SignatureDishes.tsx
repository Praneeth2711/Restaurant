"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    name: "Truffle Wagyu Steak",
    ingredients: "A5 Wagyu, Black Truffle, Pomme Purée",
    cals: "850 kcal",
    price: "$125",
    // Unsplash placeholder for premium steak
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop", 
  },
  {
    name: "Seared Scallops",
    ingredients: "Hokkaido Scallops, Caviar, Saffron Foam",
    cals: "420 kcal",
    price: "$65",
    // Unsplash placeholder for scallops/seafood
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=2051&auto=format&fit=crop",
  },
  {
    name: "Lobster Thermidor",
    ingredients: "Blue Lobster, Cognac, Gruyère",
    cals: "720 kcal",
    price: "$95",
    // Unsplash placeholder for lobster
    image: "https://images.unsplash.com/photo-1553659971-f01207815844?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="py-32 bg-brand-bg-secondary relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading text-brand-text mb-4"
        >
          Signature Dishes
        </motion.h2>
        <div className="w-24 h-[1px] bg-brand-gold" />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-16 snap-x snap-mandatory hide-scrollbar">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex-none w-[85vw] md:w-[400px] rounded-3xl overflow-hidden bg-brand-bg border border-white/5 snap-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-brand-bg/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 -mt-20">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-2xl font-heading text-white font-medium">{dish.name}</h3>
                <span className="text-xl font-number text-brand-gold">{dish.price}</span>
              </div>
              
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                <p className="text-brand-text-secondary text-sm mb-2">{dish.ingredients}</p>
                <p className="text-white/40 text-xs font-number mb-6">{dish.cals}</p>
                
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  Reserve for this Dish
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
