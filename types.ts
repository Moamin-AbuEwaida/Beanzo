import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  availableTypes: number;
}

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}
