import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";

import navigateBackend from "../../../lib/api/navigateBackend";

// Interfaces
import { Company } from "/interfaces/Company";
import type { PartnersDisplay } from "/interfaces/sections/ParterSections";

// Styles & Assets
import styles from "./PartnersDisplay.module.scss";

const PartnerDisplay = async ({
  mainPartnerLabel,
  partnersLabel,
  image,
  companies,
}: PartnersDisplay & { companies: Company[] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={navigateBackend(image.url)}
          alt={image.alternativeText}
          width={image.width}
          height={image.height}
        />
      </div>
      <h2 className={styles.label}>{mainPartnerLabel}</h2>
      <h2 className={styles.label}>{partnersLabel}</h2>
      {companies.map((partner: Company) => (
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
