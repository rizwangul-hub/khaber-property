import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, ShieldAlert, Award, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  inquiriesCount: number;
}

export default function Navbar({ currentPage, setCurrentPage, inquiriesCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'builders', label: 'Builders & Construction' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50">
      {/* Premium Top Info Bar */}
      <div className="bg-brand-green-dark text-xs border-b border-brand-gold/10 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-2">
          {/* Real Peshawar Address Details */}
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>Arbab Road, Tehkal, Peshawar, Pakistan</span>
          </div>

          {/* Quick Contact & Verification Marks */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>Office: <a href="tel:0915853615" className="hover:text-brand-gold transition">(091) 5853615</a></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 border-l border-slate-700 pl-4">
              <span className="text-brand-gold font-medium">Cell:</span>
              <a href="tel:03339114858" className="hover:text-brand-gold transition">0333-9114858</a>
              <span className="text-slate-500">|</span>
              <a href="tel:03339280856" className="hover:text-brand-gold transition">0333-9280856</a>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/10 text-[10px] tracking-wide uppercase">
              <Award className="w-3 h-3 text-brand-gold" />
              <span>Trusted Consultant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav className="sticky top-0 w-full glass-panel border-b border-brand-gold/10 shadow-lg select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Title Block */}
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-brand-green font-display font-bold text-xl">KP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
                  KHYBER PROPERTY
                </span>
                <span className="text-[10px] tracking-widest text-[#dfb234] font-medium leading-none">
                  DEALER &amp; BUILDERS
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                    currentPage === item.id
                      ? 'text-brand-gold border-b-2 border-brand-gold/80 rounded-none'
                      : 'text-slate-300 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Invisible/Private Leads Access representing complete Lead Generation view */}
              <button
                onClick={() => handleNavClick('leads')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  currentPage === 'leads'
                    ? 'text-[#fcd34d] bg-brand-gold/10 border border-brand-gold/30'
                    : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                }`}
                title="Broker Portal (Track user questions, construction estimation and property listings inquiries)"
              >
                <ShieldAlert className="w-4 h-4 text-brand-gold shrink-0 animate-pulse" />
                <span className="hidden lg:inline">Agent Portal</span>
                {inquiriesCount > 0 && (
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-bounce">
                    {inquiriesCount}
                  </span>
                )}
              </button>
            </div>

            {/* Call to Action Call Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="https://wa.me/923339114858"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#dfb234]/40 hover:border-[#dfb234] text-brand-gold font-medium rounded-lg text-sm transition duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#dfb234]" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:03339114858"
                className="gold-gradient text-brand-green font-bold text-sm px-5 py-2.5 rounded-lg shadow-gold transition hover:scale-105 duration-200"
              >
                Call Now
              </a>
            </div>

            {/* Mobile burger toggle */}
            <div className="md:hidden flex items-center gap-2">
              {inquiriesCount > 0 && (
                <div 
                  onClick={() => handleNavClick('leads')}
                  className="bg-brand-gold/10 border border-brand-gold/30 px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-brand-gold animation-pulse" />
                  <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">
                    {inquiriesCount}
                  </span>
                </div>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-brand-gold p-2 rounded-lg hover:bg-slate-800/40 transition"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isOpen && (
          <div className="md:hidden bg-[#032114] border-b border-brand-gold/20 py-4 px-6 space-y-3 transition duration-200 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left w-full px-3 py-3 rounded-md text-base font-semibold transition ${
                    currentPage === item.id
                      ? 'text-brand-gold bg-brand-green/40'
                      : 'text-slate-300 hover:text-brand-gold hover:bg-slate-800/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('leads')}
                className={`text-left w-full px-3 py-3 rounded-md text-base font-semibold transition flex items-center justify-between ${
                  currentPage === 'leads'
                    ? 'text-brand-gold bg-brand-green/40'
                    : 'text-slate-400 hover:text-brand-gold'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-brand-gold" />
                  <span>Agent Portal</span>
                </div>
                {inquiriesCount > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {inquiriesCount} New
                  </span>
                )}
              </button>
            </div>
            
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a 
                href="https://wa.me/923339114858"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg text-emerald-400 font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:03339114858"
                className="gold-gradient text-brand-green text-center font-bold px-4 py-3 rounded-lg block shadow-lg hover:opacity-90"
              >
                Call Haji Gul Zaman
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
