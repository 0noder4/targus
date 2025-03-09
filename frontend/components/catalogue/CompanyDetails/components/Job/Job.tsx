import React from "react";

import styles from "./Job.module.scss";
import { JobBrief } from "/interfaces/jobs/JobBrief";

const Job = ({ title, documentId }: JobBrief) => {
  return (
    <a className={styles.container} href={`/jobs/${documentId}`}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.action}>(aplikuj)</span>
    </a>
  );
};

export default Job;
