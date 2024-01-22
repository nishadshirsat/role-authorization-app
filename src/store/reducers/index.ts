import { combineReducers } from "redux";
import roleDetailsReducer from "./RoleDetails";
import basicDetailsReducer from "./BasicDetailsReducer";
import { IAppState } from "../actions/interface";
import addressDetailsReducer from "./AddressDetailsReducer";
import personalDetailsReducer from "./PersonalDetailsReducer";
import companyDetailsReducer from "./CompanyDetailsReducer";
import contactPersonDetailsReducer from "./ContactPersonDetailsReducer";

// Combine all the reducers
const reducers = combineReducers<IAppState>({ 
    roleDetails: roleDetailsReducer,
    basicDetails: basicDetailsReducer,
    addressDetails: addressDetailsReducer,
    personalDetails: personalDetailsReducer,
    companyDetails: companyDetailsReducer,
    contactPersonDetails: contactPersonDetailsReducer
})

export default reducers;
