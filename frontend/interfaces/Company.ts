import { Image } from "./Image";
import { Stand } from "./Stand";

export interface Company {
  internalName: string;
  externalName: string;
  codeID?: string;
  partnershipType: "main" | "partner" | "regular";
  description?: string;
  logo: Image;
  stand: Stand;
}

export interface CompanyBrief {
  documentId: string;
  intenalName: string;
  externalName: string;
  partnershipType: "main" | "partner" | "regular";
}
