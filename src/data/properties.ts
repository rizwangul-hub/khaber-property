import { Property, Testimonial } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: '5 Marla Luxury Smart House',
    category: 'Houses',
    type: 'Buy',
    price: 185, // 1 Crore 85 Lakh
    priceStr: '1.85 Crore',
    location: 'Phase 6, Hayatabad, Peshawar',
    area: '5 Marla',
    bedrooms: 4,
    bathrooms: 5,
    description: 'This state-of-the-art 5 Marla triple-story modern smart home offers luxurious design and exceptional functionality. Built with top-grade construction material (Grade A steel, marble tiling, and luxury woodwork), the house features panoramic windows, automated security cameras, false-ceiling design and high-end thermal insulation.',
    features: ['Smart Home Automation', 'Double Kitchens', 'Rooftop Terrace', 'Car Porch', 'UPS & Solar Wiring Done', 'Wardrobes in all Bedrooms'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Haji Gul Zaman',
      phone: '0333-9114858',
      whatsapp: '923339114858',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    featured: true
  },
  {
    id: 'prop-2',
    title: '1 Kanal Brand New Designer Villa',
    category: 'Houses',
    type: 'Buy',
    price: 680, // 6 Crore 80 Lakh
    priceStr: '6.8 Crore',
    location: 'Sector B, DHA Peshawar',
    area: '1 Kanal',
    bedrooms: 6,
    bathrooms: 7,
    description: 'An architectural masterpiece in the heart of DHA Peshawar, Sector B. This massive 1 Kanal premium builder house screams luxury with Spanish tiles, customized Turkey chandeliers, beautifully manicured lawn, full basement swimming-pool/lounge setup, 3 premium parking spaces, and separate servant quarters.',
    features: ['Basement Pool & Gym', 'Powder Room', 'Imported Spanish Tiling', 'Green Lawn Yard', 'Separate Servant Quarters', '24/7 Security System'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rizwan Khan',
      phone: '0333-9280856',
      whatsapp: '923339280856',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featured: true
  },
  {
    id: 'prop-3',
    title: '10 Marla Residential Plot (Near Park)',
    category: 'Residential Plots',
    type: 'Buy',
    price: 145, // 1 Crore 45 Lakh
    priceStr: '1.45 Crore',
    location: 'Zone 3, Regi Model Town, Peshawar',
    area: '10 Marla',
    description: 'An exceptional high-ground level 10 Marla plot situated on a 40-foot wide street in Regi Model Town (RMT) Zone 3. Excellent location with active gas, water, and electricity lines. Right opposite to the community sector park and walking distance from the commercial center.',
    features: ['Opposite Sector Park', 'Corner Proximity', 'Sewerage Installed', 'Immediate Possession', 'Clear Land Title'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Haji Gul Zaman',
      phone: '0333-9114858',
      whatsapp: '923339114858',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    featured: true
  },
  {
    id: 'prop-4',
    title: 'Prime Location Commercial Shop',
    category: 'Shops',
    type: 'Buy',
    price: 120, // 1 Crore 20 Lakh
    priceStr: '1.2 Crore',
    location: 'Arbab Road, Tehkal, Peshawar',
    area: '3 Marla',
    description: 'Outstanding investment opportunity! A highly visible ground-floor commercial showroom located in the premium shopping hub on main Arbab Road, Tehkal, Peshawar. High foot-traffic area, ideal for clothing brands, cafes, mobile franchises, or professional offices.',
    features: ['Main Road Facing', 'Double-Glazed Solid Glass Front', 'Fully Air Conditioned Wiring', 'Basement Storage Area Included', 'High Rental Return'],
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rizwan Khan',
      phone: '0333-9280856',
      whatsapp: '923339280856',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featured: true
  },
  {
    id: 'prop-5',
    title: 'Modern 3-Bed Apartment Rent',
    category: 'Apartments',
    type: 'Rent',
    price: 0.65, // 65,000 PKR
    priceStr: '65,000 / month',
    location: 'Town Heights, University Road, Peshawar',
    area: '7 Marla Equivalent',
    bedrooms: 3,
    bathrooms: 3,
    description: 'A luxurious fully updated 3-bedroom luxury apartment available for monthly rent on University Road, Peshawar. Highly secure apartment building featuring 24-hour backup generators, basement security parking, central elevators, and high-quality Italian tiled layout.',
    features: ['Backup Generator Active', 'Dedicated Basement Parking', 'Fast Elevators', '24/7 Security Guard', 'Fitted Wooden Wardrobes', 'Balcony facing University Road'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Haji Gul Zaman',
      phone: '0333-9114858',
      whatsapp: '923339114858',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    featured: false
  },
  {
    id: 'prop-6',
    title: '1 Kanal Commercial Development Plot',
    category: 'Commercial Plots',
    type: 'Buy',
    price: 1150, // 11.5 Crore
    priceStr: '11.5 Crore',
    location: 'Ring Road Commercial Zone, Peshawar',
    area: '1 Kanal',
    description: 'An premium commercial development land parcel directly on Ring Road, Peshawar. Ideal for constructing multi-story commercial high-rises, hospitals, showrooms, corporate head offices, or luxury wedding halls. Completely LDA/PDA regulatory cleared with official approvals in place.',
    features: ['Main Ring Road Entrance', 'Approved for Multistory G+7', '120 Ft Front Boundary', 'Direct Utility Access Lines', 'Sui Gas Approved'],
    images: [
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rizwan Khan',
      phone: '0333-9280856',
      whatsapp: '923339280856',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featured: false
  },
  {
    id: 'prop-7',
    title: 'Elegant 5 Marla Single-Story House',
    category: 'Houses',
    type: 'Buy',
    price: 110, // 1.1 Crore
    priceStr: '1.1 Crore',
    location: 'Warsak Road Residential Enclave, Peshawar',
    area: '5 Marla',
    bedrooms: 2,
    bathrooms: 3,
    description: 'A beautiful single-story family home on Warsak Road. This property maximizes available space to provide two massive master bedrooms, cozy American kitchen, beautifully tiled TV lounge, dynamic garage fitting a medium saloon car, and solid cement-built columns designed to carry an additional floor easily structural-wise.',
    features: ['Expandable Second Floor', 'Sweet Drinking Water Well', 'Marble Flooring', 'Built-In TV Console Cabinet', 'Gas Connection Active'],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Haji Gul Zaman',
      phone: '0333-9114858',
      whatsapp: '923339114858',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    featured: false
  },
  {
    id: 'prop-8',
    title: '5 Marla Commercial Corner Plot',
    category: 'Commercial Plots',
    type: 'Buy',
    price: 320, // 3 Crore 20 Lakh
    priceStr: '3.2 Crore',
    location: 'Phase 7 Commercial, Hayatabad, Peshawar',
    area: '5 Marla',
    description: 'Unbelievably rare investment asset! Corner commercial 5 Marla plot situated in Phase 7 Commercial Complex. High footfall, double road access, outstanding visibility, ready for high-yield rental potential once built.',
    features: ['Corner Plot Advantage', 'Double Asphalt Road Frontage', 'Commercial Zone PDA Cleared', 'Ready for immediate transfer', 'Electricity Grid Connected'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: {
      name: 'Rizwan Khan',
      phone: '0333-9280856',
      whatsapp: '923339280856',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Faisal Mehmood',
    role: 'Peshawar Investor',
    text: 'Haji Gul Zaman and his team are the absolute gold standard in Peshawar real estate. I bought two plots in DHA Peshawar through them and the process was beautifully transparent, highly legal, and profitable.',
    rating: 5,
    date: '2026-03-12'
  },
  {
    id: 'test-2',
    name: 'Tehseen Ullah',
    role: 'Homeowner in Hayatabad',
    text: 'Highly recommended builders! They constructed my 5 Marla double story house from grey structure to completion. Their carpentry, tile selection, and cost estimation were precise and highly professional.',
    rating: 5,
    date: '2026-04-05'
  },
  {
    id: 'test-3',
    name: 'Sofia Khan',
    role: 'Overseas Resident (UK)',
    text: 'Being an overseas Pakistani, I was worried about property fraud. Khyber Property Dealer handled my land purchase in Regi Model Town with absolute integrity. They verified all PDA paper-trails for me.',
    rating: 5,
    date: '2026-05-18'
  }
];
