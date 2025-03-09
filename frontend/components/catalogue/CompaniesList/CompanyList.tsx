"use client";
import React, { useEffect, useState } from "react";

// Types
import CompanyBrief from "/interfaces/companies/CompanyBrief";

// Components
import TextInput from "/components/global/TextInput/TextInput";
import Company from "./components/Company/Company";

// Styles
import styles from "./CompanyList.module.scss";

interface Props {
  companies: CompanyBrief[];
  selectedCompany: string;
  setSelectedCompany: (id: string) => void;
  setShowMobile: (bool: boolean) => void;
}

const CompanyList = ({
  companies,
  selectedCompany,
  setSelectedCompany,
  setShowMobile,
}: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState(companies);

  useEffect(() => {
    setList(
      companies.filter((company) =>
        company.externalName.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, companies]);

  return (
    <aside className={styles.container}>
      <h1 className={styles.header}>Katalog</h1>
      <div>
        <TextInput
          value={searchInput}
          onChange={setSearchInput}
          variant="dark"
          placeholder="Wyszukaj firmę"
          label="Wyszukaj firmę"
        ></TextInput>
      </div>
      <div className={styles.list}>
        {list.map((company) => (
          <Company
            key={company.documentId}
            className={`${
              company.documentId == selectedCompany ? styles.active : ""
            }`}
            {...company}
            setSelectedCompany={setSelectedCompany}
            setShowMobile={setShowMobile}
          />
        ))}
      </div>
    </aside>
  );
};

export default CompanyList;
