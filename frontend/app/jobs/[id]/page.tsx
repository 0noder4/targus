"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";

import styles from "./page.module.scss";
import Loading from "/components/global/Loading/Loading";
import JobDetails from "/components/jobs/JobDetails/JobDetails";
import ClientOnly from "/lib/ClientOnly";

const Index = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loading className={styles.loading} />}>
        <ClientOnly>
          <JobDetails id={pathname.replace("/jobs/", "")} />
        </ClientOnly>
      </Suspense>
    </div>
  );
};

export default Index;
