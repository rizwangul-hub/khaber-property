import React from 'react';
import { BedDouble, Bath, MapPin, Maximize, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onViewDetails: (property: Property) => void;
  onInquiry: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails, onInquiry }: PropertyCardProps) {
  // Safe WhatsApp click-to-chat generator
  const getWhatsAppLink = (prop: Property) => {
    const text = `Assalam-o-Alaikum, I am interested in your property listing: "${prop.title}" in ${prop.location}. Please share the current demand and verification status.`;
    return `https://wa.me/${prop.agent.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full group relative border border-brand-gold/10">
      
      {/* Property Thumbnail & Status badget */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-green-dark">
        <img
          src={property.images[0]}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Deal Type Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-extrabold rounded ${
            property.type === 'Buy' ? 'gold-gradient text-brand-green' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/25'
          }`}>
            {property.type === 'Buy' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-slate-900/85 text-slate-200 border border-slate-700/50">
            {property.category}
          </span>
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
          <span className="text-xs text-slate-200 font-semibold truncate">{property.location}</span>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Price Header */}
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-display font-extrabold text-[#fcd34d]">
              PKR {property.priceStr}
            </span>
            <span className="text-xs font-mono text-slate-400 font-medium">
              {property.area}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewDetails(property)}
            className="font-display font-bold text-base sm:text-lg text-slate-100 hover:text-brand-gold transition duration-200 cursor-pointer line-clamp-1 flex items-center justify-between"
          >
            <span>{property.title}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
          </h3>

          {/* Description Snippet */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Property Specs (Bedrooms/Bathrooms if available) */}
        {property.category !== 'Residential Plots' && property.category !== 'Commercial Plots' && property.category !== 'Shops' && (
          <div className="grid grid-cols-3 gap-2 py-2 border-y border-brand-gold/10 text-slate-300 text-xs text-center font-semibold bg-brand-green-dark/20 rounded">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-slate-400 font-normal">Rooms</span>
              <div className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-brand-gold" />
                <span>{property.bedrooms || 3}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5 border-x border-brand-gold/10">
              <span className="text-slate-400 font-normal">Baths</span>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-brand-gold" />
                <span>{property.bathrooms || 3}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-slate-400 font-normal">Size</span>
              <div className="flex items-center gap-1">
                <Maximize className="w-3.5 h-3.5 text-brand-gold" />
                <span>{property.area}</span>
              </div>
            </div>
          </div>
        )}

        {/* If lands or plots, show direct utility status tags */}
        {(property.category === 'Residential Plots' || property.category === 'Commercial Plots' || property.category === 'Shops') && (
          <div className="flex flex-wrap gap-1.5 py-1.5 border-y border-brand-gold/10 justify-center">
            {property.features.slice(0, 3).map((f, idx) => (
              <span key={idx} className="bg-slate-900/60 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-brand-gold/20 font-medium">
                ✓ {f}
              </span>
            ))}
          </div>
        )}

        {/* Action button triggers */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => onViewDetails(property)}
            className="py-2.5 px-3 bg-brand-green-light/40 hover:bg-brand-green-light/80 border border-brand-gold/20 hover:border-brand-gold/50 text-slate-200 hover:text-white text-xs font-bold rounded-lg transition duration-200"
          >
            View Specs
          </button>
          
          <a
            href={getWhatsAppLink(property)}
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-3 bg-emerald-950/20 hover:bg-emerald-850/40 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white text-xs font-extrabold rounded-lg transition duration-200 flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-500/20" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
