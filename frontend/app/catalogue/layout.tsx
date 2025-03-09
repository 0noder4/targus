import React from "react";
import { ApolloProvider } from "../../lib/api/ApolloProvider";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Querise
import { GET_CATALOUGE_METADATA } from "../../graphql/metadata";
import { GET_CATALOUGE_HEADER } from "../../graphql/sections";

// Types
import { Metadata } from "next";

// Components
import Header from "/components/global/Header/Header";

//Styles
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query: GET_CATALOUGE_METADATA,
  });

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

export default async function CatalougeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();
  const {
    data: {
      catalouge: { header },
    },
  } = await client.query({
    query: GET_CATALOUGE_HEADER,
  });

  return (
    <div className={styles.page}>
      <Header {...header} />
      <main className={styles.container}>
        <ApolloProvider>{children}</ApolloProvider>
      </main>
    </div>
  );
}
