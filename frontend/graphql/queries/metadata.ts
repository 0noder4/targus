import { gql } from "@apollo/client";

export const GET_HOME_METADATA = gql`
  query GET_HOME_METADATA {
    homePage {
      metadata {
        canonicalUrl
        keywords
        openGraph {
          OG_description
          OG_image {
            url
          }
          OG_title
          OG_type
          OG_url
        }
        pageDescription
        pageTitle
        twitterCard {
          T_cardType
          T_description
          T_title
          T_image {
            url
          }
        }
      }
    }
  }
`;

export const GET_BUSINESS_METADATA = gql`
  query GET_BUSINESS_METADATA {
    businessPage {
      metadata {
        canonicalUrl
        keywords
        openGraph {
          OG_description
          OG_image {
            url
          }
          OG_title
          OG_type
          OG_url
        }
        pageDescription
        pageTitle
        twitterCard {
          T_cardType
          T_description
          T_title
          T_image {
            url
          }
        }
      }
    }
  }
`;

export const GET_PARTNERS_METADATA = gql`
  query GET_PARTNERS_METADATA {
    partnersPage {
      metadata {
        canonicalUrl
        keywords
        openGraph {
          OG_description
          OG_image {
            url
          }
          OG_title
          OG_type
          OG_url
        }
        pageDescription
        pageTitle
        twitterCard {
          T_cardType
          T_description
          T_title
          T_image {
            url
          }
        }
      }
    }
  }
`;

export const GET_CATALOUGE_METADATA = gql`
  query GET_PARTNERS_METADATA {
    catalouge {
      metadata {
        canonicalUrl
        keywords
        openGraph {
          OG_description
          OG_image {
            url
          }
          OG_title
          OG_type
          OG_url
        }
        pageDescription
        pageTitle
        twitterCard {
          T_cardType
          T_description
          T_title
          T_image {
            url
          }
        }
      }
    }
  }
`;
