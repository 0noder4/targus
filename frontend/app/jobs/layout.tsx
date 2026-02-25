import React from "react";
import { ApolloProvider } from "../../lib/api/ApolloProvider";
import { getClient } from "../../lib/api/ApolloClient";
import navigateBackend from "../../lib/api/navigateBackend";

// Queries
import { GET_JOB_WALL_METADATA } from "../../graphql/metadata";
import {
  GET_JOB_WALL_FOOTER,
  GET_JOB_WALL_HEADER,
} from "../../graphql/sections/jobWall";

// Types
import { Metadata } from "next";

type JobWallMetadataData = {
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

type JobWallHeaderData = {
  jobWall: {
    pageTitle: string;
    header: Record<string, unknown>;
  };
};

type JobWallFooterData = {
  jobWall: {
    footer: Record<string, unknown>;
  };
};

// Components
import Header from "/components/global/Header/Header";
import Footer from "/components/main/Footer/Footer";
import { JobWallTitleProvider } from "./JobWallTitleContext";

// Styles
import styles from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const client = getClient();
  const { data } = await client.query<JobWallMetadataData>({
    query: GET_JOB_WALL_METADATA,
  });

  if (!data?.catalouge?.metadata) {
    return { title: "Oferty pracy", description: "" };
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

export default async function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();
  const { data: headerData } = await client.query<JobWallHeaderData>({
    query: GET_JOB_WALL_HEADER,
  });

  const { data: footerData } = await client.query<JobWallFooterData>({
    query: GET_JOB_WALL_FOOTER,
  });

  if (!headerData?.jobWall?.header || !footerData?.jobWall?.footer) {
    throw new Error("Job wall layout data not available");
  }

  const { jobWall: { header, pageTitle } } = headerData;
  const { jobWall: { footer } } = footerData;

  return (
    <JobWallTitleProvider pageTitle={pageTitle}>
      <div className={styles.page}>
        <Header {...(header as unknown as React.ComponentProps<typeof Header>)} />
        <main className={styles.container}>
          <ApolloProvider>{children}</ApolloProvider>
        </main>
        <Footer {...(footer as unknown as React.ComponentProps<typeof Footer>)} className={styles.footer} />
      </div>
    </JobWallTitleProvider>
  );
}
