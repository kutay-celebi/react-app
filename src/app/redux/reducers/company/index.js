import {combineReducers} from "redux";
import {companyReducer} from "./company.reducers";

const companyReducers = combineReducers({
                                            company: companyReducer
                                        });
export default companyReducers;