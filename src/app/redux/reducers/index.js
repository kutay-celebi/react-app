import {combineReducers} from "redux";
import coreReducers from "./core";
import authReducers from "./auth";
import companyReducers from "./company";

const rootReducer = combineReducers({
                                        coreReducers,
                                        authReducers,
                                        companyReducers
                                    });

export default rootReducer;