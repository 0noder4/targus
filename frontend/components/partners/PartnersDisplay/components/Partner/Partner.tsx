import React from "react";
import Image from "next/image";

import { getBackendImageUrl } from "/lib/api/navigateBackend";

import CompanyDetailed from "/interfaces/companies/CompanyDetailed";

import styles from "./Partner.module.scss";

const Partner = ({
  logo,
  externalName,
  partnershipType,
  className,
}: CompanyDetailed & { className: string }) => {
  return (
    <div
      className={`${styles.container} ${styles[partnershipType]} ${className}`}
    >
      <figure className={styles.logoWrapper}>
        <Image
          src={getBackendImageUrl(logo.url)}
          alt={`Logo ${externalName}`}
          fill
          unoptimized
          className={styles.logo}
        />
      </figure>
    </div>
  );
};

export default Partner;
