import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./action.types";
import {AUTH_TOKEN_PATH, BASE_PATH, PATH_HOME_PAGE} from "../../../constants";
import history from '../../../../@history'
import {enqueueSnackbar} from "../core";
import axios from "axios";

export const loginSuccess = (response, rememberMe) => (dispatch) => {
    dispatch({
                 type   : LOGIN_SUCCESS,
                 payload: {
                     response,
                     rememberMe: rememberMe
                 }
             });
};

export const loginFail = (error) => (dispatch) => {
    dispatch(enqueueSnackbar(error, {variant: "error"}));
    return {
        type: LOGIN_FAIL
    }
};

export const refreshToken = () => (dispatch) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "refresh_token");
    axios.post(BASE_PATH  + AUTH_TOKEN_PATH, urlencoded,
                     {
                         headers        : {
                             "Content-Type": "application/x-www-form-urlencoded",
                             "Authorization": "Basic dGVzdDp0ZXN0", // todo basic token icin yapilari inceleyelim boyle hardcode vermeyelim.
                         },
                         params:{
                             "refresh_token" : localStorage.getItem("refresh_token")
                         }
                     })
               .then((response) => {
                   dispatch(loginSuccess(response.data, true))
               })
               .catch((e) => {
                   dispatch(loginFail(e.response.data.message))
               });
};

export const login = (username, password, rememberMe) => async (dispatch) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("grant_type", "password");
    await axios.post(BASE_PATH  + AUTH_TOKEN_PATH,
                     urlencoded,
                     {
                         headers: {
                             "Content-Type" : "application/x-www-form-urlencoded",
                             "Authorization": "Basic dGVzdDp0ZXN0" // todo basic token icin yapilari inceleyelim boyle hardcode vermeyelim.
                         },
                     })
               .then((response) => {
                   dispatch(loginSuccess(response.data, rememberMe));
                   history.push(PATH_HOME_PAGE);
               })
               .catch((e) => {
                   dispatch(loginFail(e.response.data.message))
               });
};

export const logout = () => (dispatch) => {
    dispatch({
                 type: LOGOUT_SUCCESS
             })
};