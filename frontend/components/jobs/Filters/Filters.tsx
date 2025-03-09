import React from "react";

import styles from "./Filters.module.scss";
import TextInput from "/components/global/TextInput/TextInput";
import Select from "/components/global/Select/Select";
import WorkModel from "/interfaces/jobs/WorkModel";
import EmploymentType from "/interfaces/jobs/EmploymentType";

type Filters = {
  search: string;
  field: string;
  model: string;
  type: string;
};

interface Props {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  workModels: WorkModel[];
  employmentTypes: EmploymentType[];
}

const Filters = ({
  filters,
  setFilters,
  workModels,
  employmentTypes,
}: Props) => {
  const workModelOptions = workModels.map((option) => ({
    value: option.internalName,
    label: option.externalName,
  }));

  const employmentTypeOptions = employmentTypes.map((option) => ({
    value: option.internalName,
    label: option.externalName,
  }));

  return (
    <div className={styles.container}>
      <TextInput
        value={filters.search}
        onChange={(value) => setFilters({ ...filters, search: value })}
        variant="dark"
        placeholder="Wyszukaj stanowisko"
        label="Wyszukaj stanowisko"
      />
      <Select
        options={workModelOptions}
        onChange={(value) => setFilters({ ...filters, model: value })}
        variant="dark"
        label="Tryb pracy"
        placeholder="Wszystkie"
      />
      <Select
        options={employmentTypeOptions}
        onChange={(value) => setFilters({ ...filters, type: value })}
        variant="dark"
        label="Etat"
        placeholder="Wszystkie"
      />
    </div>
  );
};

export default Filters;
