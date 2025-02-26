import { Link } from "./Link";

export interface NavigationItem {
  link: Link;
  important: boolean;
}

export interface Navigation {
  navigationItems: NavigationItem[];
}
