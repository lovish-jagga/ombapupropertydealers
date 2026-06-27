"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full px-4 pt-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto bg-white/80 dark:bg-[#0B121F]/80 backdrop-blur-md border border-gray-100 dark:border-slate-800/80 px-6 py-3.5 flex items-center justify-between rounded-full shadow-sm transition-colors duration-300">
        
        {/* Brand Group (Left Side) */}
        <Link href="/" className="flex items-center space-x-2.5 group shrink-0 z-10">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 relative bg-brand-yellow">
            <Image 
              src="/images/ombapu.png" 
              alt="Om Bapu Luxury Real Estate Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-serif font-extrabold text-base text-brand-navy dark:text-white block leading-none">Om Bapu</span>
            <span className="text-[9px] tracking-[0.18em] text-gray-400 font-bold uppercase block mt-0.5">Property Dealers</span>
          </div>
        </Link>

        {/* Desktop Routing Links (Upgraded to text-sm for clearer premium legibility) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 bg-slate-100/50 dark:bg-slate-900/40 p-1 rounded-full border border-slate-200/20">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive 
                    ? 'bg-brand-navy dark:bg-white text-white dark:text-brand-navy shadow-sm scale-100' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Global Control Layout Group (Right Side Alignment Bracket) */}
        <div className="flex items-center justify-end shrink-0 z-10">
          <button 
            onClick={toggleTheme} 
            className="w-9 h-9 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-full flex items-center justify-center text-lg transition-all active:scale-95"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

      </nav>
    </div>
  );
}