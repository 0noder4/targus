import React from "react";
import { LinkButton } from "/components/global/Button/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "/components/global/Card/Card";

import "./Offer.scss";

const Offer = () => {
  return (
    <div className="itp-l-offer">
      <Card className="itp-l-offer_card">
        <CardTitle>Firmy</CardTitle>
        <CardContent>
          Blisko 100 firm co roku zbiera się w jednym miejscu – w Gmachu Głównym
          Politechniki Warszawskiej – podczas Inżynierskich Targów Pracy, aby
          zaoferować miejsca pracy ambitnym studentom. Więc jeśli szukasz pracy
          albo Twoja firma potrzebuje młodych talentów, to zapisz datę{" "}
          <b>11–12 marca 2025</b> – mamy nadzieję, że do zobaczenia na targach!
        </CardContent>
        <CardFooter>
          <LinkButton href="/docs/Katalog_Firm_30_ITP.pdf">
            zobacz katalog
          </LinkButton>
        </CardFooter>
      </Card>
      <Card className="itp-l-offer_card">
        <CardTitle>Konsultacje CV</CardTitle>
        <CardContent>
          Chcecie, aby Wasze CV przyciągało uwagę lub nie wiecie, co w nim
          umieścić? Skorzystajcie z darmowych konsultacji, które oferujemy we
          współpracy z Biurem Karier Politechniki Warszawskiej. Szykujcie swoje
          CV i widzimy się 11–12 marca na Inżynierskich Targach Pracy!
        </CardContent>
      </Card>
      <Card className="itp-l-offer_card">
        <CardTitle>warsztaty</CardTitle>
        <CardContent>
          Wiedzieliście, że podczas Inżynierskich Targów Pracy możecie nie tylko
          znaleźć pracę, ale też dowiedzieć się wielu ciekawych rzeczy od samych
          przedstawicieli firm? Może zastanawiałeś się, jak będzie wyglądać
          zajezdnia tramwajowa albo zawsze chciałeś pobawić się w projektanta
          procesów wytwarzania? Warsztaty, które oferujemy, są świetną okazją,
          żeby bliżej poznać firmę i przy okazji dowiedzieć się interesujących
          rzeczy na wiele tematów. Jeżeli jednak reprezentujesz firmę, która
          chce podzielić się taką wiedzą ze studentami, skontaktuj się z nami w
          celu ustalenia szczegółów.
        </CardContent>
        <CardFooter>
          <LinkButton disabled={true}>Zapisy wkrótce...</LinkButton>
        </CardFooter>
      </Card>
      <Card className="itp-l-offer_card">
        <CardTitle>PDI</CardTitle>
        <CardContent>
          Już dziś podziel się swoją opinią na temat oczekiwań na rynku pracy,
          wypełniając ankietę <b>„Pracodawca dla Inżyniera”</b>. Wyniki zostaną
          ogłoszone <b>11 marca 2025</b> podczas Inżynierskich Targów Pracy.
        </CardContent>
        <CardFooter>
          <LinkButton href="https://ankieta.pw.edu.pl/index.php/511362?lang=pl">
            Wypełnij ankietę
          </LinkButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Offer;
