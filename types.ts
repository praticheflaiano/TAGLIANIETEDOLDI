import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnerCategory {
  category: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BrandItem {
  name: string;
  description: string;
}