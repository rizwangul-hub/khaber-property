import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PropertyCard from './components/PropertyCard';
import AboutSection from './components/AboutSection';
import BuildersSection from './components/BuildersSection';
import PropertyDetailsView from './components/PropertyDetailsView';
import ContactView from './components/ContactView';
import AdminLeadsTab from './components/AdminLeadsTab';

import { PROPERTIES, TESTIMONIALS } from './data/properties';
import { Property, Inquiry, ConstructionEstimate } from './types';
import { 
  Building, Handshake, Landmark, Briefcase, Ruler, 
  Star, Phone, MessageSquare, ShieldCheck, Mail, MapPin, 
  SlidersHorizontal, CheckCircle, Key
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter parameters
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [searchType, setSearchType] = useState<string>('');
  const [priceMax, setPriceMax] = useState<number>(1200); // in PKR Lakhs. 1200 Lakhs = 12 Crore

  // Lead Generation state engines
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 'pre-inq-1',
      propertyId: 'prop-1',
      propertyTitle: '5 Marla Luxury Smart House',
      name: 'Faisal Nawaz',
      phone: '0333-5551212',
      email: 'faisal.kp@gmail.com',
      message: 'Assalam-o-Alaikum, I am very interested in this property. Please supply raw documents, structural blueprints, and demand verification details.',
      createdAt: '2026-06-18 04:30 PM',
      type: 'Property Inquiry'
    },
    {
      id: 'pre-inq-2',
      name: 'Kashif Khan Orakzai',
      phone: '0300-9876543',
      email: 'kashif@orakzai.co',
      message: 'I want to sell my plot in DHA Sector A immediately. Connect me with Haji Zaman.',
      createdAt: '2026-06-19 11:20 AM',
      type: 'General Lead'
    }
  ]);

  const [estimates, setEstimates] = useState<ConstructionEstimate[]>([
    {
      id: 'pre-est-1',
      name: 'Dr. Tehseen Ullah',
      phone: '0333-9252525',
      areaSize: 10,
      serviceType: 'Turnkey (Finishing)',
      storyCount: 2,
      estimatedCost: '1.48 Crore PKR',
      createdAt: '2026-06-19T02:15:00.000Z'
    }
  ]);

  // Load persistence from localStorage where applicable
  useEffect(() => {
    const savedInquiries = localStorage.getItem('khyber_inquiries');
    const savedEstimates = localStorage.getItem('khyber_estimates');
    if (savedInquiries) setInquiries(JSON.parse(savedInquiries));
    if (savedEstimates) setEstimates(JSON.parse(savedEstimates));
  }, []);

  // Save changes
  const saveInquiries = (newInq: Inquiry[]) => {
    setInquiries(newInq);
    localStorage.setItem('khyber_inquiries', JSON.stringify(newInq));
  };

  const saveEstimates = (newEst: ConstructionEstimate[]) => {
    setEstimates(newEst);
    localStorage.setItem('khyber_estimates', JSON.stringify(newEst));
  };

  // State log handlers
  const handlePropertyInquiry = (inq: Omit<Inquiry, 'id' | 'createdAt'>) => {
    const fresh: Inquiry = {
      ...inq,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toLocaleString('en-US', { hour12: true }),
    };
    saveInquiries([fresh, ...inquiries]);
  };

  const handleGeneralLead = (lead: Omit<Inquiry, 'id' | 'createdAt' | 'type'> & { type: 'General Lead' }) => {
    const fresh: Inquiry = {
      ...lead,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toLocaleString('en-US', { hour12: true }),
    };
    saveInquiries([fresh, ...inquiries]);
  };

  const handleConstructionEstimate = (est: Omit<ConstructionEstimate, 'id' | 'createdAt'>) => {
    const fresh: ConstructionEstimate = {
      ...est,
      id: `est-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    saveEstimates([fresh, ...estimates]);
  };

  // Lead deletions
  const handleDeleteInquiry = (id: string) => {
    saveInquiries(inquiries.filter(i => i.id !== id));
  };

  const handleDeleteEstimate = (id: string) => {
    saveEstimates(estimates.filter(e => e.id !== id));
  };

  const handleClearAll = () => {
    saveInquiries([]);
    saveEstimates([]);
  };

  // Filter list results
  const filteredProperties = PROPERTIES.filter(property => {
    const matchCategory = searchCategory === '' || property.category === searchCategory;
    
    const matchLocation = searchLocation === '' || 
      property.location.toLowerCase().includes(searchLocation.toLowerCase());
    
    const matchType = searchType === '' || property.type === searchType;
    const matchMaxPrice = property.price <= priceMax;

    return matchCategory && matchLocation && matchType && matchMaxPrice;
  });

  const featuredProperties = PROPERTIES.filter(p => p.featured);

  // Transition helper from Hero Quick Finder
  const handleHeroSearch = (filters: { category: string; location: string; type: string }) => {
    setSearchCategory(filters.category);
    setSearchLocation(filters.location);
    setSearchType(filters.type);
    setCurrentPage('properties');
    setSelectedProperty(null);
  };

  const services = [
    {
      icon: <Building className="w-8 h-8 text-brand-gold" />,
      title: 'Buy Premium Property',
      description: 'Discover thoroughly verified homes, plots of land, commercial plazas, and retail shop units in the most elite sectors of Peshawar.'
    },
    {
      icon: <Handshake className="w-8 h-8 text-brand-gold" />,
      title: 'Sell Your Property',
      description: 'We connect your listed opportunities directly to high-net-worth local buyers and overseas Pakistani investment portals easily.'
    },
    {
      icon: <Key className="w-8 h-8 text-brand-gold" />,
      title: 'Rent Property',
      description: 'Find gorgeous fully-furnished residential suites or retail shops with verified rental contract legal guidelines.'
    },
    {
      icon: <Landmark className="w-8 h-8 text-brand-gold" />,
      title: 'Investment Consultancy',
      description: 'Get deep analytical data on layout shifts, upcoming societal projects, and maximum profit gains.'
    },
    {
      icon: <Ruler className="w-8 h-8 text-brand-gold" />,
      title: 'Builders &amp; construction',
      description: 'Grey structure development and turnkey finishing. We maintain superior raw material grade compliance.'
    }
  ];

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#dfb234] selection:text-[#032114]">
      
      {/* Dynamic persistent Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setSelectedProperty(null); // Clear selected property details on link click
        }}
        inquiriesCount={inquiries.length + estimates.length}
      />

      {/* Main client routing engine switch */}
      <main className="flex-grow">
        
        {/* PAGE 1: Home View */}
        {currentPage === 'home' && !selectedProperty && (
          <div className="space-y-20 pb-12">
            {/* Hero Section Banner */}
            <HeroSection 
              onSearch={handleHeroSearch}
              setCurrentPage={setCurrentPage}
            />

            {/* Statistics Section Bar */}
            <StatsSection />

            {/* Home Page Featured Services Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
                  KP PROFESSIONAL EXPERTISE
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Our Real Estate Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Specialized agency services and consultancy representing premium residential and commercial targets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {services.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-xl glass-card flex flex-col justify-between space-y-4 hover:scale-[1.02] cursor-pointer"
                    onClick={() => {
                      if (item.title.toLowerCase().includes('builder')) {
                        setCurrentPage('builders');
                      } else {
                        setCurrentPage('properties');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                        {item.icon}
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-100 uppercase tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Properties showcase */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pr-1-container">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5 text-left">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
                    EXCLUSIVE PESHAWAR DEALS
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Featured Hot Listings
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('properties');
                    setSearchCategory('');
                    setSearchLocation('');
                    setSearchType('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#dfb234]/15 hover:bg-[#dfb234]/30 text-brand-gold text-xs font-bold rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 transition-all cursor-pointer self-start sm:self-auto"
                >
                  Browse Full Catalog ({PROPERTIES.length})
                </button>
              </div>

              {/* Grid of featured property items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProperties.map((p) => (
                  <PropertyCard 
                    key={p.id}
                    property={p}
                    onViewDetails={handleViewDetails}
                    onInquiry={(prop) => {
                      setSelectedProperty(prop);
                    }}
                  />
                ))}
              </div>
            </section>

            {/* About us snippet or Why Select Us highlight section */}
            <div className="bg-[#02180d]/40 border-y border-brand-gold/10">
              <AboutSection />
            </div>

            {/* Realistic testmimonials */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
                  PESHAWAR CLIENT FEEDBACK
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  What Our Customers Say
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Real client satisfaction ratings for Khyber Property Dealer &amp; Builders.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="p-6 rounded-xl bg-brand-green-dark/50 border border-[#dfb234]/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex text-brand-gold">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">{t.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="border-t border-slate-800/60 pt-3">
                      <h4 className="font-sans font-bold text-slate-100 text-xs sm:text-sm">{t.name}</h4>
                      <p className="text-[10px] text-brand-gold font-semibold uppercase">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* PAGE 2: Full Catalog View with Filter Sidebar */}
        {currentPage === 'properties' && !selectedProperty && (
          <div id="properties-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
            {/* Header Titles */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-4 border-b border-brand-gold/10">
              <div className="space-y-1">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                  PESHAWAR VERIFIED PROPERTIES
                </span>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Authentic Real Estate Catalog
                </h1>
              </div>
              <p className="text-xs font-mono text-slate-400 self-start sm:self-auto uppercase tracking-wider">
                Showing <b className="text-brand-gold">{filteredProperties.length}</b> verified Peshawar records
              </p>
            </div>

            {/* Complex filter panel container */}
            <div className="glass-panel p-5 rounded-2xl border-brand-gold/20 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              
              {/* Type toggle: Buy / Rent */}
              <div>
                <label className="block text-[10px] uppercase font-extrabold text-slate-400 mb-1.5 tracking-wider">Type</label>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-2 text-xs text-white focus:outline-none focus:border-[#dfb234]"
                >
                  <option value="">Any Status Type</option>
                  <option value="Buy">Buy (For Sale)</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>

              {/* Category choice */}
              <div>
                <label className="block text-[10px] uppercase font-extrabold text-slate-400 mb-1.5 tracking-wider">Category</label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-2 text-xs text-white focus:outline-none focus:border-[#dfb234]"
                >
                  <option value="">All Categories</option>
                  <option value="Residential Plots">Residential Plots</option>
                  <option value="Houses">Houses</option>
                  <option value="Commercial Plots">Commercial Plots</option>
                  <option value="Shops">Shops</option>
                  <option value="Apartments">Apartments</option>
                </select>
              </div>

              {/* Location choice */}
              <div>
                <label className="block text-[10px] uppercase font-extrabold text-slate-400 mb-1.5 tracking-wider">Peshawar Zone Sector</label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-brand-green-dark border border-brand-gold/20 rounded-lg py-2 px-2 text-xs text-white focus:outline-none focus:border-[#dfb234]"
                >
                  <option value="">All Peshawar Locations</option>
                  <option value="Hayatabad">Hayatabad Complexes</option>
                  <option value="DHA Peshawar">DHA Sec A &amp; B</option>
                  <option value="Regi Model Town">Regi Model Town (RMT)</option>
                  <option value="University Road">University Road / Heights</option>
                  <option value="Warsak Road">Warsak Road residential</option>
                  <option value="Tehkal">Tehkal Commercial Hub</option>
                </select>
              </div>

              {/* Price range limit slider */}
              <div>
                <label className="block text-[10px] uppercase font-extrabold text-slate-400 mb-1 flex justify-between tracking-wider">
                  <span>Max Budget / Demand</span>
                  <span className="text-[#dfb234] font-bold">~ {priceMax >= 1000 ? `${(priceMax/100).toFixed(1)} Crore` : `${priceMax} Lakh`}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="25"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#dfb234] bg-brand-green-dark rounded cursor-pointer py-1"
                />
              </div>

              {/* Click reset filters */}
              <div className="pt-4 md:pt-1">
                <button
                  onClick={() => {
                    setSearchCategory('');
                    setSearchLocation('');
                    setSearchType('');
                    setPriceMax(1200);
                  }}
                  className="w-full py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-xs text-slate-300 font-bold tracking-wider uppercase transition-all"
                >
                  Reset Active Filters
                </button>
              </div>

            </div>

            {/* List results view container */}
            {filteredProperties.length === 0 ? (
              <div className="text-center py-20 bg-brand-green-dark/30 rounded-2xl border border-brand-gold/10">
                <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto" />
                <h4 className="font-display font-bold text-slate-300 text-lg sm:text-xl mt-3">No Properties Match</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Increase your max budget slider or broaden your location parameters to search all registered Peshawar listings.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewDetails}
                    onInquiry={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PAGE 3: Builders & Estimation page */}
        {currentPage === 'builders' && !selectedProperty && (
          <BuildersSection 
            onSubmitEstimate={handleConstructionEstimate}
          />
        )}

        {/* PAGE 4: About Us page */}
        {currentPage === 'about' && !selectedProperty && (
          <AboutSection />
        )}

        {/* PAGE 5: Contact page */}
        {currentPage === 'contact' && !selectedProperty && (
          <ContactView 
            onSubmitLead={handleGeneralLead}
          />
        )}

        {/* PAGE 6: Hidden/Private Leads management tab */}
        {currentPage === 'leads' && !selectedProperty && (
          <AdminLeadsTab 
            inquiries={inquiries}
            estimates={estimates}
            onDeleteInquiry={handleDeleteInquiry}
            onDeleteEstimate={handleDeleteEstimate}
            onClearAll={handleClearAll}
          />
        )}

        {/* PAGE 7: Selected Property Details Page override routing */}
        {selectedProperty && (
          <PropertyDetailsView 
            property={selectedProperty}
            onBack={() => setSelectedProperty(null)}
            onSubmitInquiry={handlePropertyInquiry}
          />
        )}

      </main>

      {/* Floating Call-to-action WhatsApp button on bottom-right corner for direct access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none pointer-events-none">
        
        {/* Floating Call Info bubble */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-950/90 hover:bg-slate-900 border border-brand-gold/25 py-1.5 px-3 rounded-full pointer-events-auto shadow-glass hover:scale-105 transition-all">
          <Phone className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
          <span className="text-[10px] font-mono font-bold tracking-tight text-brand-gold">Haji Zaman: </span>
          <a href="tel:03339114858" className="text-[10px] text-slate-100 font-bold hover:underline">0333-9114858</a>
        </div>

        {/* Floating whatsapp action badge */}
        <a
          href="https://wa.me/923339114858?text=Assalam-o-Alaikum%20Khyber%20Property%20Dealer%20%26%20Builders"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 pointer-events-auto transition duration-300 relative group"
          title="Direct WhatsApp Chat Desk"
        >
          {/* Pulsing indicator loop */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
          <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute right-16 top-4 bg-slate-950 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat Live (0333-9114858)
          </span>
        </a>
      </div>

      {/* Persistent global broker footer */}
      <Footer setCurrentPage={(page) => {
        setCurrentPage(page);
        setSelectedProperty(null);
      }} />

    </div>
  );
}
