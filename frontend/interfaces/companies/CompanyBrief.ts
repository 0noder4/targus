export default interface CompanyBrief {
  documentId: string;
  intenalName: string;
  externalName: string;
  partnershipType: "main" | "partner" | "regular";
}
