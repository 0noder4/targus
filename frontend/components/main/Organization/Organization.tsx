import React from "react";

import "./Organization.scss";
import Button from "@/components/global/Button/Button";
import Link from "next/link";
import Image from "next/image";

import IMAGE_1 from "@/public/images/itp-image--30_final_best.png";
import IMAGE_2 from "@/public/images/itp-image--31_group.png";
import BEST_LOGO from "@/public/images/best/best-logo--horizontal--white.png";

const Organization = () => {
  return (
    <section className="itp-section--organization">
      <div className="itp-section--organization-content_container">
        <div className="itp-section--organization__header">Kim jesteśmy?</div>
        <div className="itp-section--organization__about">
          <p>
            Board of European Students of Technology (BEST) jest międzynarodową
            organizacją studencką skupiającą 88 grup lokalnych w 31 krajach
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
        <Button
          variant="secondary"
          className="itp-section--organization__join_us"
        >
          <Link
            href="https://new.best.warszawa.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dołącz do nas
          </Link>
        </Button>
      </div>
      <aside className="itp-section--organization__photos">
        <figure className="itp-c-image_container">
          <Image
            src={IMAGE_1}
            alt="30 Inżynierskie Targi Pracy, BEST"
            className="itp-c-image"
          />
        </figure>
        <figure className="itp-c-image_container">
          <Image
            src={IMAGE_2}
            alt="31 Inżynierskie Targi Pracy, Grupa"
            className="itp-c-image"
          />
        </figure>
      </aside>
    </section>
  );
};

export default Organization;
