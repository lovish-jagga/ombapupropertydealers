"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Premium spring & cubic-bezier scrolling animation configurations
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
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const pillars = [
    { 
      title: 'Property Buying', 
      desc: 'End-to-end procedural assistance from architectural shortlisting to title alignment verification. We negotiate and safeguard contract equity at every turn.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    { 
      title: 'Property Selling', 
      desc: 'Maximize your real estate equity yield using our targeted premium media placement channels and an elite pre-qualified investor network.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
        </svg>
      )
    },
    { 
      title: 'Rental Services', 
      desc: 'Secure premium tenants or lease architectural properties seamlessly through a lifecycle framework that handles full vetting and lease drafting.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      )
    },
    { 
      title: 'Property Investment', 
      desc: 'Quantitative analytics and portfolio management across residential developments, hospitality builds, and high-yield agricultural lands.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    { 
      title: 'Property Documentation', 
      desc: 'Complete legal framework vetting including registry deeds, layout sanctions, municipal mutation filings, and formal structural certification.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    { 
      title: 'Loan Assistance', 
      desc: 'Premium placement partnerships spanning over 15 financial institutions to guarantee customized loan configurations with competitive processing.',
      svg: (
        <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v2H2zm15-9h3v7h-3zM12 2L2 7v1h20V7z"/>
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
          Our Services
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-brand-navy dark:text-white mb-4 max-w-2xl leading-tight tracking-tight"
        >
          Six pillars of <span className="text-brand-gold">complete real estate care</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 dark:text-slate-400 text-sm max-w-xl mb-16 font-light"
        >
          From initial exploratory site curation to structural registration, our specialized firm mitigates client operational friction.
        </motion.p>

        {/* PILLARS GRAPH INTERFACE MATRIX */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pillars.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-white dark:bg-[#0B121F] p-8 rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-gold/40 transition-colors duration-300 group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {item.svg}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy dark:text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM TAILORED PANEL */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-brand-navy text-white text-center rounded-3xl p-10 md:p-14 max-w-4xl mx-auto border border-slate-900 shadow-xl"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 tracking-tight">Need custom tailored asset consulting?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto font-light">Connect directly with our corporate specialists for individualized transaction and layout planning.</p>
          
          <motion.a 
            href="https://wa.me/919306247824"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-brand-yellow text-brand-navy font-bold px-10 py-4 rounded-full text-xs uppercase tracking-wider shadow-md hover:bg-opacity-95 block w-full sm:w-auto mx-auto select-none"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}