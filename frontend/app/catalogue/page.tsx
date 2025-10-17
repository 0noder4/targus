"use client";

import React, { Suspense, useState } from "react";
import { useSuspenseQuery } from "@apollo/client";

// Queries
import {
  GET_CATALOUGE_COMPANIES,
  GET_CATALOUGE_SIDEBAR,
  GET_CATALOUGE_VERSION,
} from "../../graphql/sections/catalogue";

// Types
import CompanyBrief from "/interfaces/companies/CompanyBrief";

// Components
import CompaniesList from "/components/catalogue/CompaniesList/CompanyList";
import CompanyDetails from "/components/catalogue/CompanyDetails/CompanyDetails";
import Loading from "/components/global/Loading/Loading";
import ClientOnly from "/lib/ClientOnly";

//Styles
import styles from "./page.module.scss";
import { CatalogueSidebar } from "../../interfaces/sections/CatalogueSections";

const Index = () => {
  const {
    data: { companies },
  } = useSuspenseQuery<{
    companies: CompanyBrief[];
  }>(GET_CATALOUGE_COMPANIES);

  const {
    data: {
      catalouge: { isObsolete },
    },
  } = useSuspenseQuery<{
    catalouge: { isObsolete: string };
  }>(GET_CATALOUGE_VERSION);

  const {
    data: {
      catalouge: { sidebar },
    },
  } = useSuspenseQuery<{ catalouge: { sidebar: CatalogueSidebar } }>(
    GET_CATALOUGE_SIDEBAR
  );

  const [selectedCompany, setSelectedCompany] = useState(
    companies.filter((company) => company.partnershipType == "main")[0]
      .documentId
  );

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <Suspense fallback={<Loading className={styles.loading} />}>
        <ClientOnly>
          <CompanyDetails
            selectedCompany={selectedCompany}
            showMobile={showMobile}
            setShowMobile={setShowMobile}
          />
        </ClientOnly>
      </Suspense>
      <CompaniesList
        title={sidebar.title}
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        setShowMobile={setShowMobile}
      />
    </>
  );
};

export default Index;
