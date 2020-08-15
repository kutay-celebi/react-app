import {
    CLEAR_ADD_ROLE_FORM,
    CLOSE_ROLE_FORM,
    GET_ROLE_PAGE,
    OPEN_ROLE_FORM,
    REMOVE_PRIVILEGE_RELATION,
    SET_ROLE,
    SUCCESS_ADD_ROLE,
    SUCCESS_ROLE_PAGE
} from "./action.types";
import {
    API_ADD_ROLE_PRIVILEGE,
    API_DELETE_ROLE,
    API_GET_ROLE,
    API_GET_ROLE_PAGE,
    API_REMOVE_PRIVILEGE_RELATION,
    API_SAVE_ROLE
} from "../../../constants";
import {enqueueSnackbar} from "../core";
import {apiClient} from "../../../service/apiClient";

export const saveRole = (role) => async (dispatch) => {
    // todo add wait reducer.
    // todo move api constant.
    await apiClient.post(API_SAVE_ROLE, role).then(
        (response) => {
            dispatch(successAddRole(response.data));
        }
    )
};

export const successAddRole = (response) => (dispatch) => {
    dispatch(enqueueSnackbar("success", {variant: "success",}));
    dispatch({
                 type: SUCCESS_ADD_ROLE,
                 response
             })
};

export const clearRoleForm = () => (dispatch) => {
    dispatch({
                 type: CLEAR_ADD_ROLE_FORM
             })
};

export const successRolePage = (query, response) => (dispatch) => {
    dispatch({
                 type: SUCCESS_ROLE_PAGE,
                 response
             })
};

export const getRole = (id) => async (dispatch) => {
    // todo add wait reducer.
    // todo move api constant
    await apiClient.get(API_GET_ROLE + id)
                   .then((response) => {
                       dispatch(setRole(response.data));
                   })
};

export const setRole = (role) => (dispatch) => {
    dispatch({
                 type: SET_ROLE,
                 role
             })
};

export const getRolePage = (query) => async (dispatch) => {
    dispatch({
                 type: GET_ROLE_PAGE,
             });

    await apiClient.post(API_GET_ROLE_PAGE, query)
                   .then((response) => {
                       dispatch(successRolePage(query, response.data))
                   })
};

export const openRoleForm = () => (dispatch) => {
    dispatch({
                 type: OPEN_ROLE_FORM
             })
};

export const closeRoleForm = () => (dispatch) => {
    dispatch({
                 type: CLOSE_ROLE_FORM
             })
};

export const removePrivilegeRelation = (relationId, roleId) => (dispatch) => {
    dispatch({
                 type: REMOVE_PRIVILEGE_RELATION
             });

    apiClient.delete(API_REMOVE_PRIVILEGE_RELATION + relationId)
             .then((response) => {
                 dispatch(getRole(roleId));
                 dispatch(enqueueSnackbar(response.data.message, {variant: "success",}));
             })
};


export const addPrivilegeToRole = (privilegeList, roleId) => (dispatch) => {
    apiClient.post(API_ADD_ROLE_PRIVILEGE, privilegeList.map(p => p.id),
                   {
                       params: {
                           "roleId": roleId
                       }
                   })
             .then(
                 response => {
                     dispatch(getRole(roleId));
                     dispatch(enqueueSnackbar(response.data.message, {variant: "success",}));
                 }
             )
};

/**
 *
 * @param roleId number
 * @param query role query
 *
 * @returns {function(...[any]=)}
 */
export const deleteRole = (roleId, query) => async (dispatch) => {
    apiClient.delete(API_DELETE_ROLE + roleId)
             .then(
                 response => {
                     dispatch(enqueueSnackbar(response.data.message, {variant: "success",}));
                     dispatch(getRolePage(query))
                 }
             )
}


