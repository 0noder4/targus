"use client";

import React, { Suspense, useState } from "react";
import { useSuspenseQuery } from "@apollo/client";

// Queries
import { GET_COMPANIES_BRIEF } from "/graphql/queries/companies";

// Types
import { CompanyBrief } from "/interfaces/Company";

// Components
import CompaniesList from "../../components/catalogue/CompaniesList/CompanyList";
import Loading from "/components/global/Loading/Loading";
import CompanyDetails from "../../components/catalogue/CompanyDetails/CompanyDetails";

//Styles
import styles from "./page.module.scss";

const Index = () => {
  const {
    data: { companies },
  } = useSuspenseQuery<{ companies: CompanyBrief[] }>(GET_COMPANIES_BRIEF);

  const [selectedCompany, setSelectedCompany] = useState(
    companies[0].documentId,
  );

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <Suspense fallback={<Loading className={styles.loading} />}>
        <CompanyDetails
          selectedCompany={selectedCompany}
          showMobile={showMobile}
          setShowMobile={setShowMobile}
        />
      </Suspense>
      <CompaniesList
        companies={companies}
        setSelectedCompany={setSelectedCompany}
        setShowMobile={setShowMobile}
      />
    </>
  );
};

export default Index;
