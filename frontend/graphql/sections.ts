import { gql } from "@apollo/client";

export const GET_HOME_SECTIONS = gql`
  query GET_HOME_SECTIONS {
    homePage {
      sections {
        ... on ComponentSectionsHeader {
          internalName
          logo {
            url
            alternativeText
            width
            height
          }
          navigation {
            navigationItems {
              link {
                url
                label
                target
                type
              }
              important
            }
          }
        }
        ... on ComponentSectionsPartnersDisplay {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_BUSINESS_SECTIONS = gql`
  query GET_BUSINESS_SECTIONS {
    businessPage {
      sections {
        ... on ComponentSectionsHeader {
          internalName
          logo {
            url
            alternativeText
            width
            height
          }
          navigation {
            navigationItems {
              link {
                url
                label
                target
                type
              }
              important
            }
          }
        }
      }
    }
  }
`;

export const GET_PARTNERS_SECTIONS = gql`
  query GET_PARTNERS_SECTIONS {
    partnersPage {
      sections {
        ... on ComponentSectionsHeader {
          internalName
          logo {
            url
            alternativeText
            width
            height
          }
          navigation {
            internalName
            navigationItems {
              link {
                internalName
                url
                label
                target
                type
              }
              important
            }
          }
        }
        ... on ComponentSectionsPartnersHero {
          internalName
          mainHeroText
          secondaryHeroText
          cta {
            internalName
            link {
              internalName
              url
              label
              target
              type
            }
            type
          }
        }
        ... on ComponentSectionsPartnersDisplay {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsPartnersDescription {
          internalName
          mainPartnerLabel
          partnersLabel
          image {
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentSectionsPatronsDisplay {
          internalName
          mediaPatronsLabel
        }
        ... on ComponentSectionsFooter {
          internalName
          navigation {
            externalName
            navigationItems {
              link {
                internalName
                url
                label
                target
                type
              }
            }
          }
          contact {
            phone
            email
            adress
          }
          socials {
            link {
              url
              target
              internalName
            }
            image {
              url
              alternativeText
              width
              height
            }
          }
        }
      }
    }
  }
`;
