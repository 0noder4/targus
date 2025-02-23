import React from "react";
import { Metadata } from "next";
import { GET_BUSINESS_METADATA } from "/graphql/queries/metadata";
import { getClient } from "/lib/ApolloClient";
import navigateBackend from "/lib/navigateBackend";

// Core sections
import Header from "/components/business/Header/Header";
import Footer from "/components/business/Footer/Footer";
import Hero from "/components/business/Hero/Hero";
import ForBusiness from "/components/business/ForBusiness/ForBusiness";
import ContactForm from "/components/business/ContactForm/ContactForm";
import OurTeam from "/components/business/OurTeam/OurTeam";

// Styles
import "./page.scss";

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

const Index = () => {
  return (
    <div className="itp-business">
      <Header />
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
