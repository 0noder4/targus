import Contract from "./Contract";
import EmploymentType from "/interfaces/jobs/EmploymentType";
import WorkModel from "/interfaces/jobs/WorkModel";

export interface JobDetailed {
  documentId: string;
  title: string;
  company: {
    externalName: string;
  };
  cities: {
    externalName: string;
  }[];
  employmentTypes: EmploymentType[];
  workModels: WorkModel[];
  contracts: Contract[];
  description: {
    outline: string;
    benefits: string;
    requirements: string;
  };
  contact: string;
}
