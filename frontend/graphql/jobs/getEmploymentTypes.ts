import { gql } from "@apollo/client";

export const GET_EMPLOYMENT_TYPES = gql`
  query GET_EMPLOYMENT_TYPES {
    employmentTypes {
      internalName
      externalName
    }
  }
`;
