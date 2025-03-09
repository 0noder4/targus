import React from "react";
import PatronComponent from "./components/Partner/Patron";

// Interfaces
import type { Patron } from "/interfaces/Patrons";
import type { PatronsDisplay } from "/interfaces/sections/ParterSections";

// Styles & Assets
import styles from "./PatronsDisplay.module.scss";

const PatronsDisplay = ({
  mediaPatronsLabel,
  patrons,
}: PatronsDisplay & { patrons: Patron[] }) => {
  console.log(patrons);
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{mediaPatronsLabel}</h2>
      {patrons.map((patron: Patron) => (
        <PatronComponent key={patron.internalName} {...patron} />
      ))}
    </section>
  );
};

export default PatronsDisplay;
