/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B121F',      // Dark Obsidian Luxury Backdrop
          gold: '#C5A85C',      // Signature Warm Serif Foil
          yellow: '#E6B93B',    // Accent Call-To-Action Solid Filling
          lightBg: '#F8F9FA',   // Off-White Clean Base Accent
          cardBg: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}