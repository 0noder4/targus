import React from "react";
import Image from "next/image";
import { getBackendImageUrl } from "../../../../../lib/api/navigateBackend";

import type { Patron } from "/interfaces/Patrons";

import styles from "./Patron.module.scss";

const Patron = ({ logo, externalName, link, patronType }: Patron) => {
  return (
    <div className={styles.card}>
      {patronType && (
        <div className={styles.typeLabel}>{patronType}</div>
      )}
      <div className={styles.container}>
        <figure>
          <a href={link.url} target={`_${link.target}`}>
            <Image
              src={getBackendImageUrl(logo.url)}
              alt={`Logo ${externalName}`}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
            />
          </a>
        </figure>
      </div>
    </div>
  );
};

export default Patron;
