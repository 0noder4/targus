import { Image } from "./Image";
import { Link } from "./Link";

export interface Patron {
  internalName: string;
  externalName: string;
  type: "honorable" | "media" | "content";
  link: Link;
  logo: Image;
}
