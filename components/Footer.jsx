"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Premium transition configurations matching your luxury theme
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 pt-20 pb-8 px-6 border-t border-slate-950 overflow-hidden">
      
      {/* Staggered entry animation wrapper across columns */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
      >
        
        {/* Left Column: Brand Metrics & Contextual Details */}
        <motion.div variants={fadeInUp} className="md:col-span-7 space-y-5">
          <div className="flex items-center space-x-3.5">
            {/* Unified Logo Wrap matching Navbar parameters */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-sm relative bg-brand-yellow shrink-0">
              <Image 
                src="/images/ombapu.png" 
                alt="Om Bapu Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-white text-xl block leading-none">Om Bapu Property Dealers</span>
              <span className="text-[9px] tracking-widest text-brand-gold font-bold uppercase mt-1 block">Premium Real Estate</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xl font-light">
            Your trusted asset partner for identifying, procuring, and leasing signature residential estates, premium corporate infrastructure, and highly fertile agricultural plantations across Panipat.
          </p>
          
          {/* Instagram Anchor Action Handler */}
          <div className="flex space-x-3.5 pt-2">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/ombapupropertypanipat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-slate-900 border border-slate-800/80 rounded-full flex items-center justify-center text-xs text-slate-300 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-200 cursor-pointer"
              aria-label="Instagram Profile"
            >
              📸
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Structured Reach Parameters */}
        <motion.div variants={fadeInUp} className="md:col-span-5 md:pl-8">
          <h4 className="text-brand-gold font-bold font-serif text-sm uppercase tracking-widest mb-6">Reach Us</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-center gap-3">
              <span className="text-base text-brand-gold shrink-0">📞</span> 
              <span className="text-slate-200 font-semibold tracking-wide">+91 9306247824</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-base text-brand-gold shrink-0">✉️</span> 
              <a href="mailto:lovishjagga7728@gmail.com" className="text-slate-200 hover:text-brand-gold transition-colors break-all">
                lovishjagga7728@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base text-brand-gold mt-0.5 shrink-0">📍</span> 
              <span className="text-slate-200 leading-relaxed">
                1648, Sector 24 Rd, Sector 10, HUDA, Panipat, Haryana 132103
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Attributions and Centered Legals Border */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className="max-w-7xl mx-auto pt-6 border-t border-slate-900/60 flex items-center justify-center text-center text-xs text-slate-500 font-medium tracking-wide"
      >
        <p>© 2026 Om Bapu Property Dealer Firm. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}