export interface Property {
  id: string;
  title: string;
  category: 'Residential Plots' | 'Houses' | 'Commercial Plots' | 'Shops' | 'Apartments';
  type: 'Buy' | 'Rent';
  price: number; // in PKR lakhs, or converted representation. E.g., 250 for 2.5 Crore
  priceStr: string; // e.g. "2.5 Crore", "95 Lakh", "1.2 Lakh/month"
  location: string; // e.g. "Phase 6, Hayatabad, Peshawar"
  area: string; // e.g. "5 Marla", "1 Kanal", "10 Marla"
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    whatsapp: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface Inquiry {
  id: string;
  propertyId?: string;
  propertyTitle?: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  createdAt: string;
  type: 'Property Inquiry' | 'General Lead' | 'Construction Request';
  budget?: string;
  propertyTypeInterest?: string;
}

export interface ConstructionEstimate {
  id: string;
  name: string;
  phone: string;
  areaSize: number; // in Marla
  serviceType: 'Grey Structure' | 'Turnkey (Finishing)' | 'Renovation';
  storyCount: number; // 1, 2, 3
  estimatedCost: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}
