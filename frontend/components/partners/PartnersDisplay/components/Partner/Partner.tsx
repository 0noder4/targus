import React from "react";
import Image from "next/image";

import navigateBackend from "/lib/api/navigateBackend";

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
      <figure>
        <Image
          src={navigateBackend(logo.url)}
          alt={`Logo ${externalName}`}
          width={logo.width}
          height={logo.height}
          className={styles.logo}
        />
      </figure>
    </div>
  );
};

export default Partner;
