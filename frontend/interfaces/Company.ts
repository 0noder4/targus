import { Image } from "./Image";

export interface Company {
  internalName: string;
  externalName: string;
  codeID?: string;
  partnershipType: "main" | "partner" | "regular";
  description?: string;
  logo: Image;
}
