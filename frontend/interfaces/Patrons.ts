import { Image } from "./Image";
import { Link } from "./Link";

export interface Patron {
  internalName: string;
  externalName: string;
  type: "honorable" | "media";
  link: Link;
  logo: Image;
}
