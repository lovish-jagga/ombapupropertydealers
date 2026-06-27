import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PropertiesPage() {
  const properties = [
    { type: 'FOR BUY', category: 'RESIDENTIAL', price: '₹2.50 L /mo', title: 'Skyline Mansion Layout', location: 'Worli, Mumbai', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
    { type: 'FOR BUY', category: 'RESIDENTIAL', price: '₹1.85 Cr', title: 'Premium Orchard Acres', location: 'Karjat, Maharashtra', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { type: 'FOR RENT', category: 'COMMERCIAL', price: '₹8.50 Cr', title: 'Grade-A Tech Office Tower', location: 'BKC, Mumbai', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="max-w-7xl mx-auto w-full px-6 py-12 flex-grow">
        <span className="text-xs tracking-[0.2em] text-brand-gold uppercase block mb-2 font-extrabold">Browse Listings</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-navy dark:text-white mb-2 tracking-tight">All Properties</h1>
        <p className="text-gray-500 dark:text-slate-400 text-sm mb-10 font-light">Curated high-tier portfolio encompassing premium residential, modern corporate commercial, and agricultural domains.</p>

        {/* INTERACTIVE FILTERS WIDGET BOARD */}
        <div className="bg-white dark:bg-[#0B121F] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800/60 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Search Input</label>
              <input type="text" placeholder="Title, area, city..." className="w-full bg-brand-lightBg dark:bg-slate-900 text-gray-800 dark:text-white border border-transparent dark:border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold"/>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Listing Type</label>
              <select className="w-full bg-brand-lightBg dark:bg-slate-900 text-gray-500 dark:text-slate-300 border border-transparent dark:border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none cursor-pointer">
                <option>All Listings</option>
                <option>For Buy</option>
                <option>For Rent</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Asset Category</label>
              <select className="w-full bg-brand-lightBg dark:bg-slate-900 text-gray-500 dark:text-slate-300 border border-transparent dark:border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none cursor-pointer">
                <option>All Sectors</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Agricultural</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Target Location</label>
              <input type="text" placeholder="City Area" className="w-full bg-brand-lightBg dark:bg-slate-900 text-gray-800 dark:text-white border border-transparent dark:border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-gold"/>
            </div>
          </div>

          {/* Pricing parameters sliders */}
          <div className="flex flex-col sm:flex-row gap-6 items-center pt-5 border-t border-gray-50 dark:border-slate-900">
            <div className="w-full flex items-center gap-4">
              <span className="text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap uppercase">PRICE VARIATION</span>
              <input type="range" className="w-full accent-brand-gold cursor-pointer bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full"/>
            </div>
            <button className="text-xs font-bold border border-gray-200 dark:border-slate-800 text-brand-navy dark:text-slate-200 px-6 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all ml-auto whitespace-nowrap uppercase tracking-wider">
              Clear filters
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-slate-400 mb-6 font-semibold uppercase tracking-wider">{properties.length} Properties cataloged successfully</div>

        {/* CARD CONTAINER MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0B121F] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800/60 group flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="relative bg-slate-100 dark:bg-slate-900 h-64 w-full overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <span className="bg-brand-yellow text-brand-navy font-extrabold text-[9px] tracking-wider px-2.5 py-1 rounded-md shadow-sm">{item.type}</span>
                  <span className="bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-200 font-bold text-[9px] tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-transparent dark:border-slate-800">{item.category}</span>
                </div>
                <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white dark:bg-slate-900 text-gray-400 border dark:border-slate-800 rounded-full flex items-center justify-center shadow-sm hover:text-red-500 transition-colors">
                  ❤️
                </button>
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out" style={{ backgroundImage: `url(${item.img})` }} />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brand-navy dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 font-medium mb-4">📍 {item.location}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-slate-900/80">
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest block">Valuation Base</span>
                    <p className="font-serif text-xl font-bold text-brand-navy dark:text-brand-gold mt-0.5">{item.price}</p>
                  </div>
                  <button className="bg-brand-navy dark:bg-white text-white dark:text-brand-navy text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-navy transition-colors tracking-wide uppercase">
                    View Asset
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}