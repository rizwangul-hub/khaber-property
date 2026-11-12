import React, { useState } from 'react';
import { Search, Phone, Send, MapPin, Building, Key, Coins } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (filters: { category: string; location: string; type: string }) => void;
  setCurrentPage: (page: string) => void;
}

export default function HeroSection({ onSearch, setCurrentPage }: HeroSectionProps) {
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [type, setType] = useState('All');

  const popularLocations = ['All', 'Hayatabad', 'DHA Peshawar', 'Regi Model Town', 'University Road', 'Warsak Road', 'Tehkal'];
  const categories = ['All', 'Houses', 'Residential Plots', 'Commercial Plots', 'Shops', 'Apartments'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      category: category === 'All' ? '' : category,
      location: location === 'All' ? '' : location,
      type: type === 'All' ? '' : type,
    });
    setCurrentPage('properties');
    // Scroll properties view into view
    setTimeout(() => {
      const el = document.getElementById('properties-catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Image with Dark Forest Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Property Peshawar"
          className="w-full h-full object-cover scale-105 filter brightness-[0.22] contrast-105"
        />
        {/* Color gradients to melt image into the overall design */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 via-transparent to-brand-green-dark/80" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-brand-green-light/20 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Brand headlines and CTA */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Peshawar's Trusted Real Estate Partner
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Buy, Sell &amp; Invest with <br />
            <span className="text-gradient-gold">Confidence</span>
          </h1>

          {/* Urdu Subtitle in Noto Urdu font */}
          <p className="text-lg sm:text-xl font-urdu text-brand-gold/90 font-medium tracking-wide pt-1 leading-relaxed">
            تحفظ، شفافیت اور منافع بخش رئیل اسٹیٹ سرمایہ کاری پشاور میں
          </p>

          {/* Detailed Paragraph description */}
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Khyber Property Dealer &amp; Builders is your licensed gateway to the Peshawar property landscape. Whether looking for your dream residence in DHA or high-yield commercial shops in Tehkal, we deliver absolute trust.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/15">
                <Building className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-semibold">Verified Lands</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/15">
                <Key className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-semibold">Instant Registry</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/15">
                <Coins className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-semibold">Profitable ROI</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:03339114858"
              className="flex items-center justify-center gap-2.5 px-7 py-4 gold-gradient text-brand-green font-extrabold rounded-xl shadow-gold hover:scale-[1.03] transition duration-300 group"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span>Call Us Now (0333-9114858)</span>
            </a>
            <a
              href="https://wa.me/923339114858?text=Assalam-o-Alaikum%20Khyber%20Property,%20I%20am%20interested%20in%20Peshawar%20Properties"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-4 bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 hover:text-white font-bold rounded-xl transition duration-300"
            >
              <Send className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>Contact WhatsApp Agent</span>
            </a>
          </div>
        </div>

        {/* Right Side: Quick Property Search Form Container */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-glass relative border border-brand-gold/25">
            {/* Corner design accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-gold rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-gold rounded-bl-xl pointer-events-none" />

            <div className="mb-6">
              <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                Quick Property Finder
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Filter and browse authentic direct-owner opportunities across Peshawar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Buy / Rent Toggle Option */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Transaction Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['All', 'Buy', 'Rent'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition ${
                        type === t
                          ? 'gold-gradient text-brand-green border-brand-gold shadow-sm font-black'
                          : 'bg-brand-green-dark/50 text-slate-300 border-slate-700/50 hover:bg-brand-green-light/20'
                      }`}
                    >
                      {t === 'All' ? 'Any' : t === 'Buy' ? 'For Sale' : 'For Rent'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  Select Location in Peshawar
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-sm text-slate-200 focus:outline-none focus:border-brand-gold"
                >
                  {popularLocations.map((loc) => (
                    <option key={loc} value={loc} className="bg-brand-green-dark text-slate-200">
                      {loc === 'All' ? 'All Peshawar Areas' : loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-brand-gold" />
                  Property Type
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-sm text-slate-200 focus:outline-none focus:border-brand-gold"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Property Types' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Enquiry / Filter Catalog Button */}
              <button
                type="submit"
                className="w-full py-3.5 mt-2 gold-gradient hover:opacity-90 active:scale-95 text-brand-green font-extrabold rounded-lg shadow-gold transition duration-200 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 font-black" />
                <span>Search Properties</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
