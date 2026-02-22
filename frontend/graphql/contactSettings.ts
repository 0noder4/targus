import { gql } from "@apollo/client";

export const GET_CONTACT_SETTINGS = gql`
  query GET_CONTACT_SETTINGS {
    contactSetting {
      recipients {
        email
        name
      }
    }
  }
`;
