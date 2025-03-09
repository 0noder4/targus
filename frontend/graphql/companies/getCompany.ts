import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query GET_COMPANY($documentId: ID!) {
    company(documentId: $documentId) {
      internalName
      externalName
      partnershipType
      logo {
        url
        alternativeText
        width
        height
      }
      description
      jobs {
        documentId
        title
      }
      stand {
        firstDay
        secondDay
      }
    }
  }
`;
