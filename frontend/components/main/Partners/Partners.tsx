import React from "react";
import Partner from "./components/Partner/Partner";

import "./Partners.scss";
import EyeCandy from "./components/EyeCandy/EyeCandy";

const Partners = () => {
  return (
    <section className="itp-main_section--partners">
      <div className="itp-c-partners__meet_our_partners"></div>
      <h2 className="itp-c-partners__label">Sponsor Główny</h2>
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
        type="main"
      />
      <EyeCandy />
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
