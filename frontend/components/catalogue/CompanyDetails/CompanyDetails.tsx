import { useState, useEffect } from "react";
import Image from "next/image";
import Markdown from "react-markdown";
import { useSuspenseQuery } from "@apollo/client/react";
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

const DEFAULT_LOGO = {
  url: "/images/brand/itp-logo--horizontal--dark.svg",
  alternativeText: "Logo Targów Pracy ITP",
};

interface Props {
  selectedCompany: string;
  fallbackName?: string;
  setShowMobile: (bool: boolean) => void;
  showMobile: boolean;
}

const CompanyDetails = ({
  selectedCompany,
  fallbackName = "",
  setShowMobile,
  showMobile,
}: Props) => {
  const {
    data: { company },
  } = useSuspenseQuery<{ company: CompanyDetailed | null }>(GET_COMPANY, {
    variables: { documentId: selectedCompany },
  });

  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    setLogoFailed(false);
  }, [selectedCompany]);

  const ref = useOutsideClick(() => {
    setShowMobile(false);
  });

  if (!company) {
    return (
      <div
        className={`${styles.container} ${
          showMobile ? styles.mobileShow : styles.mobileHide
        }`}
        ref={ref}
      >
        <div className={styles.header}>
          <span>
            <h2 className={styles.companyName}>{fallbackName}</h2>
          </span>
          <div className={styles.image}>
            <Image
              src={DEFAULT_LOGO.url}
              alt={DEFAULT_LOGO.alternativeText}
              fill
              unoptimized
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    );
  }

  const {
    externalName,
    internalName,
    partnershipType,
    description,
    logo,
    stand,
    jobs,
  } = company;

  const logoUrl = logo && !logoFailed
    ? getBackendImageUrl(logo.url)
    : DEFAULT_LOGO.url;

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
              src={logoUrl}
              alt={`Logo ${externalName}`}
              fill
              unoptimized
              style={{ objectFit: "contain" }}
              onError={() => setLogoFailed(true)}
            />
          </div>
        </div>
        <div className={styles.companyDescription}>
          <Markdown>{description || externalName}</Markdown>
        </div>
        {jobs && jobs.length > 0 ? (
          <div className={styles.companyJobs}>
            <h3>Oferty pracy</h3>
            {jobs.map((job) => (
              <Job {...job} key={job.documentId} />
            ))}
          </div>
        ) : (
          ""
        )}
        {stand && (
          <div className={styles.maps}>
            <Map stand={stand.firstDay} day={1} map={<MapDay1 />} />
            <Map stand={stand.secondDay} day={2} map={<MapDay2 />} />
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyDetails;
