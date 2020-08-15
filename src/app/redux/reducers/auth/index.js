import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage'

import authReducer from "./auth.reducer";
import {persistReducer} from "redux-persist";
import roleReducer from "./role.reducer";
import userReducer from "./user.reducer";

const rootPersistConfig = {
    key      : 'auth',
    storage  : storage,
    whitelist: ['auth'],
};

const authReducers = combineReducers({
                                         auth: authReducer,
                                         role: roleReducer,
                                         user: userReducer
                                     });

export default persistReducer(rootPersistConfig, authReducers);