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
import { GET_PARTNERS_SECTIONS } from "../../graphql/sections";
import { GET_PARTNERS_METADATA } from "../../graphql/metadata";
import { GET_PARTNERS } from "../../graphql/companies";
import { GET_PATRONS } from "../../graphql/patrons";

type PartnersMetadataData = {
  partnersPage: {
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

type PartnersSectionsData = {
  partnersPage: { sections: Array<Record<string, unknown> & { internalName: string }> };
};

type PartnersQueryData = { partners?: unknown[]; [key: string]: unknown };
type PatronsQueryData = { patrons?: Array<{ type: string }>; [key: string]: unknown };

// Metadata fetch from backend
export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<PartnersMetadataData>({
    query: GET_PARTNERS_METADATA,
  });

  if (!data?.partnersPage?.metadata) {
    return { title: "Partnerzy", description: "" };
  }

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
  const { data } = await client.query<PartnersSectionsData>({
    query: GET_PARTNERS_SECTIONS,
  });

  if (!data?.partnersPage?.sections) {
    throw new Error("Partners page sections not available");
  }

  const {
    partnersPage: { sections },
  } = data;

  const { data: partnersData } = await client.query<PartnersQueryData>({
    query: GET_PARTNERS,
    variables: {
      filters: { partnershipType: { in: ["main", "partner"] } },
    },
  });

  const { data: patronsData } = await client.query<PatronsQueryData>({
    query: GET_PATRONS,
    variables: {
      filters: { type: { in: ["media", "content", "honorable"] } },
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

  const patrons = patronsData?.patrons ?? [];
  const partners = partnersData?.partners ?? [];

  return (
    <div className="itp-partners">
      <Header {...(partnerHeaderProps as unknown as React.ComponentProps<typeof Header>)} />
      <main>
        <Hero {...(partnerHeroProps as any)} />
        <PartnerDisplay {...(partnersDisplayProps as any)} {...(partnersData ?? {})} />
        <PartnersDescription {...(partnersDescriptionProps as any)} {...(partnersData ?? {})} />
        <PatronsDisplay
          label={String(patronsDisplayProps?.mediaPatronsLabel ?? "Patroni medialni")}
          patrons={(patrons.filter((p: { type: string }) => p.type === "media") as any)}
        />
        <PatronsDisplay
          label={String(patronsDisplayProps?.contentPatronsLabel ?? "Patroni merytoryczni")}
          patrons={(patrons.filter((p: { type: string }) => p.type === "content") as any)}
        />
        <PatronsDisplay
          label={String(patronsDisplayProps?.honorablePatronsLabel ?? "Patroni honorowi")}
          patrons={(patrons.filter((p: { type: string }) => p.type === "honorable") as any)}
        />
      </main>
      <Footer {...(partnersFooterProps as unknown as React.ComponentProps<typeof Footer>)} />
    </div>
  );
};

export default Index;
