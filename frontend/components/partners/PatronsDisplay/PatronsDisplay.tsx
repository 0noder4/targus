import React from "react";
import PatronComponent from "./components/Partner/Patron";

// Interfaces
import type { Patron } from "/interfaces/Patrons";
import type { PatronsDisplay } from "/interfaces/sections/ParterSections";

// Styles & Assets
import styles from "./PatronsDisplay.module.scss";

const PatronsDisplay = ({
  patronsLabel,
  patrons,
}: PatronsDisplay & { patrons: Patron[] }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{patronsLabel}</h2>
      {patrons.map((patron: Patron) => (
        <PatronComponent key={patron.internalName} {...patron} />
      ))}
    </section>
  );
};

export default PatronsDisplay;
