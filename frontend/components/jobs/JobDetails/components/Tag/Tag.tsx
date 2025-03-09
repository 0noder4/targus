import React, { ReactNode } from "react";

import styles from "./Tag.module.scss";

const Tag = ({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "dark" | "light";
}) => {
  return (
    <div className={`${styles.container} ${styles[variant]}`}>{children}</div>
  );
};

export default Tag;
