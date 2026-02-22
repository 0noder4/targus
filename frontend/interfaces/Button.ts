import { Link } from "./Link";

export interface Button {
  internalName: string;
  link: Link;
  type: "primary" | "secondary";
  disabled?: boolean;
}
