"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Menu", href: "#menu" },
  { name: "Chef", href: "#chef" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-bg-secondary/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-heading font-semibold tracking-widest text-brand-text">
          SUHAS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#reservations"
            className="px-6 py-2.5 bg-white text-brand-bg font-medium text-sm rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 uppercase tracking-wide"
          >
            Reserve a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-brand-bg-secondary border-b border-white/5 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-heading text-brand-text hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 bg-brand-gold text-white text-center font-medium rounded-full"
          >
            Reserve a Table
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
