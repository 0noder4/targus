import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

import "./OurTeam.scss";

import SANDRA from "/public/images/fr/Sandra_Jarczewska.jpg";
import ASIA from "/public/images/fr/Joanna_Kruk.jpg";
import KRZYSIEK from "/public/images/fr/Krzysztof_Folek.jpg";
import KASIA from "/public/images/fr/Katarzyna_Gajos.jpg";

const OurTeam = () => {
  return (
    <section className="itp-business_section--our_team">
      <h1 className="itp-c-section_header itp-c-section_header--our_team">
        Lub skontaktuj się bezpośrednio
      </h1>
      <div className="itp-c-team_container">
        <PersonCard
          name="Sandra"
          surname="Jarczewska"
          tel="668-937-983"
          email="sandra.jarczewska@best.pw.edu.pl"
          avatar={SANDRA}
        />
        <PersonCard
          name="Joanna"
          surname="Kruk"
          tel="799-191-177"
          email="joanna.kruk@best.pw.edu.pl"
          avatar={ASIA}
        />
        <PersonCard
          name="Krzysztof"
          surname="Folek"
          tel="731-075-470"
          email="krzysztof.folek@best.pw.edu.pl"
          avatar={KRZYSIEK}
        />
        <PersonCard
          name="Katarzyna"
          surname="Gajos"
          tel="790-647-206"
          email="kasia.gajos@best.pw.edu.pl"
          avatar={KASIA}
        />
      </div>
    </section>
  );
};

export default OurTeam;
