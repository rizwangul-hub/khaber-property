import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, Phone, User, Trash2, Calendar, ClipboardList, Coins, Calculator, BadgeCheck } from 'lucide-react';
import { Inquiry, ConstructionEstimate } from '../types';

interface AdminLeadsTabProps {
  inquiries: Inquiry[];
  estimates: ConstructionEstimate[];
  onDeleteInquiry: (id: string) => void;
  onDeleteEstimate: (id: string) => void;
  onClearAll: () => void;
}

export default function AdminLeadsTab({ inquiries, estimates, onDeleteInquiry, onDeleteEstimate, onClearAll }: AdminLeadsTabProps) {
  const [filterType, setFilterType] = useState<'All' | 'Property Inquiry' | 'General Lead' | 'Construction Request'>('All');
  const [contactedStatus, setContactedStatus] = useState<Record<string, boolean>>({});

  const toggleContacted = (id: string) => {
    setContactedStatus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalLeads = inquiries.length + estimates.length;
  const propInquiriesCount = inquiries.filter(i => i.type === 'Property Inquiry').length;
  const generalLeadsCount = inquiries.filter(i => i.type === 'General Lead').length;
  const estimatesCount = estimates.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 select-none animate-fadeIn">
      {/* Top Banner Alert representing admin security clearance */}
      <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
            <ShieldCheck className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-extrabold text-sm text-white">Agent Secure Portal Terminal</h4>
            <p className="text-xs text-slate-400">
              Only authorized Khyber Property Dealers can manage these hot Peshawar seller leads.
            </p>
          </div>
        </div>
        <button
          onClick={onClearAll}
          disabled={totalLeads === 0}
          className="px-4 py-2 bg-red-950/40 text-red-400 border border-red-500/20 rounded-lg text-xs font-bold hover:bg-red-550 hover:text-white transition"
        >
          Reset Simulation Data
        </button>
      </div>

      {/* Metrics Counter Panels Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-black">All Leads Logged</span>
          <p className="text-2xl font-display font-black text-[#fcd34d]">{totalLeads}</p>
        </div>
        <div className="glass-card p-4 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-black">Spec Inquiries</span>
          <p className="text-2xl font-display font-black text-white">{propInquiriesCount}</p>
        </div>
        <div className="glass-card p-4 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-black">General Queries</span>
          <p className="text-2xl font-display font-black text-white">{generalLeadsCount}</p>
        </div>
        <div className="glass-card p-4 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-black">Builders Estimates</span>
          <p className="text-2xl font-display font-black text-white">{estimatesCount}</p>
        </div>
      </div>

      {/* Filter Tabs layout */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-brand-gold/10 pb-4">
        {(['All', 'Property Inquiry', 'General Lead', 'Construction Request'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilterType(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
              filterType === tab
                ? 'gold-gradient text-brand-green border-brand-gold font-extrabold'
                : 'bg-brand-green-dark/40 text-slate-300 border-slate-700/50 hover:bg-brand-green/25'
            }`}
          >
            {tab === 'All' ? 'View All Leads' : tab === 'Construction Request' ? 'Construction Estimates' : tab}
          </button>
        ))}
      </div>

      {totalLeads === 0 ? (
        /* Empty feedback message */
        <div className="text-center py-16 space-y-3 bg-[#02180d]/20 border border-[#dfb234]/5 rounded-2xl">
          <ClipboardList className="w-12 h-12 text-slate-500 mx-auto" />
          <h4 className="font-display font-bold text-slate-300 text-lg">No Active Leads Registered</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-normal">
            Try submitting the *Property Inquiry Form* under the Properties tab, or requesting a construction quote budget in the *Builders Estimator Form* to watch this portal sync instantly!
          </p>
        </div>
      ) : (
        /* Leads list representation */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loop Inquiries */}
          {(filterType === 'All' || filterType === 'Property Inquiry' || filterType === 'General Lead') &&
            inquiries
              .filter(i => filterType === 'All' || i.type === filterType)
              .map(lead => (
                <div 
                  key={lead.id}
                  className={`p-5 rounded-2xl border transition relative flex flex-col justify-between space-y-4 ${
                    contactedStatus[lead.id]
                      ? 'bg-slate-900/40 border-slate-700/50 opacity-75'
                      : 'bg-brand-green-dark/60 border-brand-gold/15 hover:border-brand-gold/30 shadow-md'
                  }`}
                >
                  <div className="space-y-2">
                    {/* Badge headers */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        lead.type === 'Property Inquiry'
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-500/10'
                          : 'bg-indigo-950/60 text-indigo-300 border border-indigo-500/10'
                      }`}>
                        {lead.type}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{lead.createdAt}</span>
                    </div>

                    {/* Lead Bio info detail */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-slate-200">{lead.name}</h4>
                        <p className="text-xs font-mono text-slate-400">{lead.phone}</p>
                      </div>
                    </div>

                    {/* Specific property target */}
                    {lead.propertyTitle && (
                      <div className="bg-slate-950/70 p-2.5 rounded-lg border border-white/5 text-[11px]">
                        <span className="text-slate-500 font-medium">Target Listing:</span>{' '}
                        <b className="text-brand-gold">{lead.propertyTitle}</b>
                      </div>
                    )}

                    {/* Question Content */}
                    <p className="text-xs text-slate-300 italic bg-slate-950/30 p-3 rounded-lg leading-relaxed whitespace-pre-line">
                      "{lead.message}"
                    </p>
                  </div>

                  {/* Actions buttons */}
                  <div className="border-t border-slate-800/60 pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleContacted(lead.id)}
                      className={`px-3 py-1.5 rounded text-[10px] font-bold transition flex items-center gap-1 ${
                        contactedStatus[lead.id]
                          ? 'bg-emerald-950 text-emerald-400'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>{contactedStatus[lead.id] ? 'Lead Handled' : 'Mark Handled'}</span>
                    </button>

                    <div className="flex gap-1.5">
                      <a
                        href={`tel:${lead.phone}`}
                        className="p-1.5 rounded bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/10"
                        title="Simulate calling Peshawar contact number"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/10"
                        title="Chat via phone directly on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => onDeleteInquiry(lead.id)}
                        className="p-1.5 rounded bg-red-950/30 hover:bg-red-900/30 text-red-400 border border-red-500/10"
                        title="Trash lead record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

          {/* Loop Construction estimates */}
          {(filterType === 'All' || filterType === 'Construction Request') &&
            estimates.map(est => (
              <div 
                key={est.id}
                className={`p-5 rounded-2xl border transition flex flex-col justify-between space-y-4 relative ${
                  contactedStatus[est.id]
                    ? 'bg-slate-900/40 border-slate-700/50 opacity-75'
                    : 'bg-[#012616] border-[#dfb234]/15 hover:border-[#dfb234]/30 shadow-md'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                      <Calculator className="w-3 h-3 text-brand-gold" />
                      <span>Builders Estimate Request</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{est.createdAt}</span>
                  </div>

                  {/* Lead details */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                      <User className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-slate-200">{est.name}</h4>
                      <p className="text-xs font-mono text-slate-400">{est.phone}</p>
                    </div>
                  </div>

                  {/* Construction specifications calculated */}
                  <div className="bg-slate-950/80 p-3 rounded-lg text-xs space-y-1.5 text-slate-300 border border-brand-gold/10">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service Required:</span>
                      <b className="text-white">{est.serviceType}</b>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Planned Plot Size:</span>
                      <b className="text-white">{est.areaSize} Marla</b>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Stories Count:</span>
                      <b className="text-white">{est.storyCount} Floor(s)</b>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-800/60 font-semibold">
                      <span className="text-brand-gold uppercase tracking-wider text-[10px] flex items-center gap-1 justify-start">
                        <Coins className="w-3 h-3" /> Calculated Cost
                      </span>
                      <b className="text-[#fcd34d] font-display text-sm">~ {est.estimatedCost}</b>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-slate-800/60 pt-3 flex items-center justify-between">
                  <button
                    onClick={() => toggleContacted(est.id)}
                    className={`px-3 py-1.5 rounded text-[10px] font-bold transition flex items-center gap-1 ${
                      contactedStatus[est.id]
                        ? 'bg-emerald-950 text-emerald-400'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                    }`}
                  >
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>{contactedStatus[est.id] ? 'Handled' : 'Mark Handled'}</span>
                  </button>

                  <div className="flex gap-1.5">
                    <a
                      href={`tel:${est.phone}`}
                      className="p-1.5 rounded bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/10"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${est.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/10"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => onDeleteEstimate(est.id)}
                      className="p-1.5 rounded bg-red-950/30 hover:bg-red-900/30 text-red-400 border border-red-500/10"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
