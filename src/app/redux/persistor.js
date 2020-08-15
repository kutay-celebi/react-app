import {persistStore}                          from 'redux-persist'
import {applyMiddleware, compose, createStore} from "redux";
import thunk                                   from "redux-thunk";
import rootReducer                             from "./reducers";

const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                                                              trace: true
                                                          }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store     = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

export {
    store,
    persistor
}