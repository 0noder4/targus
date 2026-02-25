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

// Types for GraphQL results
type BusinessMetadataData = {
  businessPage: {
    metadata: {
      pageTitle: string;
      pageDescription: string;
      keywords: string;
      canonicalUrl: string;
      openGraph: {
        OG_title: string;
        OG_description: string;
        OG_type: string;
      };
      twitterCard: {
        T_title: string;
        T_description: string;
        T_image: { url: string };
      };
    };
  };
};

type BusinessSectionsData = {
  businessPage: {
    sections: Array<Record<string, unknown> & { internalName: string }>;
  };
};

// Styles
import styles from "./page.module.scss";

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<BusinessMetadataData>({
    query: GET_BUSINESS_METADATA,
  });

  if (!data?.businessPage) {
    return { title: "Targus", description: "" };
  }

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
      type: metadata.openGraph.OG_type as "website" | "article",
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
  const { data } = await client.query<BusinessSectionsData>({
    query: GET_BUSINESS_SECTIONS,
  });

  if (!data?.businessPage?.sections) {
    throw new Error("Business page data not available");
  }

  const {
    businessPage: { sections },
  } = data;

  const findByInternalName = (name: string) =>
    sections.find(
      (section: { internalName: string }) => section.internalName === name
    ) as Record<string, unknown> | undefined;

  const businessHeaderProps = findByInternalName("businessHeader");
  const businessHeroProps = findByInternalName("businessHero");
  const businessForBusinessProps = findByInternalName("businessForBusiness");
  const businessContactFormProps = findByInternalName("businessContactForm");
  const businessFRProps = findByInternalName("businessFR");
  const businessFooterProps = findByInternalName("businessFooter");

  return (
    <div className={styles.page}>
      <Header {...(businessHeaderProps as unknown as React.ComponentProps<typeof Header>)} />
      <main>
        <Hero {...(businessHeroProps as any)} />
        <ForBusiness {...(businessForBusinessProps as any)} />
        <ContactForm {...(businessContactFormProps as any)} />
        <OurTeam {...(businessFRProps as any)} />
      </main>
      <Footer {...(businessFooterProps as unknown as React.ComponentProps<typeof Footer>)} />
    </div>
  );
};

export default Index;
