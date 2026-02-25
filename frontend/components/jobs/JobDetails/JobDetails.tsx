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
    job: JobDetailed;
  }>(GET_JOB, {
    variables: {
      documentId: id,
    },
  });

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

  const isMail = (contact: string) => {
    const regEx = new RegExp("^[^@]+@[^@]+.[^@]+$");

    if (regEx.test(contact)) {
      return true;
    }

    return false;
  };

  const FormatContact = (contact: string) => {
    const regEx = new RegExp("^[^@]+@[^@]+.[^@]+$");

    if (regEx.test(contact)) {
      return `mailto:${contact}`;
    } else return contact;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>
          <span>{company.externalName} - </span>
          {cities.map((city) => (
            <span key={city.externalName}>{city.externalName}</span>
          ))}
        </h3>
      </div>
      <Section>
        <SectionTitle>Forma</SectionTitle>
        <SectionContent>
          {workModels.map((workModel) => (
            <Tag key={workModel.internalName}>{workModel.externalName}</Tag>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Etat</SectionTitle>
        <SectionContent>
          {employmentTypes.map((employmentType) => (
            <Tag key={employmentType.internalName}>
              {employmentType.externalName}
            </Tag>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Umowa</SectionTitle>
        <SectionContent>
          {contracts.map((contract) => (
            <Tag key={contract.internalName}>{contract.externalName}</Tag>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Opis</SectionTitle>
        <SectionContent>
          <span>
            <Markdown>{description.outline}</Markdown>
          </span>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Benefity</SectionTitle>
        <SectionContent>
          <span>
            <Markdown>{description.benefits}</Markdown>
          </span>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Wymagania</SectionTitle>
        <SectionContent>
          <span>
            <Markdown>{description.requirements}</Markdown>
          </span>
        </SectionContent>
      </Section>
      <div className={styles.apply}>
        {isMail(contact) ? <label>Aplikuj przez [{contact}]</label> : ""}

        <LinkButton variant="orange" href={FormatContact(contact)}>
          Aplikuj
        </LinkButton>
      </div>
    </div>
  );
};

export default JobDetails;
