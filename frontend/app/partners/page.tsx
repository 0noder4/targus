import React from "react";
import { Metadata } from "next";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Core sections
import Header from "/components/global/Header/Header";
import Hero from "/components/partners/Hero/Hero";
import PartnerDisplay from "../../components/partners/PartnersDisplay/PartnersDisplay";
import Footer from "/components/global/Footer/Footer";
import PartnersDescription from "/components/partners/PartnersDescription/PartnersDescription";
import PatronsDisplay from "/components/partners/PatronsDisplay/PatronsDisplay";

// Queries
import { GET_PARTNERS_SECTIONS } from "/graphql/queries/sections";
import { GET_PARTNERS_METADATA } from "/graphql/queries/metadata";
import { GET_PARTNERS } from "/graphql/queries/companies";
import { GET_PATRONS } from "/graphql/queries/patrons";

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query: GET_PARTNERS_METADATA,
  });

  const {
    partnersPage: { metadata },
  } = data;

  return {
    title: metadata.pageTitle,
    description: metadata.pageDescription,
    keywords: metadata.keywords,
    openGraph: {
      url: navigateBackend(metadata.twitterCard.T_image.url),
      title: metadata.openGraph.OG_title,
      description: metadata.openGraph.OG_description,
      siteName: metadata.canonicalUrl,
      type: metadata.openGraph.OG_type,
    },
    twitter: {
      description: metadata.twitterCard.T_description,
      title: metadata.twitterCard.T_title,
      images: {
        url: navigateBackend(metadata.twitterCard.T_image.url),
      },
    },
  };
}

const Index = async () => {
  const client = getClient();
  const {
    data: {
      partnersPage: { sections },
    },
  } = await client.query({
    query: GET_PARTNERS_SECTIONS,
  });

  const { data: partnersData } = await client.query({
    query: GET_PARTNERS,
    variables: {
      filters: { partnershipType: { in: ["main", "partner"] } }, // Filter by partnershipType
    },
  });

  const { data: patronsData } = await client.query({
    query: GET_PATRONS,
    variables: {
      filters: { type: { in: ["honorable", "media"] } },
    },
  });

  const partnerHeaderProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersHeader"
  );

  const partnerHeroProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersHero"
  );

  const partnersDisplayProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersDisplay"
  );

  const partnersDescriptionProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersDescription"
  );

  const patronsDisplayProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "patronsDisplay"
  );

  const partnersFooterProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersFooter"
  );

  return (
    <div className="itp-partners">
      <Header {...partnerHeaderProps} />
      <main>
        <Hero {...partnerHeroProps} />
        <PartnerDisplay {...partnersDisplayProps} {...partnersData} />
        <PartnersDescription {...partnersDescriptionProps} {...partnersData} />
        <PatronsDisplay {...patronsDisplayProps} {...patronsData} />
      </main>
      <Footer {...partnersFooterProps} />
    </div>
  );
};

export default Index;
