import React from "react";
import Partner from "./components/Partner/Partner";
import Image from "next/image";

import "./Partners.scss";
import IMAGE from "/public/figures/itp-figure--meet_out_partners.svg";

import { getClient } from "../../../lib/ApolloClient";
import { GET_PARTNERS } from "/graphql/queries/companies";
import { Company } from "../../../interfaces/Company";

const Partners = async () => {
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
        <Image src={IMAGE} alt="Meet our partners" />
      </div>
      <h2 className="itp-c-partners__label itp-c-partners__label--first">
        Sponsor Główny 2025
      </h2>
      <h2 className="itp-c-partners__label">Sponsorzy 2025 </h2>
      {companiesData.companies.map((partner: Company) => (
        <Partner key={partner.internalName} partner={partner} />
      ))}
    </section>
  );
};

export default Partners;
