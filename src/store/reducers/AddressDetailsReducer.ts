import { IAddressDetails } from "../../dashboard/individual-modules/interfaces";
import { ADD_ADDRESS_DATA, ActionTypes } from "../actions/types";

const initialState: IAddressDetails = {
  address: "",
  district: "",
  city: "",
  state: "",
  pincode: null,
  isStored: false,
};

const addressDetailsReducer = (
  state = initialState,
  action: ActionTypes
): IAddressDetails => {
  switch (action.type) {
    case ADD_ADDRESS_DATA:
      return {
        ...state,
        ...action.payload,
        isStored: true,
      };
    default:
      return state;
  }
};
export default addressDetailsReducer;
