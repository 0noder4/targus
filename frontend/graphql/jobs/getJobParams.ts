import { gql } from "@apollo/client";

export const GET_JOB_PARAMS = gql`
  query GET_JOB_PARAMS {
    employmentTypes {
      internalName
      externalName
    }
    workModels {
      internalName
      externalName
    }
  }
`;
