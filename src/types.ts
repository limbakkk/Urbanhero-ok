export interface GymInfo {
  id: 'el-pino' | 'sevilla-este';
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  postalCode: string;
  externalUrl: string;
  mapUrl?: string;
  coachingTeam?: string[];
  coachingSummary?: string;
  priceSummary?: string;
  instagramUrl: string;
  instagramHandle: string;
  phone: string;
  phoneFormatted: string;
  disciplines: string[];
  keyFeatures: string[];
  targetAudience: string;
  heroImage: string;
  colorAccent: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Comunidad' | 'Instalaciones' | 'Entrenamiento';
  summary: string;
  locationTag: 'El Pino' | 'Sevilla Este' | 'Ambos Centros';
  readTime: string;
  imageUrl: string;
}

export interface InstagramPost {
  id: string;
  account: 'El Pino' | 'Sevilla Este';
  handle: string;
  imageUrl: string;
  caption: string;
  postUrl: string;
  likes: number;
  comments: number;
  date: string;
  tag?: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'clases' | 'ubicacion';
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}
