export const BASE_PATH = "http://192.168.0.21:8765"; // todo gateway'e cors ekleyince alalim.


export const AUTH_PATH       = "/auth";
export const AUTH_TOKEN_PATH = AUTH_PATH + "/oauth/token";

export const API_SAVE_ROLE     = AUTH_PATH + "/role/save"
export const API_GET_ROLE      = AUTH_PATH + "/role/get/"
export const API_GET_ROLE_PAGE = AUTH_PATH + "/role/page";

export const API_ADD_ROLE_PRIVILEGE        = AUTH_PATH + "/role/addPrivilegeList";
export const API_REMOVE_PRIVILEGE_RELATION = AUTH_PATH + "/role/removePrivilegeRelation/";
export const API_DELETE_ROLE               = AUTH_PATH + "/role/delete/";

export const API_GET_PRIVILEGE_PAGE = AUTH_PATH + "/privilege/page";

export const API_SAVE_USER     = AUTH_PATH + "/user/save"
export const API_GET_USER      = AUTH_PATH + "/user/get/"
export const API_GET_USER_PAGE = AUTH_PATH + "/user/get/page";

export const API_GET_COMPANY_PAGE  = AUTH_PATH + "/company/get/page";
export const API_SAVE_COMPANY_PAGE = AUTH_PATH + "/company/save";
export const API_GET_COMPANY       = AUTH_PATH + "/company/get/";