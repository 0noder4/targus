import React from "react";

import PARTNER_ICON from "/public/icons/itp-icon--partner.svg";
import MAIN_PARTNER_ICON from "/public/icons/itp-icon--main_partner.svg";

// Types
import { CompanyBrief } from "/interfaces/Company";

// Styles
import styles from "./Company.module.scss";
import Icon from "/components/global/Icon/Icon";

const Company = ({
  externalName,
  partnershipType,
  documentId,
  setSelectedCompany,
  setShowMobile,
}: CompanyBrief & {
  setSelectedCompany: (id: string) => void;
  setShowMobile: (bool: boolean) => void;
}) => {
  return (
    <div
      className={`${styles.container} ${styles[partnershipType]}`}
      onClick={() => {
        setSelectedCompany(documentId);
        setShowMobile(true);
      }}
    >
      <div className={styles.label}>{externalName}</div>
      {partnershipType == "main" ? (
        <Icon className={styles.icon} src={MAIN_PARTNER_ICON}></Icon>
      ) : (
        ""
      )}
      {partnershipType == "partner" ? (
        <Icon className={styles.icon} src={PARTNER_ICON}></Icon>
      ) : (
        ""
      )}
    </div>
  );
};

export default Company;
