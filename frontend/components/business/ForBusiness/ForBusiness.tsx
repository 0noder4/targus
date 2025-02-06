import React from "react";
import "./ForBusiness.scss";
import { Card, CardContent, CardTitle } from "/components/global/Card/Card";

function ForBusiness() {
  return (
    <section className="itp-business_section--for_business" id="stats">
      <div className="itp-c-for_business__about">
        <ul className="itp-c-for_business__about__stats">
          <li>
            <h1>300+</h1>
            <label>zapisów na warszaty</label>
          </li>
          <li>
            <h1>1100+</h1>
            <label>wypełnień ankiety pdi</label>
          </li>
          <li>
            <h1>300+</h1>
            <label>uczestników wydarzenia</label>
          </li>
        </ul>
        <Card className="itp-c-for_business__about__why_us">
          <CardTitle>Zostań wystawcą</CardTitle>
          <CardContent>
            Jeśli Inżynierskie Targi Pracy to miejsce, gdzie Wasza firma
            idealnie pasuje i chcecie nawiązać kontakt z pełnymi pasji
            studentami, mamy coś dla Was! Jak zostać wystawcą? To proste:
            <br />
            <p>
              1. Na naszej stronie wejdźcie w zakładkę Strefa Firmy wypełnijcie
              formularz zgłoszeniowy. Możecie także skontaktować się z nami
              bezpośrednio – dane kontaktowe znajdziecie na stronie w zakładce
              Kontakt.
            </p>
            <p>
              2. Nasi konsultanci skontaktują się z Wami, aby potwierdzić
              zgłoszenie i ustalić szczegóły.
            </p>
            <p>
              3. Zarezerwujcie miejsce – nasz przedstawiciel pomoże Wam wybrać
              najlepsze stanowisko.
            </p>
            <p>
              4. Gotowe! Jesteście uczestnikami Inżynierskich Targów Pracy.
              Pozostało tylko ustalić ostatnie szczegóły.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="itp-c-benefits">
        <div className="itp-c-benefits__bullet_point" />
        <div className="itp-c-benefits__bullet_point" />
        <div className="itp-c-benefits__bullet_point" />
        <label className="itp-c-benefits__entry" id="_1">
          Zyskaj rozpoznalność na Politechnice Warszawskiej - najlepszej uczelni
          technicznej w polsce
        </label>
        <label className="itp-c-benefits__entry" id="_2">
          Przeprowadź warsztaty lub webinary w zakresach ważnych dla twojej
          branży
        </label>
        <label className="itp-c-benefits__entry" id="_3">
          Dowiedz się o wymaganiach polskich studentów bezpośrednio od nich
          dzięki plebiscytowi PDI
        </label>
      </div>
    </section>
  );
}

export default ForBusiness;
