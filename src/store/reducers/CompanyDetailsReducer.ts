import { ICompanyDetails } from "../../dashboard/corporate-modules/interfaces";
import { ADD_COMPANY_DATA, ActionTypes } from "../actions/types";

const initialState: ICompanyDetails = {
  companyNumber: "",
  companyTIN: "",
  companyType: "",
  isStored: false,
};

const companyDetailsReducer = (
  state = initialState,
  action: ActionTypes
): ICompanyDetails => {
  switch (action.type) {
    case ADD_COMPANY_DATA:
      return {
        ...state,
        ...action.payload,
        isStored: true,
      };
    default:
      return state;
  }
};
export default companyDetailsReducer;
