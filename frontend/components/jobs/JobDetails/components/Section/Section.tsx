import React, { ReactNode } from "react";

import styles from "./Section.module.scss";

export const Section = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <div className={styles.title}>{children}</div>;
};

export const SectionContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};
