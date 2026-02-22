import React from "react";
import { LinkButton } from "/components/global/Button/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "/components/global/Card/Card";

import "./Offer.scss";
import type { AboutOffer, OfferCard } from "/interfaces/sections/HomeSections";

const DEFAULT_CARDS: OfferCard[] = [
  {
    title: "Firmy",
    content:
      "Blisko 100 firm co roku zbiera się w jednym miejscu – w Gmachu Głównym Politechniki Warszawskiej – podczas Inżynierskich Targów Pracy, aby zaoferować miejsca pracy ambitnym studentom. Więc jeśli szukasz pracy albo Twoja firma potrzebuje młodych talentów, to zapisz datę <b>10–11 marca 2026</b> – mamy nadzieję, że do zobaczenia na targach!",
    cta: { link: { url: "/catalogue", label: "zobacz katalog", target: "self" }, type: "secondary" },
  },
  {
    title: "Konsultacje CV",
    content:
      "Chcecie, aby Wasze CV przyciągało uwagę lub nie wiecie, co w nim umieścić? Skorzystajcie z darmowych konsultacji, które oferujemy we współpracy z Biurem Karier Politechniki Warszawskiej. Szykujcie swoje CV i <b>widzimy się 10–11 marca na Inżynierskich Targach Pracy!</b>",
  },
  {
    title: "warsztaty",
    content:
      "Wiedzieliście, że podczas Inżynierskich Targów Pracy możecie nie tylko znaleźć pracę, ale też dowiedzieć się wielu ciekawych rzeczy od samych przedstawicieli firm? Może zastanawiałeś się, jak będzie wyglądać zajezdnia tramwajowa albo zawsze chciałeś pobawić się w projektanta procesów wytwarzania? Warsztaty, które oferujemy, są świetną okazją, żeby bliżej poznać firmę i przy okazji dowiedzieć się interesujących rzeczy na wiele tematów. Jeżeli jednak reprezentujesz firmę, która chce podzielić się taką wiedzą ze studentami, skontaktuj się z nami w celu ustalenia szczegółów.",
    cta: {
      link: {
        url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=nCJQO3jNiEWbz5e3Yp4vD4gwrj5j-d9Oq9l48tsRaCVUMUtWNTlMQUNWMEFEM1JETExQR1pNRUMyNC4u",
        label: "Zapisy na warsztaty",
        target: "blank",
      },
      type: "secondary",
    },
  },
  {
    title: "PDI",
    content:
      'Już dziś podziel się swoją opinią na temat oczekiwań na rynku pracy, wypełniając ankietę <b>„Pracodawca dla Inżyniera"</b>. Wyniki zostaną ogłoszone <b>10 marca 2026</b> podczas Inżynierskich Targów Pracy.',
    cta: {
      link: {
        url: "https://ankieta.pw.edu.pl/index.php/229556?lang=pl",
        label: "Ankieta PDI",
        target: "blank",
      },
      type: "secondary",
    },
  },
];

const mapVariant = (type?: string): "primary" | "secondary" | "orange" | "dark" => {
  if (type === "main") return "primary";
  if (type === "secondary" || type === "orange" || type === "dark") return type;
  return "secondary";
};

const Offer = (props?: AboutOffer) => {
  const cards = props?.cards?.length ? props.cards : DEFAULT_CARDS;

  return (
    <div className="itp-l-offer">
      {cards.map((card, index) => (
        <Card
          key={card.title + index}
          className="itp-l-offer_card"
          id={card.title === "PDI" ? "pdi" : undefined}
        >
          <CardTitle>{card.title}</CardTitle>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: card.content }} />
          </CardContent>
          {card.cta && (
            <CardFooter>
              <LinkButton
                href={card.cta.link.url}
                target={
                card.cta.link.target === "self" || card.cta.link.target === "_self"
                  ? "_self"
                  : "_blank"
              }
                variant={mapVariant(card.cta.type)}
                disabled={card.cta.disabled}
              >
                {card.cta.link.label}
              </LinkButton>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Offer;
