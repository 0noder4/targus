import React from "react";

// Types
import { JobBrief } from "/interfaces/jobs/JobBrief";

// Components
import { LinkButton } from "/components/global/Button/Button";

// Styles
import styles from "./JobWallEntry.module.scss";

const JobWallEntry = ({
  documentId,
  title,
  company,
  cities,
  variant = "default",
}: JobBrief & { variant?: "default" | "special" }) => {
  if (title == "Laborant betonu - płatne praktyki/staż") {
    variant = "special";
  }
  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.bottom}>
        <div className={styles.details}>
          <h3 className={styles.company}>{company.externalName}</h3>
          <h4 className={styles.location}>
            {cities.map((city: { externalName: string }) => city.externalName)}
          </h4>
        </div>
        <LinkButton
          className={styles.button}
          href={`/jobs/${documentId}`}
          target="_self"
          variant={variant == "special" ? "dark" : "orange"}
        >
          Aplikuj
        </LinkButton>
      </div>
    </div>
  );
};

export default JobWallEntry;
