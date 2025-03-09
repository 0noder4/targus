"use client";

import React, { Suspense, useState } from "react";
import { useSuspenseQuery } from "@apollo/client";

// Queries
import { GET_COMPANIES_BRIEF } from "../../graphql/companies";

// Types
import CompanyBrief from "/interfaces/companies/CompanyBrief";

// Components
import CompaniesList from "/components/catalogue/CompaniesList/CompanyList";
import CompanyDetails from "/components/catalogue/CompanyDetails/CompanyDetails";
import Loading from "/components/global/Loading/Loading";
import ClientOnly from "/lib/ClientOnly";

//Styles
import styles from "./page.module.scss";

const Index = () => {
  const {
    data: { companies },
  } = useSuspenseQuery<{ companies: CompanyBrief[] }>(GET_COMPANIES_BRIEF);

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
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        setShowMobile={setShowMobile}
      />
    </>
  );
};

export default Index;
