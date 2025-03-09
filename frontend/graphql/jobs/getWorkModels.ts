import { gql } from "@apollo/client";

export const GET_WORK_MODELS = gql`
  query GET_WORK_MODELS {
    workModels {
      internalName
      externalName
    }
  }
`;
