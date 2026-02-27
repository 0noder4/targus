"use client";

import React from "react";
import { useSuspenseQuery } from "@apollo/client/react";

// Queries
import { GET_JOB } from "/graphql/jobs/getJob";

// Interfaces
import { JobDetailed } from "/interfaces/jobs/JobDetailed";

// Components
import {
  Section,
  SectionContent,
  SectionTitle,
} from "./components/Section/Section";
import Tag from "./components/Tag/Tag";
import { LinkButton } from "/components/global/Button/Button";

//Styles
import styles from "./JobDetails.module.scss";
import Markdown from "react-markdown";

const JobDetails = ({ id }: { id: string }) => {
  const {
    data: { job },
  } = useSuspenseQuery<{
    job: JobDetailed | null;
  }>(GET_JOB, {
    variables: {
      documentId: id,
    },
  });

  if (!job) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nie znaleziono oferty</h2>
          <h3 className={styles.subtitle}>ID: {id}</h3>
        </div>
      </div>
    );
  }

  const {
    title,
    company,
    cities,
    employmentTypes,
    workModels,
    contracts,
    description,
    contact,
  } = job;

  const companyName = company?.externalName ?? "Nieznana firma";
  const cityList = cities ?? [];
  const workModelList = workModels ?? [];
  const employmentTypeList = employmentTypes ?? [];
  const contractList = contracts ?? [];
  const outline = description?.outline ?? "";
  const benefits = description?.benefits ?? "";
  const requirements = description?.requirements ?? "";

  const isMail = (value: string) => {
    const regEx = new RegExp("^[^@]+@[^@]+.[^@]+$");
    return regEx.test(value);
  };

  const FormatContact = (value: string) => {
    const regEx = new RegExp("^[^@]+@[^@]+.[^@]+$");
    return regEx.test(value) ? `mailto:${value}` : value;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>
          <span>{companyName} - </span>
          {cityList.map((city) => (
            <span key={city.externalName}>{city.externalName}</span>
          ))}
        </h3>
      </div>
      {workModelList.length > 0 && (
        <Section>
          <SectionTitle>Forma</SectionTitle>
          <SectionContent>
            {workModelList.map((workModel) => (
              <Tag key={workModel.internalName}>{workModel.externalName}</Tag>
            ))}
          </SectionContent>
        </Section>
      )}
      {employmentTypeList.length > 0 && (
        <Section>
          <SectionTitle>Etat</SectionTitle>
          <SectionContent>
            {employmentTypeList.map((employmentType) => (
              <Tag key={employmentType.internalName}>
                {employmentType.externalName}
              </Tag>
            ))}
          </SectionContent>
        </Section>
      )}
      {contractList.length > 0 && (
        <Section>
          <SectionTitle>Umowa</SectionTitle>
          <SectionContent>
            {contractList.map((contract) => (
              <Tag key={contract.internalName}>{contract.externalName}</Tag>
            ))}
          </SectionContent>
        </Section>
      )}
      {outline && (
        <Section>
          <SectionTitle>Opis</SectionTitle>
          <SectionContent>
            <span>
              <Markdown>{outline}</Markdown>
            </span>
          </SectionContent>
        </Section>
      )}
      {benefits && (
        <Section>
          <SectionTitle>Benefity</SectionTitle>
          <SectionContent>
            <span>
              <Markdown>{benefits}</Markdown>
            </span>
          </SectionContent>
        </Section>
      )}
      {requirements && (
        <Section>
          <SectionTitle>Wymagania</SectionTitle>
          <SectionContent>
            <span>
              <Markdown>{requirements}</Markdown>
            </span>
          </SectionContent>
        </Section>
      )}
      {contact && (
        <div className={styles.apply}>
          {isMail(contact) ? <label>Aplikuj przez [{contact}]</label> : ""}
          <LinkButton variant="orange" href={FormatContact(contact)}>
            Aplikuj
          </LinkButton>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
