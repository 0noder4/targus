export interface JobBrief {
  documentId: string;
  title: string;
  company: {
    externalName: string;
  };
  cities: {
    externalName: string;
  }[];
}
