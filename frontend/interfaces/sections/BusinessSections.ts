import { Image } from "../Image";

export interface BusinessHero {
  internalName: string;
  date?: string;
  heading?: string;
  asideLetters?: string[];
  barcodeImage?: { url: string; alternativeText?: string };
  focusImage?: { url: string; alternativeText?: string };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BenefitItem {
  text: string;
}

export interface ForBusiness {
  internalName: string;
  stats?: StatItem[];
  cardTitle?: string;
  cardContent?: string;
  benefits?: BenefitItem[];
}

export interface Testimonial {
  content: string;
  authorName: string;
}

export interface ContactFormSection {
  internalName: string;
  testimonials?: Testimonial[];
  successTitle?: string;
  successMessage?: string;
}

export interface TeamMember {
  name: string;
  surname: string;
  tel: string;
  email: string;
  avatar?: Image;
}

export interface OurTeam {
  internalName: string;
  sectionTitle?: string;
  members?: TeamMember[];
}
