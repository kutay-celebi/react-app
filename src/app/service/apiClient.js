import React from 'react';
import {store} from "../redux/persistor";
import axios from "axios";
import {logout, refreshToken} from "../redux/actions/auth";
import history from "../../@history";
import {BASE_PATH, PATH_LOGIN_ROOT} from "../constants";
import {enqueueSnackbar} from "../redux/actions/core";
import {closeBackdrop, openBackdrop} from "../redux/actions/core/common.actions";

export const apiClient = axios.create({
                                          baseURL: BASE_PATH,
                                          headers: {
                                              "content-type": "application/json",
                                              "Accept"      : "application/json"
                                          },
                                          timeout: 60000
                                      });

const {dispatch} = store; // direct access to redux store.


apiClient.interceptors.request.use((config) => {
    dispatch(openBackdrop());
    config.headers.Authorization = "Bearer " + localStorage.getItem("access_token"); //todo constantlara alalim alternatif cozum bulalim
    return config;
});

apiClient.interceptors.response.use(
    response => {
        dispatch(closeBackdrop());
        return response;
    },
    error => {
        dispatch(closeBackdrop());
        if (error.response?.status && error.response.status === 401) {
            let rememberMe = store.getState().authReducers.auth.remember_me;

            if (rememberMe) {
                const originalReq  = error.config;
                originalReq._retry = true;

                setTimeout(() => dispatch(refreshToken()), 1000); // todo fix
                return originalReq
            } else {
                dispatch(logout());
                localStorage.removeItem("access_token");
                history.push({
                                 pathname: PATH_LOGIN_ROOT
                             });
            }
        } else {
            dispatch(enqueueSnackbar(error.response.data.message, {variant: "error"})); //todo generic error method.
            return Promise.reject(error)
        }
        return error;
    }
);