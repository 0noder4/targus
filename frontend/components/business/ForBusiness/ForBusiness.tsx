import React from "react";
import "./ForBusiness.scss";
import { Card, CardContent, CardTitle } from "@/components/global/Card/Card";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatus.
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
