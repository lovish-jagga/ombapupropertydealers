"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Premium spring & cubic-bezier scroll animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function AboutPage() {
  const pillars = [
    { 
      title: 'Award-Winning', 
      desc: 'Industry excellence across corporate land advisory metrics.',
      svg: (
        <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22l-4-2.5-4 2.5V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-4-2.5zM12 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
        </svg>
      )
    },
    { 
      title: 'Verified Listings', 
      desc: '100% legally scrutinized document parameters.', 
      highlight: true,
      svg: (
        <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      )
    },
    { 
      title: 'Transparent', 
      desc: 'Zero hidden administrative fees or transactional premiums.',
      svg: (
        <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-brand-lightBg dark:bg-[#050B14] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto w-full px-6 py-16 flex-grow relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-xs tracking-[0.2em] text-brand-gold uppercase block mb-2 font-extrabold"
        >
          About Corporate
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-brand-navy dark:text-white mb-6 max-w-4xl leading-tight tracking-tight"
        >
          25+ years of trust in <span className="text-brand-gold">premium real estate</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 dark:text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed mb-16 font-light"
        >
          Om Bapu Property Dealer Firm was founded in 2000 with a foundational core mission: embed transparency, fiduciary integrity, and peerless tactical market intelligence into luxury real estate transactions across Panipat. Today, we manage multi-generational family estates.
        </motion.p>

        {/* SPLIT MISSION LAYOUT PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-[#0B121F] p-8 rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm"
          >
            <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-brand-gold mb-6 shadow-sm">
              <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-white mb-3 tracking-tight">Our Mission</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm font-light leading-relaxed">
              To empower asset owners and corporate entities across India with high-conviction acquisitions matching exact architectural briefs — backed by absolute clear-title guarantees.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-[#0B121F] p-8 rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm"
          >
            <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-brand-gold mb-6 shadow-sm">
              <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-white mb-3 tracking-tight">Our Vision</h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm font-light leading-relaxed">
              To serve as the definitive real estate advisory benchmark in Western India — preserving a client-first advisory model built upon deep domain research.
            </p>
          </motion.div>
        </div>

        {/* VALUES MATRIX FRAMEWORK (ALL LINKED TO WHATSAPP) */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-xs tracking-[0.2em] text-brand-gold uppercase block mb-3 font-extrabold"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl text-brand-navy dark:text-white font-bold mb-14 tracking-tight"
          >
            Built on trust. Refined by experience.
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto text-left"
          >
            {pillars.map((item, idx) => (
              <a 
                key={idx}
                href="https://wa.me/919306247824"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-[300px]"
              >
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`bg-white dark:bg-[#0B121F] p-6 rounded-3xl border shadow-sm flex flex-col justify-between min-h-[190px] h-full hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                    item.highlight 
                      ? 'border-brand-gold ring-1 ring-brand-gold/30 dark:border-brand-gold' 
                      : 'border-gray-100 dark:border-slate-800/60 hover:border-brand-gold/40'
                  }`}
                >
                  <div>
                    <div className="w-8 h-8 bg-amber-50 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {item.svg}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-brand-navy dark:text-white mb-1.5 tracking-tight group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 dark:text-slate-400 text-[11px] sm:text-xs font-light leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>

      </section>

      <Footer />
    </main>
  );
}