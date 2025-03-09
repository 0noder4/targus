import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query GET_JOBS($filters: JobFiltersInput) {
    jobs(filters: $filters, pagination: { limit: 100 }) {
      documentId
      title
      company {
        externalName
      }
      cities {
        externalName
      }
    }
  }
`;
