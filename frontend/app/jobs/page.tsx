"use client";

import React, { Suspense, useState } from "react";
import { useSuspenseQuery } from "@apollo/client";

// Queries
import { GET_JOB_PARAMS } from "/graphql/jobs/getJobParams";

// Components
import Filters from "/components/jobs/Filters/Filters";
import Loading from "/components/global/Loading/Loading";
import JobWall from "/components/jobs/JobWall/JobWall";

// Interfaces
import EmploymentType from "/interfaces/jobs/EmploymentType";

//Styles
import styles from "./page.module.scss";
import WorkModel from "/interfaces/jobs/WorkModel";
import ClientOnly from "/lib/ClientOnly";

type FilterOptions = {
  search: string;
  field: string;
  model: string;
  type: string;
};

type JobParams = {
  workModels: WorkModel[];
  employmentTypes: EmploymentType[];
};

const Index = () => {
  const {
    data: { workModels, employmentTypes },
  } = useSuspenseQuery<JobParams>(GET_JOB_PARAMS);

  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    field: "",
    model: "",
    type: "",
  });

  return (
    <div className={styles.container}>
      <Filters
        filters={filters}
        setFilters={setFilters}
        workModels={workModels}
        employmentTypes={employmentTypes}
      />
      <Suspense fallback={<Loading className={styles.loading} />}>
        <ClientOnly>
          <JobWall filters={filters} />
        </ClientOnly>
      </Suspense>
    </div>
  );
};

export default Index;
