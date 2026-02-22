import { Image } from "../Image";

export interface HomeHero {
  internalName: string;
  upperTop?: string;
  upperBottom?: string;
  lowerTop?: string;
  lowerBottom?: string;
  eventDate?: string;
  icon?: { url: string; alternativeText?: string };
  backgroundImage?: { url: string };
}

export interface AboutBanner {
  internalName?: string;
  scrollingLabel?: string;
  leftText?: string;
  rightText?: string;
}

export interface AboutEssentials {
  internalName?: string;
  catalogueLinkLabel?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
}

export interface OfferCardCta {
  link: { url: string; label: string; target?: string; type?: string };
  type?: string;
  disabled?: boolean;
}

export interface OfferCard {
  title: string;
  content: string;
  cta?: OfferCardCta;
}

export interface AboutOffer {
  internalName?: string;
  cards?: OfferCard[];
}

export interface OrganizationSection {
  internalName: string;
  title?: string;
  paragraphs?: string;
  cta?: {
    link: { url: string; label: string; target?: string; type?: string };
    type?: string;
    disabled?: boolean;
  };
  image?: Image;
  images?: Image[];
}
