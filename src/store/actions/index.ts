import { ICompanyDetails, IContactPersonDetails } from "../../dashboard/corporate-modules/interfaces";
import {
  IAddressDetails,
  IBasicDetails,
  IPersonalDetails,
} from "../../dashboard/individual-modules/interfaces";
import { IRoleDetails } from "./interface";
import {
  ADD_ADDRESS_DATA,
  ADD_BASIC_DATA,
  ADD_COMPANY_DATA,
  ADD_CONTACT_PERSON_DATA,
  ADD_PERSONAL_DATA,
  ADD_ROLE_DATA,
} from "./types";


//Individual Role Actions
export const addRoleDetails = (data: IRoleDetails) => ({
  type: ADD_ROLE_DATA,
  payload: data,
});

export const addBasicDetails = (data: IBasicDetails) => ({
  type: ADD_BASIC_DATA,
  payload: data,
});

export const addAddressDetails = (data: IAddressDetails) => ({
  type: ADD_ADDRESS_DATA,
  payload: data,
});

export const addPersonalDetails = (data: IPersonalDetails) => ({
  type: ADD_PERSONAL_DATA,
  payload: data,
});


//Company Role Actions
export const addCompanyDetails = (data: ICompanyDetails) => ({
  type: ADD_COMPANY_DATA,
  payload: data,
});

export const addContactPersonDetails = (data: IContactPersonDetails) => ({
  type: ADD_CONTACT_PERSON_DATA,
  payload: data,
});