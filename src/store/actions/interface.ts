export interface IModuleDetails {
  module_name: string;
}

export interface IRoleDetails {
  role: string;
  modules: IModuleDetails[];
}

export interface IAppState {
    roleDetails: unknown;
    basicDetails: unknown;
    addressDetails: unknown;
    personalDetails: unknown;
    companyDetails: unknown;
    contactPersonDetails: unknown;
}

