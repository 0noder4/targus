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

export function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = citiesData[params.city];
  if (!city) {
    return { title: "Nie znaleziono" };
  }
  return {
    title: `${city.title} | Inżynierskie Targi Pracy`,
    description: `${city.description} Dotarcie do inżynierów w całym kraju.`,
  };
}

const CityPage = async ({ params }: { params: { city: string } }) => {
  const city = citiesData[params.city];
  if (!city) {
    notFound();
  }

  const client = getClient();
  const {
    data: {
      homePage: { sections },
    },
  } = await client.query({
    query: GET_HOME_SECTIONS,
  });

  const headerProps = sections.find(
    (section: { internalName: string }) =>
      section.internalName === "homeHeader"
  );

  return (
    <div className="itp-poland">
      <Header {...headerProps} />
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
