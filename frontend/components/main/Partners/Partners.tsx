import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";

import "./Partners.scss";
import IMAGE from "/public/figures/itp-figure--meet_out_partners.svg";

const Partners = () => {
  return (
    <section className="itp-main_section--partners">
      <div className="itp-c-partners__meet_our_partners">
        <Image src={IMAGE} alt="Meet our partners" />
      </div>
      <h2 className="itp-c-partners__label itp-c-partners__label--first">
        Sponsor Główny
      </h2>
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
        type="main"
      />
      <h2 className="itp-c-partners__label">Sponsorzy</h2>
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
      />
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
      />
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
      />
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
      />
    </section>
  );
};

export default Partners;
