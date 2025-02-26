import { Button } from "../Button";
import { Image } from "../Image";

export interface PartnerHero {
  internalName: string;
  mainHeroText: string;
  secondaryHeroText: string;
  cta: Button;
}

export interface PartnerDisplay {
  internalName: string;
  mainPartnerLabel: string;
  partnersLabel: string;
  image: Image;
}

export interface PartnersDescription {
  internalName: string;
  mainPartnerLabel: string;
  partnersLabel: string;
  image: Image;
}
