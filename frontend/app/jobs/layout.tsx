import React from "react";
import { ApolloProvider } from "../../lib/api/ApolloProvider";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Querise
import { GET_JOB_WALL_METADATA } from "../../graphql/metadata";
import {
  GET_JOB_WALL_FOOTER,
  GET_JOB_WALL_HEADER,
} from "../../graphql/sections/jobWall";

// Types
import { Metadata } from "next";

// Components
import Header from "/components/global/Header/Header";
import Footer from "/components/main/Footer/Footer";

//Styles
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query({
    query: GET_JOB_WALL_METADATA,
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

export default async function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();
  const {
    data: {
      jobWall: { header },
    },
  } = await client.query({
    query: GET_JOB_WALL_HEADER,
  });

  const {
    data: {
      jobWall: { footer },
    },
  } = await client.query({
    query: GET_JOB_WALL_FOOTER,
  });

  return (
    <div className={styles.page}>
      <Header {...header} />
      <main className={styles.container}>
        <ApolloProvider>{children}</ApolloProvider>
      </main>
      <Footer {...footer} className={styles.footer} />
    </div>
  );
}
