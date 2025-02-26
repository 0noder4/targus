import React from "react";
import { Metadata } from "next";
import { getClient } from "/lib/ApolloClient";
import { GET_HOME_METADATA } from "/graphql/queries/metadata";

// Core sections
import Header from "/components/global/Header/Header";
import Footer from "/components/main/Footer/Footer";
import Hero from "/components/main/Hero/Hero";
import About from "/components/main/About/About";
import Survey from "/components/main/Survey/Survey";
import Organization from "/components/main/Organization/Organization";
import navigateBackend from "/lib/navigateBackend";
import PartnerDisplay from "../components/partners/PartnersDisplay/PartnersDisplay";

// Queries
import { GET_HOME_SECTIONS } from "/graphql/queries/sections";
import { GET_PARTNERS } from "/graphql/queries/companies";

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query: GET_HOME_METADATA,
  });

  const {
    homePage: { metadata },
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
      homePage: { sections },
    },
  } = await client.query({
    query: GET_HOME_SECTIONS,
  });

  const { data: partnersData } = await client.query({
    query: GET_PARTNERS,
    variables: {
      filters: { partnershipType: { in: ["main", "partner"] } }, // Filter by partnershipType
    },
  });

  const homeHeaderProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "homeHeader",
  );

  const partnersDisplayProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "partnersDisplay",
  );

  return (
    <div className="itp-main">
      <Header {...homeHeaderProps} />
      <main>
        <Hero />
        <About />
        <PartnerDisplay {...partnersDisplayProps} {...partnersData} />
        <Survey />
        <Organization />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
