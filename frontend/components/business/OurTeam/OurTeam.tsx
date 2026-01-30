import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

import "./OurTeam.scss";

import JULIA from "/public/images/fr/Julia_Dabrowska.jpg";
import JAGODA from "/public/images/fr/Jagoda_Jaszczura.jpg";
import LIZA from "/public/images/fr/Liza_Guta.jpg";
import MICHAL from "/public/images/fr/Michal_Lesny.jpg";

const OurTeam = () => {
  return (
    <section className="itp-business_section--our_team">
      <h2 className="itp-c-section_header itp-c-section_header--our_team">
        Lub skontaktuj się bezpośrednio
      </h2>
      <div className="itp-c-team_container">
        <PersonCard
          name="Julia"
          surname="Dąbrowska"
          tel="536-866-700"
          email="julia.dabrowska@best.pw.edu.pl"
          avatar={JULIA}
        />
        <PersonCard
          name="Jagoda"
          surname="Jaszczura"
          tel="665-585-909"
          email="jagoda.jaszczura@best.pw.edu.pl"
          avatar={JAGODA}
        />
        <PersonCard
          name="Yelizaveta"
          surname="Guta"
          tel="501-394-112"
          email="yelizaveta.guta@best.pw.edu.pl"
          avatar={LIZA}
        />
        <PersonCard
          name="Michał"
          surname="Leśny"
          tel="512-961-742"
          email="michal.lesny@best.pw.edu.pl"
          avatar={MICHAL}
        />
      </div>
    </section>
  );
};

export default OurTeam;
