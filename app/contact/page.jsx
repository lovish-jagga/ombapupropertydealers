"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Premium transition configurations matching a smooth, premium luxury aesthetic
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

export default function ContactPage() {
  // Manage form processing state transitions
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    
    // Your verified Web3Forms Access Key Integration
    formData.append("access_key", "13fc7d1b-ae34-475c-bdab-8e7481bdbb0c");
    formData.append("subject", "New Premium Lead Inquiry - Om Bapu Real Estate");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset(); // Clear all fields smoothly upon confirmation
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission operational crash:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-brand-lightBg dark:bg-[#050B14] transition-colors duration-300 overflow-x-hidden">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            
            {/* LEFT COLUMN: QUICK CONNECT CARDS WITH STAGGERED FADE REVEALS */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={staggerContainer}
              className="lg:col-span-4 space-y-4"
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-serif text-3xl font-bold text-brand-navy dark:text-white mb-6"
              >
                Quick Connect
              </motion.h2>
              
              {/* Call Card */}
              <motion.a 
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="tel:+919306247824" 
                className="block group"
              >
                <div className="bg-white dark:bg-[#0B121F] p-5 rounded-2xl border border-gray-100 dark:border-slate-800/60 shadow-sm flex items-center space-x-4 transition-all hover:border-brand-gold/60">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img 
                      src="https://img.icons8.com/ios-filled/50/C5A85C/phone.png" 
                      alt="Phone Icon" 
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider block uppercase">CALL US</span>
                    <span className="text-brand-navy dark:text-slate-200 font-bold text-sm mt-0.5 group-hover:text-brand-gold transition-colors">+91 9306247824</span>
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a 
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="https://wa.me/919306247824" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="bg-white dark:bg-[#0B121F] p-5 rounded-2xl border border-gray-100 dark:border-slate-800/60 shadow-sm flex items-center space-x-4 transition-all hover:border-brand-gold/60">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img 
                      src="https://img.icons8.com/ios-filled/50/C5A85C/whatsapp.png" 
                      alt="WhatsApp Icon" 
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider block uppercase">WHATSAPP</span>
                    <span className="text-brand-navy dark:text-slate-200 font-bold text-sm mt-0.5 group-hover:text-brand-gold transition-colors">+91 9306247824</span>
                  </div>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a 
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="mailto:lovishjagga7728@gmail.com" 
                className="block group"
              >
                <div className="bg-white dark:bg-[#0B121F] p-5 rounded-2xl border border-gray-100 dark:border-slate-800/60 shadow-sm flex items-center space-x-4 transition-all hover:border-brand-gold/60">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img 
                      src="https://img.icons8.com/ios-filled/50/C5A85C/mail.png" 
                      alt="Mail Icon" 
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider block uppercase">EMAIL US</span>
                    <span className="text-brand-navy dark:text-slate-200 font-bold text-sm mt-0.5 break-all group-hover:text-brand-gold transition-colors">lovishjagga7728@gmail.com</span>
                  </div>
                </div>
              </motion.a>

              {/* Professional Instagram Block */}
              <motion.a 
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="https://www.instagram.com/ombapupropertypanipat/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="bg-amber-50/40 hover:bg-amber-50 dark:bg-[#0B121F] p-5 rounded-2xl border border-brand-gold/40 dark:border-slate-800/60 shadow-sm flex items-center space-x-4 transition-all group-hover:border-brand-gold">
                  <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <img 
                      src="https://img.icons8.com/ios-filled/50/C5A85C/instagram-new.png" 
                      alt="Instagram Icon" 
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold tracking-wider block uppercase">FOLLOW US</span>
                    <span className="text-brand-navy dark:text-slate-200 font-bold text-sm mt-0.5 tracking-wide">@ombapupropertypanipat</span>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* RIGHT COLUMN: LEAD GENERATOR FORM PANEL */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-8 bg-white dark:bg-[#0B121F] p-8 rounded-3xl border border-gray-100 dark:border-slate-800/60 shadow-sm"
            >
              <h2 className="font-serif text-3xl font-bold text-brand-navy dark:text-white mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full bg-brand-lightBg dark:bg-slate-900 border border-transparent dark:border-slate-800/60 rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold dark:text-white transition-all"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-brand-lightBg dark:bg-slate-900 border border-transparent dark:border-slate-800/60 rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold dark:text-white transition-all"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" required placeholder="Email Address" className="w-full bg-brand-lightBg dark:bg-slate-900 border border-transparent dark:border-slate-800/60 rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold dark:text-white transition-all"/>
                  </div>
                </div>

                {/* PREMIUM PROPERTY TYPE CONDITIONAL LIST INPUT */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider mb-2">What type of property are you looking for?</label>
                  <div className="relative">
                    <select name="property_type" required defaultValue="" className="w-full bg-brand-lightBg dark:bg-slate-900 border border-transparent dark:border-slate-800/60 rounded-xl px-4 py-3.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold text-gray-500 dark:text-slate-300 cursor-pointer appearance-none transition-all">
                      <option value="" disabled>Select Property Type</option>
                      <option value="residential">🏡 Residential (Villas, Apartments, Penthouses)</option>
                      <option value="commercial">🏢 Commercial (Office Workspaces, Retail Showrooms)</option>
                      <option value="agricultural">🚜 Agricultural (Farm Lands, Plantations, Acreage)</option>
                    </select>
                    {/* Custom Dropdown Arrow Vector */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* INLINE STATUS TOAST COMPONENT NOTIFICATIONS */}
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 text-xs font-semibold rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40"
                  >
                    🎉 Thank you! Your asset preference query has been registered. A property specialist will review this and notify your email shortly.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 text-xs font-semibold rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/40"
                  >
                    ❌ Dispatch Error. Something went wrong while saving your message. Please retry or touch base using our interactive WhatsApp card.
                  </motion.div>
                )}

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full sm:w-auto bg-brand-yellow text-brand-navy font-bold px-10 py-3.5 rounded-xl shadow-md text-xs tracking-wider uppercase hover:bg-opacity-95 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 select-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : "Send"}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* COLORFUL, HIGH-ACCURACY MAP WITH SMOOTH ENTRY TRANSITION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-96 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800/80 shadow-md relative bg-blue-50 dark:bg-slate-900"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.08226490333!2d76.94503799999999!3d29.397194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddb6a12042787%3A0xb9b9bc899e262526!2s1648%2C%20Sector%2024%20Rd%2C%20Sector%2024%2C%20Huda%2C%20Panipat%2C%20Haryana%20132104!5e0!3m2!1sen!2sin!4v1717890000000!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}