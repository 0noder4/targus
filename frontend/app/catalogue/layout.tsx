import React from "react";
import { ApolloProvider } from "../../lib/api/ApolloProvider";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Querise
import { GET_CATALOUGE_METADATA } from "../../graphql/metadata";
import { GET_CATALOUGE_HEADER } from "../../graphql/sections/catalogue";

// Types
import { Metadata } from "next";

type CatalougeMetadataData = {
  catalouge: {
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

type CatalougeHeaderData = {
  catalouge: {
    header: Record<string, unknown>;
  };
};

// Components
import Header from "/components/global/Header/Header";

//Styles
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<CatalougeMetadataData>({
    query: GET_CATALOUGE_METADATA,
  });

  if (!data?.catalouge?.metadata) {
    return { title: "Katalog", description: "" };
  }

  const {
    catalouge: { metadata },
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

export default async function CatalougeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();
  const { data } = await client.query<CatalougeHeaderData>({
    query: GET_CATALOUGE_HEADER,
  });

  if (!data?.catalouge?.header) {
    throw new Error("Catalogue header data not available");
  }

  const {
    catalouge: { header },
  } = data;

  return (
    <div className={styles.page}>
      <Header {...(header as unknown as React.ComponentProps<typeof Header>)} />
      <main className={styles.container}>
        <ApolloProvider>{children}</ApolloProvider>
      </main>
    </div>
  );
}
