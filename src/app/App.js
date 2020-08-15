import "../dummydata";
import React from "react";
import AppContext from "./AppContext";
import {Provider} from "react-redux";
import jssExtend from "jss-extend";
import {Router} from "react-router-dom";
import {create} from "jss";
import {createGenerateClassName, jssPreset, StylesProvider, ThemeProvider} from "@material-ui/styles";
import history from "../@history";
import routes from "./config/routeConfig";
import {store} from "./redux/persistor";
import KzAuth from "../@kuartz/components/auth/KzAuth";
import KzLayout from "../@kuartz/components/layout/KzLayout";
import {createMuiTheme} from "@material-ui/core";
import _ from "lodash";
import {defaultThemeConfig} from "./config/defaultThemeConfig";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {SnackbarProvider} from "notistack";


const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point')
});

// todo change with redux.
const theme = createMuiTheme(_.merge({}, defaultThemeConfig.default));

const App = () => {
    return (
        <AppContext.Provider value={{
            routes
        }}>
            <StylesProvider jss={jss} generateClassName={createGenerateClassName({
                productionPrefix: true,
                disableGlobal: true
            })}>
                <Provider store={store}>
                    <Router history={history}>
                        {/*<PersistGate loading={null} persistor={persistor}>*/}
                            <KzAuth>
                                <MuiPickersUtilsProvider utils={MomentUtils}
                                                         libInstance={moment}
                                                         locale={moment.locale(localStorage.getItem("i18nextLng"))}>
                                    <ThemeProvider theme={theme}>
                                        <SnackbarProvider maxSnack={5}
                                                          anchorOrigin={{vertical: "top", horizontal: "center"}}
                                                          autoHideDuration={3000}>
                                            <KzLayout/>
                                        </SnackbarProvider>
                                    </ThemeProvider>
                                </MuiPickersUtilsProvider>
                            </KzAuth>
                        {/*</PersistGate>*/}
                    </Router>
                </Provider>
            </StylesProvider>
        </AppContext.Provider>
    )
};

export default App;