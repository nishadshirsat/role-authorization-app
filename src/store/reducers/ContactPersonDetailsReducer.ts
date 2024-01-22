import { IContactPersonDetails } from "../../dashboard/corporate-modules/interfaces";
import { ADD_CONTACT_PERSON_DATA, ActionTypes } from "../actions/types";

const initialState: IContactPersonDetails = {
  contactPersonName: "",
  contactPersonMobile: "",
  contactPersonEmail: "",
  designation: "",
  isStored: false,
};

const contactPersonDetailsReducer = (
  state = initialState,
  action: ActionTypes
): IContactPersonDetails => {
  switch (action.type) {
    case ADD_CONTACT_PERSON_DATA:
      return {
        ...state,
        ...action.payload,
        isStored: true,
      };
    default:
      return state;
  }
};
export default contactPersonDetailsReducer;
