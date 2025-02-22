import React from "react";
import Image from "next/image";

import "./Partner.scss";
import { Company } from "../../../../../interfaces/company";
import navigateBackend from "/lib/navigateBackend";

interface PartnerProps {
  partner: Company;
}

const Partner = ({ partner }: PartnerProps) => {
  return (
    <div
      className={`itp-c-partner-container itp-c-partner--${partner.partnershipType}`}
    >
      <figure>
        <Image
          src={navigateBackend(partner.logo.url)}
          alt={`Logo ${partner.externalName}`}
          width={partner.logo.width}
          height={partner.logo.height}
          className="itp-c-partner__logo"
        />
      </figure>
    </div>
  );
};

export default Partner;
