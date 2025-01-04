import React from "react";
import PersonCard from "./components/PersonCard/PersonCard";

import "./OurTeam.scss";

const OurTeam = () => {
  return (
    <section className="itp-business_section--our_team">
      <h1 className="itp-c-section_header itp-c-section_header--our_team">
        Lub skontaktuj się bespośrednio
      </h1>
      <div className="itp-c-team_container">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </section>
  );
};

export default OurTeam;
