import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, TrendingUp, Users, Award } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: 'Trusted Property Advisors',
      desc: 'Our consultations are completely factual. No inflated pricing, no misinformation. Every dealing is clear.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />,
      title: 'Verified Listings Only',
      desc: 'We physically visit and double-verify PDA (Peshawar Development Authority) registry documents to guarantee real titles.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-gold" />,
      title: 'Expert Market Analysis',
      desc: 'Get data-backed guidance on where to invest. Know when to buy or sell to secure maximum profits.'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      title: 'Professional Team',
      desc: 'Haji Gul Zaman and senior developers handle client portfolios personally to establish premium guidance.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 space-y-20 select-none">
      
      {/* Introduction Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Visual collage or feature image */}
        <div className="lg:col-span-5 space-y-4 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold/10 rounded-full filter blur-xl" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 aspect-square max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Peshawar Villa Home"
              className="w-full h-full object-cover"
            />
            {/* Dark green overlay on bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-light border border-white/10">
              <span className="font-display font-bold text-lg text-white">Trust is Our Foundation</span>
              <p className="text-xs text-slate-300 mt-1">Established on honest consulting in Khyber Pakhtunkhwa.</p>
            </div>
          </div>
        </div>

        {/* Right column: Coporated story text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
              OUR HISTORIC STORY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Honesty &amp; Transparency in Peshawar Real Estate
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Khyber Property Dealer &amp; Builders has built a stellar reputation in Khyber Pakhtunkhwa based on unconditional honesty, verified listings, and genuine client care. Buying property is a once-in-a-lifetime decision for most families; we protect your lifetime hard-earned savings.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We help clients discover premium plots in DHA Peshawar, build futuristic custom luxury smart homes in Hayatabad, and invest in high-yield commercial retail properties directly surrounding University Road and Tehkal.
          </p>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-brand-green-dark/60 border border-brand-gold/15 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-brand-green">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Our Mission</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                To provide secure, authenticated, and highly profitable real estate solutions with zero-friction paper verification services.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-green-dark/60 border border-brand-gold/15 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-brand-green">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Our Vision</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                To stand as the absolute #1 most trusted, transparent real estate firm and premier custom home builders in Khyber Pakhtunkhwa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Highlight section */}
      <div className="max-w-7xl mx-auto py-12 border-t border-brand-gold/10">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-[#dfb234] text-xs font-bold uppercase tracking-widest">
            THE KHYBER CONFIDENCE
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Why Peshawar Investors Select Us
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            We maintain rigid operational standards so your capital gains remain safe and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-brand-green-dark/40 border border-[#dfb234]/10 hover:border-[#dfb234]/30 transition group space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition duration-300">
                {h.icon}
              </div>
              <h4 className="font-display font-bold text-base text-slate-100">
                {h.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
