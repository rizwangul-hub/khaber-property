import React, { useState } from 'react';
import { BedDouble, Bath, MapPin, Maximize, Phone, MessageSquare, ArrowLeft, Send, CheckCircle2, Map } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailsViewProps {
  property: Property;
  onBack: () => void;
  onSubmitInquiry: (inquiry: {
    propertyId: string;
    propertyTitle: string;
    name: string;
    phone: string;
    message: string;
    type: 'Property Inquiry';
  }) => void;
}

export default function PropertyDetailsView({ property, onBack, onSubmitInquiry }: PropertyDetailsViewProps) {
  const [activeImage, setActiveImage] = useState(property.images[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Assalam-o-Alaikum, I am very interested in this property ("${property.title}" in ${property.location}). Please supply raw documents, structural blueprints, and demand verification details.`);
  const [submitted, setSubmitted] = useState(false);

  // Custom coordinate focus highlights depending on Peshawar location
  const getPeshawarCoordinatesText = (loc: string) => {
    if (loc.includes('Hayatabad')) {
      return {
        lat: '33.9964° N',
        lng: '71.4394° E',
        sector: 'Hayatabad Central Phase 6 Zone, PDA Authority'
      };
    } else if (loc.includes('DHA')) {
      return {
        lat: '33.9550° N',
        lng: '71.4116° E',
        sector: 'DHA Peshawar Main Sector B Entrance, Frontier Works'
      };
    } else if (loc.includes('Regi')) {
      return {
        lat: '34.0224° N',
        lng: '71.4172° E',
        sector: 'Regi Model Town (RMT) Sector 3 High-Grounds'
      };
    } else {
      return {
        lat: '33.9989° N',
        lng: '71.4789° E',
        sector: 'Tehkal / Arbab Road Commercial Grid, University Road'
      };
    }
  };

  const coordinates = getPeshawarCoordinatesText(property.location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    onSubmitInquiry({
      propertyId: property.id,
      propertyTitle: property.title,
      name,
      phone,
      message,
      type: 'Property Inquiry'
    });

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setSubmitted(false);
    }, 4000);
  };

  const getWhatsAppLink = (prop: Property) => {
    const text = `Assalam-o-Alaikum, I am interested in property ID: ${prop.id} ("${prop.title}") located in ${prop.location}. Please share the map coordinate layout and demand file detail.`;
    return `https://wa.me/${prop.agent.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 select-none animate-fadeIn">
      {/* Back button link */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition text-sm font-semibold border border-brand-gold/20 hover:border-brand-gold px-4 py-2 rounded-lg bg-brand-green-dark/40"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Properties list</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left main: Galleries, Descs, Specifications, Map coordinate */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Visual showcase */}
          <div className="space-y-3">
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-gold/15 bg-brand-green-dark">
              <img
                src={activeImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gallery Thumbnail Selector loops */}
            <div className="flex gap-3">
              {property.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition ${
                    activeImage === img ? 'border-brand-gold' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick specs pill bar */}
          <div className="glass-panel rounded-xl p-5 border border-brand-gold/15 flex flex-wrap gap-6 items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Total Price / Demand</span>
              <p className="text-2xl font-display font-black text-[#fcd34d]">PKR {property.priceStr}</p>
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              {property.bedrooms && (
                <div className="flex items-center gap-2 bg-brand-green-dark/60 border border-brand-gold/10 px-3.5 py-2 rounded-lg text-slate-200">
                  <BedDouble className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-semibold">{property.bedrooms} Beds</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-2 bg-brand-green-dark/60 border border-brand-gold/10 px-3.5 py-2 rounded-lg text-slate-200">
                  <Bath className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-semibold">{property.bathrooms} Baths</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-brand-green-dark/60 border border-brand-gold/10 px-3.5 py-2 rounded-lg text-slate-200">
                <Maximize className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-semibold">{property.area} Area</span>
              </div>
            </div>
          </div>

          {/* Detailed text */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-extrabold text-white tracking-tight border-b border-brand-gold/15 pb-2">
              Property Description &amp; Details
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Premium features grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-extrabold text-white tracking-tight border-b border-brand-gold/15 pb-2">
              Utility Features &amp; Key Perks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-brand-green-dark/30 p-3 rounded-lg border border-brand-gold/5 text-slate-200 text-xs">
                  <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Peshawar localized coordinates display simulating complete Map presentation */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-extrabold text-white tracking-tight border-b border-brand-gold/15 pb-2 flex items-center gap-2">
              <Map className="w-5 h-5 text-brand-gold" />
              <span>Peshawar Development Coordinates</span>
            </h3>
            
            <div className="rounded-xl overflow-hidden border border-brand-gold/15 relative h-64 bg-slate-900 flex items-center justify-center">
              {/* Decorative engineering blueprint vector pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute top-4 left-4 z-10 bg-slate-950/90 border border-brand-gold/20 rounded-lg p-3 space-y-1">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">PDA Regulatory Check</span>
                <span className="text-xs font-bold text-slate-100">{coordinates.sector}</span>
                <div className="flex gap-2 text-[10px] text-brand-gold font-mono">
                  <span>LAT: {coordinates.lat}</span>
                  <span>LNG: {coordinates.lng}</span>
                </div>
              </div>

              {/* Dynamic Map presentation mockup mimicking expensive Google Maps embedding and loading fast */}
              <div className="text-center space-y-2 p-6 z-10">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mx-auto animate-bounce border border-brand-gold/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-display font-semibold text-sm text-slate-100">Localized Peshawar Registry Map Coordinates</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  To view verified regulatory registry files and physical coordinates for <b className="text-brand-gold">{property.location}</b>, please submit the inquiry form or speak to agent.
                </p>
                <div className="flex justify-center gap-2">
                  <a 
                    href={`https://maps.google.com/?q=Peshawar+${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-gold text-brand-green text-xs font-bold px-4 py-1.5 rounded hover:opacity-90 transition"
                  >
                    Open Earth Map Grid
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right sidebar: Real property owner agent bio & active Inquiry form */}
        <div className="lg:col-span-4 space-y-6">
          {/* Agent Bio Box */}
          <div className="glass-panel rounded-2xl p-6 border-brand-gold/20 text-center space-y-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Authorized Agent Portfolio</span>
            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold">
              <img src={property.agent.avatar} alt={property.agent.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base text-slate-100">{property.agent.name}</h4>
              <p className="text-xs text-brand-gold font-semibold">Specialist, Khyber Properties</p>
            </div>
            
            <div className="grid grid-cols-1 gap-2 pt-2">
              <a
                href={`tel:${property.agent.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#dfb234]/15 hover:bg-[#dfb234]/30 text-[#dfb234] text-xs font-bold border border-brand-gold/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {property.agent.phone}</span>
              </a>
              <a
                href={getWhatsAppLink(property)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-950/70 text-emerald-400 text-xs font-bold border border-emerald-500/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Secure Client Booking Inquiry Form */}
          <div className="glass-panel p-6 rounded-2xl border-brand-gold/25 space-y-4">
            <div className="space-y-1">
              <h4 className="font-display font-extrabold text-base text-slate-100">Schedule PDA Inspection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Submit this quick lead entry to schedule physical ground visit and paper audits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Faisal Nawaz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Active Contact Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0333-1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Custom Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-brand-gold resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-lg text-xs font-extrabold transition duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/20'
                    : 'gold-gradient text-brand-green hover:opacity-90 active:scale-95 shadow-md uppercase'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inquiry Logged!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire Demand Package</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
