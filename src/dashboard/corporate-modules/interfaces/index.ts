export interface ICompanyDetails {
  companyNumber: string;
  companyTIN: string;
  companyType: string;
  isStored?: boolean;
}

export interface IContactPersonDetails {
  contactPersonName: string;
  contactPersonMobile: string;
  contactPersonEmail: string;
  designation: string;
  isStored?: boolean;
}
