import React from "react";
import Image from "next/image";
import navigateBackend from "/lib/navigateBackend";

import type { Patron } from "/interfaces/Patrons";

import styles from "./Patron.module.scss";

const Patron = ({ logo, externalName, link }: Patron) => {
  return (
    <div className={`${styles.container}`}>
      <figure>
        <a href={link.url} target={`_${link.target}`}>
          <Image
            src={navigateBackend(logo.url)}
            alt={`Logo ${externalName}`}
            width={logo.width}
            height={logo.height}
            className={styles.logo}
          />
        </a>
      </figure>
    </div>
  );
};

export default Patron;
