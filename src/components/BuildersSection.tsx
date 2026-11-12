import React, { useState } from 'react';
import { Home, Hammer, Construction, Sparkles, Building, Calculator, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { ConstructionEstimate } from '../types';

interface BuildersSectionProps {
  onSubmitEstimate: (estimate: Omit<ConstructionEstimate, 'id' | 'createdAt' | 'estimatedCost'> & { estimatedCost: string }) => void;
}

export default function BuildersSection({ onSubmitEstimate }: BuildersSectionProps) {
  // Calculator States
  const [areaSize, setAreaSize] = useState(5); // 5 Marla default
  const [serviceType, setServiceType] = useState<'Grey Structure' | 'Turnkey (Finishing)' | 'Renovation'>('Grey Structure');
  const [storyCount, setStoryCount] = useState(2); // Double story default
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: <Hammer className="w-6 h-6 text-brand-gold" />,
      title: 'House Construction',
      description: 'Complete end-to-end residential home building on your land. We handle layouts, foundations, wiring, solar arrays, plastering, woodwork, and premium painting with structural safety guarantees.',
      features: ['A-Class Materials', 'Seismic-Safe Foundations', 'Solar-Ready Wiring', 'Custom Woodwork Cabinetry']
    },
    {
      icon: <Construction className="w-6 h-6 text-brand-gold" />,
      title: 'Grey Structure Construction',
      description: 'Get solid skeleton structural construction (Bunyaad, Columns, Walls, Roof Slabs, Plastering) using high-grade cement, rated iron steel, and premium river sand.',
      features: ['PDA Standard Approvals', 'Water-Proofing Plaster', 'Concealed Conduit Piping', 'Rigid Inspection Drills']
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: 'Turnkey Projects',
      description: 'Move into a completely finished, luxury state-of-the-art house. Includes executive Spanish floor tiles, imported fixtures, modular kitchen chimneys, false ceilings, and premium security doors.',
      features: ['Complete Finishing Delivery', 'Design & Architecture', 'Interior Decor Work', '1-Year Appliance Warranties']
    },
    {
      icon: <Home className="w-6 h-6 text-brand-gold" />,
      title: 'Renovation Services',
      description: 'Breathe new life into your existing home in Hayatabad or Tehkal. Modernize your kitchen interiors, expand your bedrooms, upgrade sanitation tiles, or add an extra floor.',
      features: ['Premium Tile Overlays', 'Kitchen Modernization', 'Sewer Conduit Overhaul', 'Premium Exterior Facades']
    },
    {
      icon: <Building className="w-6 h-6 text-brand-gold" />,
      title: 'Commercial Construction',
      description: 'Design and construction of heavy high-rise commercial structures, multi-floor shopping plazas, showrooms on main Arbab Road, or medical centers in Peshawar.',
      features: ['Structural Quality Badges', 'Load-Bearing Analysis', 'Integrated fire drills', 'High-Yield Plaza Structures']
    }
  ];

  // Peshawar Construction Cost Estimator Logic (Approx Prices for 2026 in PKR)
  // 1 Marla is approx 225 sqft. Covered area ratio is around 180 sqft per story.
  // Grey structure: ~1,850 PKR per covered sqft.
  // Turnkey: ~4,200 PKR per covered sqft.
  // Renovation: estimated on marla size.
  const calculateEstimate = (): { cost: string; rawCost: number } => {
    const coveredAreaSqFt = areaSize * 180 * storyCount;
    let ratePerSqFt = 1850; // Grey structure

    if (serviceType === 'Turnkey (Finishing)') {
      ratePerSqFt = 4100;
    } else if (serviceType === 'Renovation') {
      ratePerSqFt = 1100; // General renovation average
    }

    const calculatedResult = coveredAreaSqFt * ratePerSqFt;
    
    // Format into PKR Lakhs or Crores
    if (calculatedResult >= 10000000) {
      const crore = (calculatedResult / 10000000).toFixed(2);
      return { cost: `${crore} Crore PKR`, rawCost: calculatedResult };
    } else {
      const lakh = (calculatedResult / 100000).toFixed(1);
      return { cost: `${lakh} Lakh PKR`, rawCost: calculatedResult };
    }
  };

  const currentResult = calculateEstimate();

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out your Name and Phone Number to submit the estimation request.');
      return;
    }
    
    onSubmitEstimate({
      name,
      phone,
      areaSize,
      serviceType,
      storyCount,
      estimatedCost: currentResult.cost
    });

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 space-y-16 select-none">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center max-w-xl space-y-3">
        <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
          CREATIVE BUILDERS &amp; ENGINEERINGS
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Peshawar Premium Home Construction
        </h2>
        <p className="text-slate-400 text-sm">
          From basic excavation to custom executive kitchen design. We maintain absolute transparency on material counts (Cement bags, Steel grades, Sand qualities) during daily site reports.
        </p>
      </div>

      {/* Estimator Calculator Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Estimator Tool (Interactive value add) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-brand-gold/25 relative">
          <div className="absolute top-4 right-4 text-brand-gold bg-brand-gold/10 p-2 rounded-lg">
            <Calculator className="w-5 h-5" />
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
              Peshawar Construction Estimator
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculate rough budgets according to building materials rates in Peshawar (2026). Adjust sizes instantly.
            </p>

            <form onSubmit={handleCalculatorSubmit} className="space-y-4 pt-2">
              {/* Plot Size (Marlas) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-bold mb-2 flex justify-between">
                  <span>Plot land Size</span>
                  <span className="text-[#dfb234]">{areaSize} Marla</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="20"
                  step="1"
                  value={areaSize}
                  onChange={(e) => setAreaSize(Number(e.target.value))}
                  className="w-full accent-[#dfb234] bg-brand-green-dark rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>3 Marla</span>
                  <span>5 Marla</span>
                  <span>10 Marla (Half Kanal)</span>
                  <span>20 Marla (1 Kanal)</span>
                </div>
              </div>

              {/* Service Finishing Tier */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-bold mb-2">
                  Building Finish Quality
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Grey Structure', 'Turnkey (Finishing)', 'Renovation'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setServiceType(t)}
                      className={`py-2 px-1 rounded-lg text-[10px] font-bold border transition leading-tight ${
                        serviceType === t
                          ? 'gold-gradient text-brand-green border-brand-gold font-extrabold'
                          : 'bg-[#032114] text-slate-300 border-slate-700/50 hover:bg-brand-green/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Story/Floor Count */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-bold mb-2">
                  Number of Floors (Stories)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStoryCount(s)}
                      className={`py-2.5 rounded-lg text-xs font-bold border transition ${
                        storyCount === s
                          ? 'bg-[#dfb234]/15 text-brand-gold border-brand-gold'
                          : 'bg-[#032114] text-slate-300 border-slate-700/50 hover:bg-brand-green/20'
                      }`}
                    >
                      {s === 1 ? 'Single Story' : s === 2 ? 'Double Story' : 'Triple Story'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Preview */}
              <div className="bg-brand-green-dark p-4 rounded-xl border border-brand-gold/15 mt-2 text-center">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Estimated Building Budget
                </span>
                <p className="text-2xl font-display font-extrabold text-[#fcd34d] tracking-tight mt-1">
                  ~ {currentResult.cost}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                  *Excluding land price. Based on covered area (~{areaSize * 150 * storyCount} sq.ft) with standard quality steel &amp; fittings.
                </p>
              </div>

              {/* Form Leads Details */}
              <div className="space-y-2 border-t border-brand-gold/10 pt-4">
                <h4 className="text-xs font-bold text-slate-200">Email/Phone Verification for Site Visit</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#032114] border border-brand-gold/10 rounded-lg p-2.5 text-xs text-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone: 03xx-xxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#032114] border border-brand-gold/10 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider transition duration-300 flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/20'
                    : 'gold-gradient text-brand-green hover:opacity-90 active:scale-95 shadow-lg'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Estimate Submitted to Haji Gul Zaman!</span>
                  </>
                ) : (
                  <span>Request Custom Construction Quote</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Showcase Services cards */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-[#021c10] border border-brand-gold/5 hover:border-brand-gold/20 transition group flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green-dark border border-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-display font-extrabold text-lg text-slate-100 group-hover:text-[#fcd34d] transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                  {item.features.map((f, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="bg-[#01140b] text-[10px] text-slate-300 px-2 py-0.5 rounded border border-brand-gold/10"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
