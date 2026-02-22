import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";

import { getBackendImageUrl } from "/lib/api/navigateBackend";

// Interfaces
import CompanyDetailed from "/interfaces/companies/CompanyDetailed";
import type { PartnersDisplay } from "/interfaces/sections/ParterSections";

// Styles & Assets
import styles from "./PartnersDisplay.module.scss";

const PartnerDisplay = async ({
  mainPartnerLabel,
  partnersLabel,
  image,
  companies,
}: PartnersDisplay & { companies: CompanyDetailed[] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={getBackendImageUrl(image.url)}
          alt={image.alternativeText}
          width={image.width}
          height={image.height}
        />
      </div>
      <h2 className={styles.label}>{mainPartnerLabel}</h2>
      <h2 className={styles.label}>{partnersLabel}</h2>
      {companies.map((partner: CompanyDetailed) => (
        <Partner
          key={partner.internalName}
          {...partner}
          className={styles[partner.partnershipType]}
        />
      ))}
    </section>
  );
};

export default PartnerDisplay;
