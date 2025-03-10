import React from "react";
import navigateBackend from "/lib/api/navigateBackend";
import Markdown from "react-markdown";
import Image from "next/image";

// Components
import { Card, CardContent, CardTitle } from "/components/global/Card/Card";

// Types
import type { PartnersDescription } from "/interfaces/sections/ParterSections";
import CompanyDetailed from "/interfaces/companies/CompanyDetailed";

// Styles
import styles from "./PartnersDescription.module.scss";

function PartnersDescription({
  mainPartnerLabel,
  partnersLabel,
  image,
  companies,
  internalName,
}: PartnersDescription & { companies: CompanyDetailed[] }) {
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
            variant="light"
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
