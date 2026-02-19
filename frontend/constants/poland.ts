import type { CityData } from "../interfaces/poland/CityData";
export const citiesData: Record<string, CityData> = {
  gdansk: {
    slug: "gdansk",
    title: "BEST GDAŃSK - Inżynierskie Targi Pracy",
    location: "Politechnika Gdańska",
    description:
      "Targi umożliwiające nawiązanie bezpośredniego kontaktu ze studentami jednej z najlepszych uczelni technicznych w Polsce.",
    contactText:
      "Prosimy o bezpośredni kontakt z organizatorami ITP Gdańsk. Szczegóły kontaktowe znajdą Państwo na stronie Targów BEST Gdańsk.",
    websiteUrl: "https://best.gdansk.pl/itp/",
    socialName: "BEST Gdańsk",
    socials: {
      facebook: "https://www.facebook.com/ITP.PG",
      instagram: "https://www.instagram.com/inzynierskie_targi_pracy_pg/",
      linkedin:
        "https://www.linkedin.com/company/inzynierskie-targi-pracy-pg/",
    },
  },
  krakow: {
    slug: "krakow",
    title: "BEST AGH KRAKÓW - Inżynierskie Targi Pracy",
    location: "Akademia Górniczo-Hutnicza (AGH)",
    description:
      "Jedne z największych Targów Pracy w Małopolsce, gromadzące studentów renomowanych krakowskich uczelni technicznych (AGH, Politechnika Krakowska).",
    contactText:
      "Prosimy o bezpośredni kontakt z organizatorami ITP Kraków. Szczegóły kontaktowe znajdą Państwo na stronie Targów BEST Kraków.",
    websiteUrl: "https://itp.best.krakow.pl/",
    socialName: "BEST AGH Kraków",
    socials: {
      facebook: "https://www.facebook.com/BEST.AGH.Krakow",
      instagram: "https://www.instagram.com/bestkrk/",
      linkedin: "https://www.linkedin.com/company/best-agh-krakow/",
    },
  },
  warszawa: {
    slug: "warszawa",
    title: "BEST WARSAW - Inżynierskie Targi Pracy",
    location: "Politechnika Warszawska",
    description:
      "Jedne z najbardziej prestiżowych Targów Pracy w stolicy, odbywające się w Gmachu Głównym, łączące pracodawców z tysiącami ambitnych przyszłych inżynierów.",
    contactText:
      "Prosimy o bezpośredni kontakt z organizatorami ITP Warsaw. Szczegóły kontaktowe znajdą Państwo na stronie Targów BEST Warsaw.",
    websiteUrl: "https://targipracy.org.pl",
    socialName: "BEST Warsaw",
    socials: {
      facebook: "https://facebook.com/BESTWarsaw",
      instagram: "https://instagram.com/best_warsaw",
      linkedin: "https://linkedin.com/company/best-warsaw",
    },
  },
};

export const cityPins = [
  { slug: "gdansk" as const, label: "BEST GDAŃSK", top: "10%", left: "43%" },
  {
    slug: "warszawa" as const,
    label: "BEST WARSZAWA",
    top: "48.3%",
    left: "69.2%",
  },
  {
    slug: "krakow" as const,
    label: "BEST KRAKÓW",
    top: "78.2%",
    left: "57.2%",
  },
];

export const ctaContent = {
  title: "Interesuje Cię dotarcie do inżynierów w innych miastach?",
  subtitles: [
    "Choć każde Targi są organizowane niezależnie przez lokalną grupę BEST, zachęcamy do zapoznania się z ofertą naszych partnerskich wydarzeń.",
    "Udział w Inżynierskich Targach Pracy organizowanych przez lokalne grupy BEST w Polsce to:",
  ],
  features: [
    {
      title: "Rozszerzenie zasięgu",
      text: "Dotrzyj do szerszego grona wykwalifikowanych studentów i absolwentów z różnych regionów kraju.",
    },
    {
      title: "Bezpośredni kontakt",
      text: "W sprawie uczestnictwa w Targach w Gdańsku lub Krakowie prosimy o kontakt bezpośrednio z ich organizatorami, korzystając z linków powyżej.",
    },
    {
      title: "Niezależne inicjatywy",
      text: "Każde Targi oferują unikalny program i specyfikę, dostosowaną do lokalnego rynku pracy i uczelni.",
    },
  ],
};

export const heroTitle = "Inżynierskie Targi\nPracy BEST w Polsce";
