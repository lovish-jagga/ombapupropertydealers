"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Animation configs optimized for premium luxury feel
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

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-brand-lightBg dark:bg-[#050B14] transition-colors duration-300">
      <Navbar />

      {/* HERO DASHBOARD SECTION */}
      <section className="relative max-w-7xl mx-auto w-full mt-4 px-4 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden min-h-[640px] flex flex-col justify-center items-center text-center px-6 py-16 shadow-xl"
        >
          {/* CINEMATIC HERO BACKGROUND IMAGE */}
          <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }} 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80')" 
            }}
          />

          {/* BACKGROUND DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B121F]/50 to-[#0B121F]/70 z-10 pointer-events-none" />

          {/* FOREGROUND CONTENT WRAPPER */}
          <div className="relative z-20 flex flex-col items-center">
            
            {/* INTERACTIVE PRESENTATION PLAY BUTTON */}
            <motion.button
              onClick={() => setShowVideoModal(true)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 w-14 h-14 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-lg shadow-xl hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-colors duration-300 group cursor-pointer"
              title="Watch Cinematic Tour"
            >
              <svg className="w-5 h-5 fill-current translate-x-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.button>

            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gold text-xs uppercase font-extrabold mb-4 block tracking-[0.25em]"
            >
              Premium Real Estate
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-white max-w-4xl font-bold leading-[1.15]"
            >
              Your Trusted Partner in <br />
              <span className="text-brand-yellow font-normal italic">Buying, Selling</span> & Renting Properties
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-200 text-sm md:text-base max-w-2xl mt-6 font-light leading-relaxed"
            >
              Discover handpicked residential villas, premium commercial spaces, and fertile agricultural land — curated natively by Om Bapu Property Dealers.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="bg-brand-yellow text-brand-navy font-bold px-8 py-3.5 rounded-full shadow-lg text-sm tracking-wider uppercase block">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INSTAGRAM REEL MODAL PORTAL WINDOW OVERLAY */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-3xl overflow-hidden w-full max-w-[420px] aspect-[9/16] shadow-2xl border border-white/10 cursor-default flex items-center justify-center"
            >
              {/* Close Button Trigger */}
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/40 text-white/80 backdrop-blur-md hover:bg-black/80 hover:text-white rounded-full flex items-center justify-center z-50 text-sm font-bold border border-white/10 transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Instagram Embedded Frame Player */}
              <iframe 
                src="https://www.instagram.com/reel/DZ65lYgzCPr/embed/"
                className="w-full h-full border-0 rounded-3xl"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* METRIC ARCHITECTURE SCALE BANNER */}
      <section className="bg-brand-navy text-white py-14 px-6 border-y border-slate-950 relative z-10 flex items-center justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-md w-full text-center flex flex-col items-center justify-center"
        >
          <motion.div variants={fadeInUp} className="w-full">
            <h3 className="text-4xl sm:text-5xl font-serif text-brand-gold font-bold tracking-tight">25+</h3>
            <p className="text-xs tracking-widest text-slate-400 uppercase font-bold mt-2">Years Experience</p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT WE OFFER ELEMENT MATRIX (UPDATED TO THE HOVER PREMIUM CARD LAYOUT) */}
      <section className="max-w-7xl mx-auto w-full py-24 px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-brand-gold uppercase block mb-3 font-extrabold"
        >
          What We Offer
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-brand-navy dark:text-white font-bold mb-14 tracking-tight"
        >
          Premium Real Estate Services
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Residential', icon: '🏠', desc: 'Luxury apartments, standalone smart villas, and penthouses curated for premium urban living structures.' },
            { title: 'Commercial', icon: '🏢', desc: 'Grade-A luxury office layout blueprints, retail storefront spaces, and showrooms located in high-traffic hubs.' },
            { title: 'Agricultural', icon: '🚜', desc: 'High-yield fertile farm lands, organic plantation landscapes, and clear-title agricultural acreage spaces.' }
          ].map((srv, idx) => (
            <Link href="/contact" key={idx} className="block">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-[#0B121F] p-10 rounded-[2.5rem] border border-gray-100/70 dark:border-slate-800/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-none hover:shadow-xl dark:hover:border-slate-700/80 text-left flex flex-col justify-between group cursor-pointer transition-colors duration-300 min-h-[320px]"
              >
                <div>
                  <div className="w-12 h-12 bg-gray-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-brand-navy dark:text-white mb-4 tracking-tight">{srv.title}</h4>
                  <p className="text-gray-400 dark:text-slate-400 text-sm leading-relaxed font-light">{srv.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* CLIENT REVIEWS TESTIMONIAL DISPLAY */}
      <section className="max-w-7xl mx-auto w-full py-20 px-6 text-center bg-white dark:bg-[#0B121F] rounded-3xl border border-gray-100 dark:border-slate-800/40 shadow-sm my-4 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] text-brand-gold uppercase block mb-3 font-extrabold"
        >
          Client Voices
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-brand-navy dark:text-white font-bold mb-14 tracking-tight"
        >
          Trusted by Hundreds of Families
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {[
            { name: 'Priya Sharma', role: 'Home Buyer', text: '"Om Bapu helped us find our dream home in Panipat. Their attention to detail and absolute transparency was exceptional throughout the entire process."' },
            { name: 'Rajesh Mehta', role: 'Investor', text: '"Their comprehensive market insights helped me make the right real estate investment decisions. ROI exceeded expectations on multiple properties."' },
            { name: 'Anita Patil', role: 'Tenant', text: '"Found an amazing premium commercial layout within just a week. The consultancy team is professional, highly responsive, and genuinely caring."' }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-brand-lightBg dark:bg-[#050B14] p-8 rounded-3xl relative border border-gray-50 dark:border-slate-900/60 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="text-brand-gold text-xs tracking-wider mb-4">⭐⭐⭐⭐•</div>
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed font-light italic mb-8 relative z-10">{item.text}</p>
              </div>
              <div className="flex items-center space-x-3.5 border-t border-gray-100 dark:border-slate-900/80 pt-4">
                <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-400 shadow-inner">
                  {item.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-brand-navy dark:text-white tracking-wide">{item.name}</h5>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{item.role}</p>
                </div>
              </div>
              <span className="absolute top-4 right-6 text-7xl font-serif text-brand-gold/10 pointer-events-none select-none">“</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BOTTOM ACTION CTA PROMPT */}
      <section className="max-w-7xl mx-auto w-full px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-brand-navy text-white rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-900 shadow-xl"
        >
          <div className="text-center lg:text-left">
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-extrabold block mb-2">Get In Touch</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold max-w-xl tracking-tight leading-tight">Ready to find your perfect property asset?</h2>
            <p className="text-slate-400 text-sm mt-3 font-light">Our specialized luxury consultants are available around the clock to support your procurement requirements.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="w-full sm:w-auto text-center bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full shadow-md text-xs uppercase tracking-wider whitespace-nowrap block">
                Contact Now
              </Link>
            </motion.div>
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.97 }}>
              <a href="tel:+919306247824" className="w-full sm:w-auto text-center border border-slate-800/80 px-6 py-4 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-colors block">
                📞 +91 9306247824
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}