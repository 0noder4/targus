import React from "react";
import Markdown from "react-markdown";
import "./ForBusiness.scss";
import { Card, CardContent, CardTitle } from "/components/global/Card/Card";
import type { ForBusiness } from "/interfaces/sections/BusinessSections";
import { formatRichText } from "/lib/formatRichText";

const DEFAULT_STATS = [
  { value: "300+", label: "zapisów na warszaty" },
  { value: "1100+", label: "wypełnień ankiety pdi" },
  { value: "10000+", label: "uczestników wydarzenia" },
];

const DEFAULT_CARD_TITLE = "Zostań wystawcą";
const DEFAULT_CARD_CONTENT = `Jeśli Inżynierskie Targi Pracy to miejsce, gdzie Wasza firma idealnie pasuje i chcecie nawiązać kontakt z pełnymi pasji studentami, mamy coś dla Was!

Jak zostać wystawcą? To proste:

1. Na naszej stronie wejdźcie w zakładkę Strefa Firmy i wypełnijcie formularz zgłoszeniowy. Możecie także skontaktować się z nami bezpośrednio – dane kontaktowe znajdziecie na stronie w zakładce Kontakt.

2. Nasi konsultanci skontaktują się z Wami, aby potwierdzić zgłoszenie i ustalić szczegóły.

3. Zarezerwujcie miejsce – nasz przedstawiciel pomoże Wam wybrać najlepsze stanowisko.

4. Gotowe! Jesteście uczestnikami Inżynierskich Targów Pracy. Pozostało tylko ustalić ostatnie szczegóły.`;

const DEFAULT_BENEFITS = [
  "Zyskaj rozpoznawalność na Politechnice Warszawskiej - najlepszej uczelni technicznej w Polsce",
  "Przeprowadź warsztaty lub webinary w zakresach ważnych dla twojej branży",
  "Dowiedz się o wymaganiach polskich studentów bezpośrednio od nich dzięki plebiscytowi PDI",
];

function ForBusiness(props?: ForBusiness) {
  const stats = props?.stats?.length ? props.stats : DEFAULT_STATS;
  const cardTitle = props?.cardTitle ?? DEFAULT_CARD_TITLE;
  const cardContent = props?.cardContent ?? DEFAULT_CARD_CONTENT;
  const benefits = props?.benefits?.length
    ? props.benefits.map((b) => b.text)
    : DEFAULT_BENEFITS;

  return (
    <section className="itp-business_section--for_business" id="stats">
      <div className="itp-c-for_business__about">
        <ul className="itp-c-for_business__about__stats">
          {stats.map((stat, i) => (
            <li key={i}>
              <h4>{stat.value}</h4>
              <label>{stat.label}</label>
            </li>
          ))}
        </ul>
        <Card className="itp-c-for_business__about__why_us">
          <CardTitle>{cardTitle}</CardTitle>
          <CardContent>
            <Markdown>{formatRichText(cardContent)}</Markdown>
          </CardContent>
        </Card>
      </div>
      <div className="itp-c-benefits">
        {benefits.map((_, i) => (
          <div key={i} className="itp-c-benefits__bullet_point" />
        ))}
        {benefits.map((text, i) => (
          <label
            key={i}
            className="itp-c-benefits__entry"
            id={i === 0 ? "_1" : i === 1 ? "_2" : `_${i + 1}`}
          >
            {text}
          </label>
        ))}
      </div>
    </section>
  );
}

export default ForBusiness;
