import {
    COMPANY_CLEAR_FORM,
    COMPANY_CLOSE_FORM,
    COMPANY_GET,
    COMPANY_GET_PAGE,
    COMPANY_GET_PAGE_SUCCESS,
    COMPANY_GET_SUCCESS,
    COMPANY_OPEN_FORM,
    COMPANY_SAVE,
    COMPANY_SAVE_SUCCESS
} from "./action.types";
import {API_GET_COMPANY, API_GET_COMPANY_PAGE, API_SAVE_COMPANY_PAGE} from "../../../constants";
import {enqueueSnackbar} from "../core";
import _ from '@lodash';
import {apiClient} from "../../../service/apiClient";


export const successCompanyPage = (query, response) => (dispatch) => {
    dispatch({
                 type: COMPANY_GET_PAGE_SUCCESS,
                 query,
                 response
             })
};

export const getCompanyPage = (query) => async (dispatch) => {
    dispatch({
                 type: COMPANY_GET_PAGE
             });

    await apiClient.post(API_GET_COMPANY_PAGE, query)
                   .then((res) => {
                       dispatch(successCompanyPage(query, res.data))
                   })
};

export const openCompanyForm = () => (dispatch) => {
    dispatch({
                 type: COMPANY_OPEN_FORM
             });
};

export const closeCompanyForm = () => (dispatch) => {
    dispatch({
                 type: COMPANY_CLOSE_FORM
             });
};

export const clearCompanyForm = () => (dispatch) => {
    dispatch({
                 type: COMPANY_CLEAR_FORM
             });
};

export const saveCompanyForm = (company) => async (dispatch) => {
    dispatch({
                 type: COMPANY_SAVE
             });
    await apiClient.post(API_SAVE_COMPANY_PAGE, company)
                   .then((response) => {
                       dispatch(successSaveCompany(response));
                   })
};

export const successSaveCompany = (response) => (dispatch) => {
    dispatch(enqueueSnackbar("success", {variant: "success"}));
    dispatch({
                 type: COMPANY_SAVE_SUCCESS,
                 response
             })

};

export const getCompany = (id) => async (dispatch) => {
    dispatch({
                 type: COMPANY_GET
             });
    await apiClient.get(API_GET_COMPANY + id)
                   .then(
                       (response) => {
                           dispatch(successGetCompany(response.data));
                       })

};

const _fetchCompany = _.memoize(async (id, dispatch) => {
    await apiClient.get(API_GET_COMPANY + id)
                   .then(
                       (response) => {
                           dispatch(successGetCompany(response.data));
                       })
});

export const successGetCompany = (company) => (dispatch) => {
    dispatch({
                 type: COMPANY_GET_SUCCESS,
                 company
             })
};
