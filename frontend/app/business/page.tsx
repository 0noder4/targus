import React from "react";
import { Metadata } from "next";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Core sections
import Header from "/components/global/Header/Header";
import Footer from "/components/business/Footer/Footer";
import Hero from "/components/business/Hero/Hero";
import ForBusiness from "/components/business/ForBusiness/ForBusiness";
import ContactForm from "/components/business/ContactForm/ContactForm";
import OurTeam from "/components/business/OurTeam/OurTeam";

// Queries
import { GET_BUSINESS_SECTIONS } from "../../graphql/sections";
import { GET_BUSINESS_METADATA } from "../../graphql/metadata";

// Styles
import styles from "./page.module.scss";

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query: GET_BUSINESS_METADATA,
  });

  const {
    businessPage: { metadata },
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
      businessPage: { sections },
    },
  } = await client.query({
    query: GET_BUSINESS_SECTIONS,
  });

  const businessHeaderSection = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "businessHeader"
  );

  return (
    <div className={styles.page}>
      <Header {...businessHeaderSection} />
      <main>
        <Hero />
        <ForBusiness />
        <ContactForm />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
