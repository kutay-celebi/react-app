import {
    CLEAR_ADD_ROLE_FORM,
    CLOSE_ROLE_FORM,
    GET_ROLE_PAGE,
    OPEN_ROLE_FORM,
    SET_ROLE,
    SUCCESS_ADD_ROLE,
    SUCCESS_ROLE_PAGE
} from "../../actions/auth";
import {DEFAULT_QUERY_PAGE_NUMBER, DEFAULT_QUERY_PAGE_SIZE} from "../../../constants";
import {initAddUserForm} from "./user.reducer";

export const initRoleModel = () => {
    return {
        id                       : null,
        createdAt                : null,
        deleted                  : false,
        deletedAt                : null,
        updatedAt                : null,
        uuid                     : "unsaved",
        name                     : null,
        code                     : null,
        description              : null,
        rolePrivilegeRelationList: []
    };
};

export const initRoleQuery = () => {
    return {
        code    : "",
        pageable: {
            pageNumber: DEFAULT_QUERY_PAGE_NUMBER,
            pageSize  : DEFAULT_QUERY_PAGE_SIZE,
            sort      : {
                kzOrderList: []
            }
        }
    }
};

export const initPrivilegeQuery = () => {
    return {
        pageable: {
            pageNumber: DEFAULT_QUERY_PAGE_NUMBER,
            pageSize  : DEFAULT_QUERY_PAGE_SIZE,
            sort      : {
                kzOrderList: []
            }
        }
    }
};


const initialState = {
    wait        : false,
    roleFormOpen: false,
    roleModel   : initRoleModel(),
    roleList    : {content: []},
    roleQuery   : initRoleQuery()
};


const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROLE_PAGE: {
            return {
                ...initialState,
                wait: true
            }
        }
        case SUCCESS_ROLE_PAGE: {
            return {
                ...initialState,
                roleList: action.response,
                wait    : false
            }
        }
        case OPEN_ROLE_FORM : {
            return {
                ...state,
                roleModel   : initAddUserForm(),
                roleFormOpen: true
            }
        }
        case SUCCESS_ADD_ROLE: {
            return {
                ...state,
                wait     : false,
                roleModel: action.response
            }
        }
        case CLEAR_ADD_ROLE_FORM: {
            return {
                ...state,
                roleModel: initRoleModel()
            }
        }
        case SET_ROLE: {
            return {
                ...state,
                roleModel   : action.role,
                roleFormOpen: true
            }
        }
        case CLOSE_ROLE_FORM: {
            return {
                ...state,
                roleModel   : initRoleModel(),
                roleFormOpen: false
            }
        }
        default: {
            return state;
        }
    }
};

export default roleReducer;