import React from "react";
import type { PartnersDescription } from "../../../interfaces/sections/ParterSections";
import { Company } from "/interfaces/Company";

import styles from "./PartnersDescription.module.scss";
import Image from "next/image";
import navigateBackend from "/lib/navigateBackend";
import { Card, CardContent, CardTitle } from "/components/global/Card/Card";
import Markdown from "react-markdown";

function PartnersDescription({
  mainPartnerLabel,
  partnersLabel,
  image,
  companies,
  internalName,
}: PartnersDescription & { companies: Company[] }) {
  return (
    <div className={styles.section} id={internalName}>
      <div className={styles.grid_container}>
        <h2 className={styles.label}>{mainPartnerLabel}</h2>
        <h2 className={styles.label}>{partnersLabel}</h2>
        <div className={styles.image}>
          <Image
            src={navigateBackend(image.url)}
            alt={image.alternativeText}
            width={image.width}
            height={image.height}
          />
        </div>
        {companies.map((company) => (
          <Card
            key={company.internalName}
            className={styles[company.partnershipType]}
            type="light"
          >
            <CardTitle>{company.externalName}</CardTitle>
            <CardContent>
              <Markdown>{company.description}</Markdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PartnersDescription;
