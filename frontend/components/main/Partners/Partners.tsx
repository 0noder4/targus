import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";

import "./Partners.scss";
import IMAGE from "/public/figures/itp-figure--meet_out_partners.svg";

import PARTNER_TRAMWAJE_WARSZAWSKIE from "/public/images/partners/itp-partner_logo--tramwaje_warszawskie.svg";
import PARTNER_MARS from "/public/images/partners/itp-partner_logo--mars.png";
import PARTNER_SCHNEIDER from "/public/images/partners/itp-partner_logo--schneider.jpg";
import PARTNER_RWE from "/public/images/partners/itp-partner_logo--rwe.jpg";
import PARTNER_RECCKIT from "/public/images/partners/itp-partner_logo--recckit.png";

const Partners = () => {
  return (
    <section className="itp-main_section--partners">
      <div className="itp-c-partners__meet_our_partners">
        <Image src={IMAGE} alt="Meet our partners" />
      </div>
      <h2 className="itp-c-partners__label itp-c-partners__label--first">
        Sponsor Główny 2024
      </h2>
      <Partner
        logo={PARTNER_TRAMWAJE_WARSZAWSKIE}
        description="Tramwaje Warszawskie"
        type="main"
      />
      <h2 className="itp-c-partners__label">Sponsorzy 2024  </h2>
      <Partner logo={PARTNER_MARS} description="Tramwaje Warszawskie" />
      <Partner logo={PARTNER_SCHNEIDER} description="Schneider" />
      <Partner logo={PARTNER_RWE} description="RWE" />
      <Partner logo={PARTNER_RECCKIT} description="Recckit" />
    </section>
  );
};

export default Partners;
