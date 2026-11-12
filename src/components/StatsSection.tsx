import React from 'react';
import { Home, Users, Calendar, ShieldCheck, Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Home className="w-6 h-6 text-brand-gold" />,
      value: '500+',
      label: 'Properties Listed',
      description: 'Houses, Plots, and Shops',
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      value: '300+',
      label: 'Happy Clients',
      description: 'Satisfied Buyers & Renters',
    },
    {
      id: 3,
      icon: <Calendar className="w-6 h-6 text-brand-gold" />,
      value: '10+ Years',
      label: 'Active Experience',
      description: 'In Peshawar Property Sector',
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      value: '100%',
      label: 'Trusted Service',
      description: 'Verified PDA Paper Trails',
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#02180d]/40 border-y border-brand-gold/10">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 via-transparent to-brand-green/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="glass-card rounded-xl p-5 sm:p-6 text-center flex flex-col items-center justify-center space-y-2 group"
            >
              {/* Icon Container with subtle scale on hover */}
              <div className="w-12 h-12 rounded-full bg-brand-green-dark border border-brand-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Main value */}
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-gold tracking-tight">
                {stat.value}
              </span>
              
              {/* Description Labels */}
              <div className="space-y-0.5">
                <h4 className="font-sans font-bold text-sm sm:text-base text-slate-100 tracking-tight">
                  {stat.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
