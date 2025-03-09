import { JobBrief } from "../jobs/JobBrief";
import { Image } from "/interfaces/Image";
import { Stand } from "/interfaces/Stand";

export default interface CompanyDetailed {
  internalName: string;
  externalName: string;
  codeID?: string;
  partnershipType: "main" | "partner" | "regular";
  description?: string;
  logo: Image;
  stand: Stand;
  jobs: JobBrief[];
}
