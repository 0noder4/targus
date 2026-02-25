import React from "react";
import { Metadata } from "next";
import { getClient } from "../lib/api/ApolloClient";
import { GET_HOME_METADATA } from "../graphql/metadata";

// Core sections
import Header from "/components/global/Header/Header";
import Footer from "/components/main/Footer/Footer";
import Hero from "/components/main/Hero/Hero";
import About from "/components/main/About/About";
import Organization from "/components/main/Organization/Organization";
import navigateBackend from "../lib/api/navigateBackend";
import PartnerDisplay from "../components/partners/PartnersDisplay/PartnersDisplay";

// Queries
import { GET_HOME_SECTIONS } from "../graphql/sections";
import { GET_PARTNERS } from "../graphql/companies";

type HomeMetadataData = {
  homePage: {
    metadata: {
      pageTitle: string;
      pageDescription: string;
      keywords: string;
      canonicalUrl: string;
      openGraph: { OG_title: string; OG_description: string; OG_type: string };
      twitterCard: { T_title: string; T_description: string; T_image: { url: string } };
    };
  };
};

type HomeSectionsData = {
  homePage: { sections: Array<Record<string, unknown> & { internalName: string }> };
};

type PartnersData = {
  partners?: unknown[];
  [key: string]: unknown;
};

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<HomeMetadataData>({
    query: GET_HOME_METADATA,
  });

  if (!data?.homePage?.metadata) {
    return { title: "Targus", description: "" };
  }

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
  const { data } = await client.query<HomeSectionsData>({
    query: GET_HOME_SECTIONS,
  });

  if (!data?.homePage?.sections) {
    throw new Error("Home page sections not available");
  }

  const {
    homePage: { sections },
  } = data;

  const { data: partnersData } = await client.query<PartnersData>({
    query: GET_PARTNERS,
    variables: {
      filters: { partnershipType: { in: ["main", "partner"] } },
    },
  });

  const findByInternalName = (name: string) =>
    sections.find(
      (section: { internalName: string }) => section.internalName === name
    ) as Record<string, unknown> | undefined;

  const homeHeaderProps = findByInternalName("homeHeader");
  const homeHeroProps = findByInternalName("homeHero");
  const homeBannerProps = findByInternalName("homeBanner");
  const homeEssentialsProps = findByInternalName("homeEssentials");
  const homeOfferProps = findByInternalName("homeOffer");
  const homePartnersDisplayProps = findByInternalName("homePartnersDisplay");
  const homeOrganizationProps = findByInternalName("homeOrganization");
  const homeFooterProps = findByInternalName("homeFooter");

  return (
    <div className="itp-main">
      <Header {...(homeHeaderProps as unknown as React.ComponentProps<typeof Header>)} />
      <main>
        <Hero {...(homeHeroProps as any)} />
        <About
          bannerProps={homeBannerProps}
          essentialsProps={homeEssentialsProps}
          offerProps={homeOfferProps}
        />
        <PartnerDisplay {...(homePartnersDisplayProps as any)} {...(partnersData ?? {})} />
        <Organization {...(homeOrganizationProps as any)} />
      </main>
      <Footer {...(homeFooterProps as unknown as React.ComponentProps<typeof Footer>)} />
    </div>
  );
};

export default Index;
