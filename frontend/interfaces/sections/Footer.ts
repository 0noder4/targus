import { Navigation } from "interfaces/Navigation";
import { Contact } from "interfaces/Contact";
import { Link } from "interfaces/Link";
import { Image } from "interfaces/Image";

export interface Footer {
  internalName: string;
  navigation: Navigation;
  contact: Contact;
  socials: {
    link: Link;
    image: Image;
  }[];
}
