export type PageView = 'home' | 'about' | 'services' | 'doctors' | 'appointment' | 'contact' | 'blog' | 'insurance';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  image: string;
  languages: string[];
  availability: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name mapping
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface InsurancePartner {
  id: string;
  name: string;
  tier: string;
  logoText: string;
}