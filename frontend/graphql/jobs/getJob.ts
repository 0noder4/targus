import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query GET_JOB($documentId: ID!) {
    job(documentId: $documentId) {
      title
      description {
        outline
        benefits
        requirements
      }
      company {
        internalName
        externalName
      }
      contracts {
        internalName
        externalName
      }
      employmentTypes {
        internalName
        externalName
      }
      workModels {
        internalName
        externalName
      }
      cities {
        externalName
      }
      contact
    }
  }
`;
