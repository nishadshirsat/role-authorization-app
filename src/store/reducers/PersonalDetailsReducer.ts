import { IPersonalDetails } from "../../dashboard/individual-modules/interfaces";
import { ADD_PERSONAL_DATA, ActionTypes } from "../actions/types";

const initialState: IPersonalDetails = {
  panNumber: "",
  vehicleNumber: "",
  isStored: false,
};

const personalDetailsReducer = (
  state = initialState,
  action: ActionTypes
): IPersonalDetails => {
  switch (action.type) {
    case ADD_PERSONAL_DATA:
      return {
        ...state,
        ...action.payload,
        isStored: true,
      };
    default:
      return state;
  }
};
export default personalDetailsReducer;
