import { Button } from "../Button";
import { Image } from "../Image";

export interface PartnerHero {
  internalName: string;
  mainHeroText: string;
  secondaryHeroText: string;
  cta: Button;
}

export interface PartnersDisplay {
  internalName: string;
  mainPartnerLabel: string;
  partnersLabel: string;
  image: Image;
}

export interface PatronsDisplay {
  internalName: string;
  mediaPatronsLabel: string;
  contentPatronsLabel: string;
  honorablePatronsLabel: string;
}

export interface PartnersDescription {
  internalName: string;
  mainPartnerLabel: string;
  partnersLabel: string;
  image: Image;
}
