"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-bg border-t border-white/10 pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-3xl font-heading font-semibold tracking-widest text-brand-text">SUHAS</h2>
            <p className="text-brand-text-secondary text-sm leading-relaxed max-w-xs">
              Where culinary art meets timeless elegance. Experience dining reimagined in the heart of the city.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-bg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-bg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-bg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-brand-text-secondary text-sm">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-brand-gold transition-colors">Experience</a></li>
              <li><a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a></li>
              <li><a href="#chef" className="hover:text-brand-gold transition-colors">Chef</a></li>
              <li><a href="#reservations" className="hover:text-brand-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-brand-text-secondary text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-brand-gold shrink-0" />
                <span>123 Luxury Avenue, <br />Culinary District, NY 10001</span>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>reservations@suhasdining.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-brand-text-secondary text-sm mb-4">Subscribe for exclusive invitations and seasonal menu updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-brand-gold transition-colors text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-brand-text-secondary text-xs">
          <p>© {new Date().getFullYear()} Suhas Restaurant. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
