import React from 'react';
import { MapPin, Phone, MessageSquare, Star, Clock, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02180d] border-t border-brand-gold/10 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md gold-gradient flex items-center justify-center">
                <span className="text-brand-green font-display font-bold text-base">KP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base leading-none">KHYBER PROPERTY</span>
                <span className="text-[9px] tracking-wider text-brand-gold font-medium">DEALER &amp; BUILDERS</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Khyber Property Dealer &amp; Builders is a trusted agency specializing in high-yield commercial investments, elegant homes, and top-tier construction services throughout Peshawar.
            </p>

            <div className="flex items-center gap-1.5 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Local Standing:</span>
              <div className="flex items-center text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded text-xs font-semibold gap-1">
                <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                <span>4.7/5 Google Rating</span>
              </div>
            </div>
          </div>

          {/* Core Areas / Services */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-tight border-l-2 border-brand-gold pl-3">
              Services We Provide
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-brand-gold transition cursor-pointer flex items-center gap-2" onClick={() => handleLinkClick('properties')}>
                <span className="text-brand-gold">▪</span> Buy Premium Plots &amp; Homes
              </li>
              <li className="hover:text-brand-gold transition cursor-pointer flex items-center gap-2" onClick={() => handleLinkClick('properties')}>
                <span className="text-brand-gold">▪</span> Rental Services
              </li>
              <li className="hover:text-brand-gold transition cursor-pointer flex items-center gap-2" onClick={() => handleLinkClick('builders')}>
                <span className="text-brand-gold">▪</span> Grey Structure Construction
              </li>
              <li className="hover:text-brand-gold transition cursor-pointer flex items-center gap-2" onClick={() => handleLinkClick('builders')}>
                <span className="text-brand-gold">▪</span> Turnkey House Building
              </li>
              <li className="hover:text-brand-gold transition cursor-pointer flex items-center gap-2" onClick={() => handleLinkClick('about')}>
                <span className="text-brand-gold">▪</span> Investment Advisory
              </li>
            </ul>
          </div>

          {/* Quick NavLinks */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-tight border-l-2 border-brand-gold pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-brand-gold transition">
                  Home Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('properties')} className="hover:text-brand-gold transition">
                  Verified Property Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('builders')} className="hover:text-brand-gold transition">
                  Construction Estimates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand-gold transition">
                  Our Mission &amp; Vision
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-gold transition">
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Main Head Office Info */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-tight border-l-2 border-brand-gold pl-3">
              Peshawar Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Arbab Road, Tehkal, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <a href="tel:03339114858" className="hover:text-brand-gold transition text-xs sm:text-sm font-semibold">0333-9114858 / 0333-9280856</a>
                </div>
                <div className="pl-6 text-xs text-slate-500">Office Line: (091) 5853615</div>
              </li>

              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic bottom area */}
        <div className="border-t border-brand-gold/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Khyber Property Dealer &amp; Builders. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Verified Peshawar Real Estate License Registered</span>
            <span className="text-brand-gold font-semibold">•</span>
            <span className="flex items-center gap-1">
              Developed with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for KP Property
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
