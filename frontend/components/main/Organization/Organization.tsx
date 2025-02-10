import React from "react";
import Image from "next/image";

import { LinkButton } from "/components/global/Button/Button";

import "./Organization.scss";
import GROUP_IMAGE from "/public/images/itp-image--31_group.png";

const Organization = () => {
  return (
    <section className="itp-main_section--organization">
      <div className="itp-c-organization_container">
        <h2 className="itp-c-organization_header">Kim jesteśmy?</h2>
        <div className="itp-c-organization_about">
          <p>
            Board of European Students of Technology (BEST) jest międzynarodową
            organizacją studencką skupiającą 84 grup lokalnych w 30 krajach
            Europy. W Polsce istnieje 6 takich grup – jedna z nich działa na
            Politechnice Warszawskiej od ponad 34 lat. To właśnie my!
          </p>
          <p>
            W ciągu długoletniej działalności mieliśmy okazję realizować wiele
            projektów o różnorodnej tematyce takich jak Inżynierskie Targi
            Pracy, hackathon BEST Hacking League, czy cykl kursów
            międzynarodowych BEST Courses. Dobrze wiemy, czego potrzebują
            studenci, bo sami nimi jesteśmy! Robimy wszystko, aby uczelnia nie
            kojarzyła się tylko z nauką. Zostań jednym z nas: twórz wyjątkowe
            projekty, zawieraj przyjaźnie na całe życie, dostrzegaj swój
            nieodkryty potencjał.
          </p>
        </div>
        <LinkButton
          href="https://new.best.warszawa.pl/"
          variant="secondary"
          className="itp-c-organization_join_us"
        >
          Dołącz do nas
        </LinkButton>
      </div>
      <aside className="itp-c-organization_photos">
        <figure className="itp-c-image_container">
          <Image
            src={GROUP_IMAGE}
            alt="31 Inżynierskie Targi Pracy, Grupa"
            className="itp-c-image"
          />
        </figure>
      </aside>
    </section>
  );
};

export default Organization;
