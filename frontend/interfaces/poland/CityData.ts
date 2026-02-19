export interface CityData {
  slug: "gdansk" | "krakow" | "warszawa";
  title: string;
  location: string;
  description: string;
  contactText: string;
  websiteUrl: string;
  socialName: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
