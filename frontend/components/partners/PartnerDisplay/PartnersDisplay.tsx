import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";
import { getClient } from "../../../lib/ApolloClient";
import navigateBackend from "/lib/navigateBackend";

// Queries
import { GET_PARTNERS } from "/graphql/queries/companies";

// Interfaces
import { Company } from "../../../interfaces/Company";
import type { PartnerDisplay } from "../../../interfaces/sections/ParterSections";

// Styles & Assets
import "./PartnersDisplay.scss";

const PartnerDisplay = async ({
  mainPartnerLabel,
  partnersLabel,
  image,
}: PartnerDisplay) => {
  const client = getClient();
  const { data: companiesData } = await client.query({
    query: GET_PARTNERS,
    variables: {
      filters: { partnershipType: { in: ["main", "partner"] } }, // Filter by partnershipType
    },
  });

  return (
    <section className="itp-main_section--partners">
      <div className="itp-c-partners__meet_our_partners">
        <Image
          src={navigateBackend(image.url)}
          alt={image.alternativeText}
          width={image.width}
          height={image.height}
        />
      </div>
      <h2 className="itp-c-partners__label itp-c-partners__label--first">
        {mainPartnerLabel}
      </h2>
      <h2 className="itp-c-partners__label">{partnersLabel}</h2>
      {companiesData.companies.map((partner: Company) => (
        <Partner key={partner.internalName} partner={partner} />
      ))}
    </section>
  );
};

export default PartnerDisplay;
