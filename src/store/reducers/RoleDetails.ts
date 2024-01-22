import { IRoleDetails } from "../actions/interface";
import { ADD_ROLE_DATA, ActionTypes } from "../actions/types";

const initialState: IRoleDetails = {
  role: "",
  modules: [
    {
      module_name: "",
    },
  ],
};

const roleDetailsReducer = (
  state = initialState,
  action: ActionTypes
): IRoleDetails => {
  switch (action.type) {
    case ADD_ROLE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default roleDetailsReducer;
