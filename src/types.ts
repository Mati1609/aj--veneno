export interface Product {
  id: string;
  name: string;
  tagline: string;
  spiceLevel: number; // 1 to 5
  spiceText: string;
  description: string;
  tasteNotes: string[];
  pairing: string;
  volume: string;
  price: string;
  badge: string;
  image?: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  borderColor: string;
}

export interface FoodPairing {
  id: string;
  name: string;
  subtitle: string;
  verdict: string;
  rating: string;
  chiliApproved: boolean;
  imageAlt: string;
  quote: string;
  tags: string[];
  sauceRecommendation: string;
}

export interface SocialPost {
  id: string;
  author: string;
  handle: string;
  location: string;
  quote: string;
  tag: string;
  spiceLevel: string;
  rotation: string;
  context: string;
}

export interface Retailer {
  name: string;
  category: 'Presencial' | 'Online';
  badge?: string;
  locations: string;
  address?: string;
  schedule?: string;
  availability: string;
  highlights?: string[];
  actionText: string;
  actionUrl?: string;
  iconName: string;
}
