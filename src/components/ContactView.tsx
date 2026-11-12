import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactViewProps {
  onSubmitLead: (lead: Omit<Inquiry, 'id' | 'createdAt' | 'type'> & { type: 'General Lead' }) => void;
}

export default function ContactView({ onSubmitLead }: ContactViewProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyTypeInterest, setPropertyTypeInterest] = useState('All');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your Name and mobile Number.');
      return;
    }

    onSubmitLead({
      name,
      phone,
      email: email || undefined,
      message,
      propertyTypeInterest: propertyTypeInterest === 'All' ? undefined : propertyTypeInterest,
      type: 'General Lead'
    });

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 select-none animate-fadeIn">
      
      {/* Top Title Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
          GET SECURED GUIDANCE
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Connect With Peshawar Experts
        </h2>
        <p className="text-slate-400 text-sm">
          Visit our branch office on Arbab Road, Tehkal, Peshawar for on-site document audits or drop an inquiry here for speedy digital portfolio analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Contact Information Cards & Operating ours */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          
          <div className="bg-[#021c10] border border-brand-gold/15 p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="font-display font-extrabold text-xl text-white tracking-tight border-b border-brand-gold/10 pb-3">
              Head Office Contact Info
            </h3>

            <div className="space-y-5">
              {/* Address detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Physical Address</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Main Arbab Road, Tehkal, Peshawar, Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </div>

              {/* Direct call options */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Direct Phone Channels</h4>
                  <div className="space-y-1 mt-1">
                    <p className="text-xs font-bold text-slate-200">
                      Mobile: <a href="tel:03339114858" className="text-brand-gold hover:underline">0333-9114858</a>
                    </p>
                    <p className="text-xs font-bold text-slate-200">
                      Alternate: <a href="tel:03339280856" className="text-brand-gold hover:underline">0333-9280856</a>
                    </p>
                    <p className="text-xs text-slate-400 text-[11px]">
                      Landline: <a href="tel:0915853615" className="hover:text-brand-gold transition">(091) 5853615</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email channel */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Email Correspondence</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    <a href="mailto:info@khyberproperties.com" className="hover:text-brand-gold underline">info@khyberproperties.com</a>
                  </p>
                </div>
              </div>

              {/* Working slot hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-100 text-sm">Business Operations Hours</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Monday to Saturday: <b className="text-slate-200">9:00 AM - 8:00 PM</b> <br />
                    Sunday: Regular appointments via pre-scheduled reservations only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp helper */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-2xl flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-emerald-300">Fast Response Desk WhatsApp</h4>
              <p className="text-xs text-slate-400">Speak directly with Haji Gul Zaman within seconds.</p>
            </div>
            <a
              href="https://wa.me/923339114858?text=Assalam-o-Alaikum%20Khyber%20Properties,%20I%20have%20a%20general%20property%20question%20regarding%20Peshawar%20investments."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 font-bold text-xs rounded-lg border border-emerald-500/30 shrink-0 flex items-center gap-1.5 transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-500/10" />
              <span>Message</span>
            </a>
          </div>

        </div>

        {/* Right Side: Lead Generation Inquiry contact Form */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-brand-gold/25 relative">
          
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-white tracking-tight border-b border-brand-gold/10 pb-3">
              Direct Contact &amp; Inquiry Portal
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fill out this secure lead sheet. All submitted requests are piped directly to the agency's verification panel for agent callback verification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name input */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Haji Faisal Ullah"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                {/* Mobile number input */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                    Phone (WhatsApp Preferred) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0333-9114858"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address (optional) */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. client@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                {/* Property Type Choice */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                    Property Category Interest
                  </label>
                  <select
                    value={propertyTypeInterest}
                    onChange={(e) => setPropertyTypeInterest(e.target.value)}
                    className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-brand-gold"
                  >
                    <option value="All">All Categories</option>
                    <option value="Residential Plots">Residential Plots</option>
                    <option value="Houses">Houses</option>
                    <option value="Commercial Plots">Commercial Plots</option>
                    <option value="Shops">Shops</option>
                    <option value="Apartments">Apartments</option>
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                  Detailed Note &amp; Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what size plot or house you need. (e.g. 5 Marla residential in DHA Sector B, immediate registry)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-brand-gold resize-none leading-relaxed text-slate-200"
                />
              </div>

              {/* Shield/Trust disclaimer */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 bg-brand-green-dark/40 p-2.5 rounded border border-brand-gold/5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>We do not sell data. Your contact is only shared with Haji Gul Zaman &amp; Rizwan Khan.</span>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-widest transition duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/20'
                    : 'gold-gradient text-brand-green hover:opacity-90 active:scale-95 shadow-md'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Lead successfully cataloged!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry Form</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Peshawar physical branch Map locator embedding */}
      <div className="space-y-4">
        <h3 className="font-display font-extrabold text-lg text-white border-b border-brand-gold/15 pb-2">
          Peshawar Head Office Location Map
        </h3>
        <div className="rounded-2xl overflow-hidden border border-brand-gold/20 relative h-[380px] bg-slate-900">
          
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-10 flex items-center justify-center p-4">
            <div className="bg-slate-950/90 border border-brand-gold/30 p-6 rounded-xl max-w-sm text-center space-y-3 pointer-events-auto">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mx-auto border border-brand-gold/20">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-100">Khyber Property Dealer &amp; Builders</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Branch Location: Opposite main Arbab Road Entrance, Tehkal Main Corridor, Peshawar, Khyber Pakhtunkhwa.
              </p>
              <div className="flex gap-2 justify-center">
                <a 
                  href="https://maps.google.com/?q=Arbab+Road+Tehkal+Peshawar"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-gold text-brand-green text-xs font-bold px-4 py-1.5 rounded hover:opacity-95 transition"
                >
                  Retrieve Live Navigation Direction
                </a>
              </div>
            </div>
          </div>

          <iframe
            title="Khyber Properties Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13231.13994357356!2d71.4691471!3d33.9996024!2m3!1f0!2f0!3f0!3m2!1i1248!1i726!3m2!1y1!2sArbab+Road+Peshawar!5e0!3m2!1sen!2spk!4v1718790000000"
            className="w-full h-full border-0 opacity-40 grayscale contrast-125 filter pointer-events-auto"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
