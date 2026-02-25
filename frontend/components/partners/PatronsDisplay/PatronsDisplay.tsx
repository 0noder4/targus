import React from "react";
import PatronComponent from "./components/Partner/Patron";

// Interfaces
import type { Patron } from "/interfaces/Patrons";

// Styles & Assets
import styles from "./PatronsDisplay.module.scss";

interface PatronsDisplayProps {
  label: string;
  patrons: Patron[];
}

const PatronsDisplay = ({ label, patrons }: PatronsDisplayProps) => {
  if (!patrons.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{label}</h2>
      {patrons.map((patron: Patron) => (
        <PatronComponent key={patron.internalName} {...patron} />
      ))}
    </section>
  );
};

export default PatronsDisplay;
