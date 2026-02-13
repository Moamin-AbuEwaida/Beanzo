import { LucideIcon } from 'lucide-react';

export interface ProductSize {
  name: string;
  volume: string;
  price: number;
  calories: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  availableTypes: number;
  description: string;
  ingredients: string[];
  sizes: ProductSize[];
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