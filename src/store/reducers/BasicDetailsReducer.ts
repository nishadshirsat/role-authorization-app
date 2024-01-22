import { IBasicDetails } from "../../dashboard/individual-modules/interfaces";
import { ADD_BASIC_DATA, ActionTypes } from "../actions/types";

const initialState: IBasicDetails = {
  name: "",
  mobileNumber: "",
  email: "",
  birthDate: new Date(),
  isStored: false,
};

const basicDetailsReducer = (
  state = initialState,
  action: ActionTypes
): IBasicDetails => {
  switch (action.type) {
    case ADD_BASIC_DATA:
      return {
        ...state,
        ...action.payload,
        isStored: true,
      };
    default:
      return state;
  }
};
export default basicDetailsReducer;
