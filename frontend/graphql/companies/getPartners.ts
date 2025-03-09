import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query GET_PARTNERS {
    companies(filters: { partnershipType: { in: ["main", "partner"] } }) {
      internalName
      externalName
      partnershipType
      description
      logo {
        alternativeText
        url
        width
        height
      }
    }
  }
`;
