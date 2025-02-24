import { Link } from "./link";
import { Logo } from "./logo";

export interface Header {
  internalName: string;
  logo: Logo;
  navigation: {
    navigationItems: {
      link: Link;
      important: boolean;
    }[];
  };
}
