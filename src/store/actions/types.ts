import { ICompanyDetails, IContactPersonDetails } from "../../dashboard/corporate-modules/interfaces";
import {
  IAddressDetails,
  IBasicDetails,
  IPersonalDetails,
} from "../../dashboard/individual-modules/interfaces";
import { IRoleDetails } from "./interface";

//Individual Role Types
export const ADD_ROLE_DATA = "ADD_ROLE_DETAILS";
export const ADD_BASIC_DATA = "ADD_BASIC_DETAILS";
export const ADD_ADDRESS_DATA = "ADD_ADDRESS_DETAILS";
export const ADD_PERSONAL_DATA = "ADD_PERSONAL_DETAILS";
export const CLEAR_STORE = "CLEAR_STORE";

//Corporate Role Types
export const ADD_COMPANY_DATA = "ADD_COMPANY_DETAILS";
export const ADD_CONTACT_PERSON_DATA = "ADD_CONTACT_PERSON_DETAILS";


//Individual Role Types
export interface AddRoleDetailsAction {
  type: typeof ADD_ROLE_DATA;
  payload: IRoleDetails;
}

export interface AddBasicDetailsAction {
  type: typeof ADD_BASIC_DATA;
  payload: IBasicDetails;
}

export interface AddAddressDetailsAction {
  type: typeof ADD_ADDRESS_DATA;
  payload: IAddressDetails;
}

export interface AddPersonalDetailsAction {
  type: typeof ADD_PERSONAL_DATA;
  payload: IPersonalDetails;
}

export const clearReduxStore = () => ({
  type: typeof CLEAR_STORE,
});


//Company Role Types
export interface AddCompanyDetailsAction {
  type: typeof ADD_COMPANY_DATA;
  payload: ICompanyDetails;
}

export interface AddContactPersonDetailsAction {
  type: typeof ADD_CONTACT_PERSON_DATA;
  payload: IContactPersonDetails;
}

export type ActionTypes =
  | AddRoleDetailsAction
  | AddBasicDetailsAction
  | AddAddressDetailsAction
  | AddPersonalDetailsAction
  | AddContactPersonDetailsAction
  | AddCompanyDetailsAction;
