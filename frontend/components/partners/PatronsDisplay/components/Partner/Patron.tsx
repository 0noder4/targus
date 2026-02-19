import React from "react";
import Image from "next/image";
import { getBackendImageUrl } from "../../../../../lib/api/navigateBackend";

import type { Patron } from "/interfaces/Patrons";

import styles from "./Patron.module.scss";

const Patron = ({ logo, externalName, link }: Patron) => {
  const image = (
    <Image
      src={getBackendImageUrl(logo.url)}
      alt={`Logo ${externalName}`}
      width={logo.width}
      height={logo.height}
      className={styles.logo}
    />
  );

  return (
    <div className={styles.container}>
      <figure>
        {link ? (
          <a href={link.url} target={`_${link.target}`}>
            {image}
          </a>
        ) : (
          image
        )}
      </figure>
    </div>
  );
};

export default Patron;
