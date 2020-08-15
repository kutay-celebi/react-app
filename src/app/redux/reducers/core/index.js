import settings from "./settings.reducer";
import {combineReducers} from "redux";
import navbar from "./navbar.reducers";
import notify from "./notify.reducer"
import common from "./common.reducer";

const coreReducers = combineReducers({
                                         settings,
                                         navbar,
                                         notify,
                                         common
                                     });

export default coreReducers;