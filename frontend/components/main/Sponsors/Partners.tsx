import React from "react";
import Partner from "./components/Partner/Partner";

import "./Partners.scss";
import EyeCandy from "./components/EyeCandy/EyeCandy";

const Partners = () => {
  return (
    <section className="itp-c-section--partners">
      <div className="itp-c-partners__meet_our_partners"></div>
      <label className="itp-c-partners__label">Sponsor Główny</label>
      <Partner
        logo="/images/sponsors/itp-image-partner-tramwaje.png"
        description="Tramwaje Warszawskie"
        type="main"
      />
      <EyeCandy />
      <label className="itp-c-partners__label">Sponsorzy</label>
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
