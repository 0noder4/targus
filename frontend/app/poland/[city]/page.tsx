import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClient } from "../../../lib/api/ApolloClient";

import Header from "/components/global/Header/Header";
import Footer from "/components/main/Footer/Footer";

import Hero from "/components/poland/Hero/Hero";
import CityDetail from "/components/poland/CityDetail/CityDetail";
import CTASection from "/components/poland/CTASection/CTASection";

import { citiesData } from "../../../constants/poland";

import { GET_HOME_SECTIONS } from "../../../graphql/sections";

type HomeSectionsData = {
  homePage: { sections: Array<Record<string, unknown> & { internalName: string }> };
};

export function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = citiesData[city];
  if (!data) {
    return { title: "Nie znaleziono" };
  }
  return {
    title: `${data.title} | Inżynierskie Targi Pracy`,
    description: `${data.description} Dotarcie do inżynierów w całym kraju.`,
  };
}

const CityPage = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city: citySlug } = await params;
  const city = citiesData[citySlug];
  if (!city) {
    notFound();
  }

  const client = getClient();
  const { data } = await client.query<HomeSectionsData>({
    query: GET_HOME_SECTIONS,
  });

  if (!data?.homePage?.sections) {
    throw new Error("Home sections not available");
  }

  const { homePage: { sections } } = data;

  const headerProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "homeHeader"
  );

  return (
    <div className="itp-poland">
      <Header {...(headerProps as unknown as React.ComponentProps<typeof Header>)} />
      <main>
        <Hero />
        <CityDetail city={city} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CityPage;
