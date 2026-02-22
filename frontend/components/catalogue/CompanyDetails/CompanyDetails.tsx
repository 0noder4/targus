import React from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import { useSuspenseQuery } from "@apollo/client";
import { useOutsideClick } from "/hooks/useOutsideClick";
import { getBackendImageUrl } from "../../../lib/api/navigateBackend";

// Queries
import { GET_COMPANY } from "../../../graphql/companies";

// Types
import CompanyDetailed from "/interfaces/companies/CompanyDetailed";

// Comonents
import Overlay from "./components/Overlay/Overlay";
import Map from "./components/Maps/Map";

// Maps
import MapDay1 from "./maps/map_day_1";
import MapDay2 from "./maps/map_day_2";
import styles from "./CompanyDetails.module.scss";
import Job from "./components/Job/Job";

interface Props {
  selectedCompany: string;
  setShowMobile: (bool: boolean) => void;
  showMobile: boolean;
}

const CompanyDetails = ({
  selectedCompany,
  setShowMobile,
  showMobile,
}: Props) => {
  const {
    data: { company },
  } = useSuspenseQuery<{ company: CompanyDetailed }>(GET_COMPANY, {
    variables: { documentId: selectedCompany },
  });

  const {
    externalName,
    internalName,
    partnershipType,
    description,
    logo,
    stand,
    jobs,
  } = company;

  const ref = useOutsideClick(() => {
    setShowMobile(false);
  });

  return (
    <>
      {showMobile ? <Overlay /> : ""}
      <div
        className={`${styles.container} ${
          showMobile ? styles.mobileShow : styles.mobileHide
        }`}
        id={internalName}
        ref={ref}
      >
        <div className={styles.header}>
          <span>
            <h2 className={styles.companyName}>{externalName}</h2>
            <h3 className={styles.companyStatus}>
              {partnershipType == "main" ? "Partner Główny" : ""}
              {partnershipType == "partner" ? "Partner" : ""}
              {partnershipType == "regular" ? "Wystawca" : ""}
            </h3>
          </span>
          <div className={styles.image}>
            <Image
              src={getBackendImageUrl(logo.url)}
              alt={`Logo ${externalName}`}
              height={logo.height}
              width={logo.width}
            />
          </div>
        </div>
        <div className={styles.companyDescription}>
          <Markdown>{description}</Markdown>
        </div>
        {jobs.length > 0 ? (
          <div className={styles.companyJobs}>
            <h3>Oferty pracy</h3>
            {jobs.map((job) => (
              <Job {...job} key={job.documentId} />
            ))}
          </div>
        ) : (
          ""
        )}
        <div className={styles.maps}>
          <Map stand={stand.firstDay} day={1} map={<MapDay1 />} />
          <Map stand={stand.secondDay} day={2} map={<MapDay2 />} />
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
