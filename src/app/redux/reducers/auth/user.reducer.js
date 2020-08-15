import {
    CLEAR_ADD_USER_FORM,
    CLOSE_USER_FORM,
    GET_USER_PAGE,
    OPEN_USER_FORM,
    SET_USER,
    SUCCESS_ADD_USER,
    SUCCESS_USER_PAGE
} from "../../actions/auth";
import {DEFAULT_QUERY_PAGE_NUMBER, DEFAULT_QUERY_PAGE_SIZE} from "../../../constants";


export const initAddUserForm = () => {
    return {
        id         : null,
        createdAt  : null,
        deleted    : false,
        deletedAt  : null,
        updatedAt  : null,
        uuid       : "unsaved",
        username   : null,
        email      : null,
        enabled    : true,
        authorities: [],
        roleList   : [],
        person     : {
            id                  : null,
            createdAt           : null,
            deleted             : false,
            deletedAt           : null,
            updatedAt           : null,
            uuid                : null,
            birthday            : null,
            gender              : null,
            identificationNumber: null,
            lastName            : null,
            midName             : null,
            name                : null,
            nationality         : null,
            title               : null,
            contact             : {
                id       : null,
                adress   : null,
                createdAt: null,
                deleted  : false,
                deletedAt: null,
                gsm1     : null,
                gsm2     : null,
                mail     : null,
                tel      : null,
                updatedAt: null,
                uuid     : null,
                web      : null
            },
            company             : {}
        },
    };
};

export const initUserQuery = () => {
    return {
        username: "",
        email   : "",
        pageable: {
            pageNumber: DEFAULT_QUERY_PAGE_NUMBER,
            pageSize  : DEFAULT_QUERY_PAGE_SIZE
        }
    }
};

export const initUserRoleRelationModel = () => {
    return {
        uuid     : null,
        id       : null,
        createdAt: null,
        updatedAt: null,
        deletedAt: null,
        user     : {},
        role    : {},
        deleted  : null,
    }
};

const initialState = {
    wait        : false,
    userFormOpen: false,
    user        : initAddUserForm(),
    userList    : {content: []}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PAGE: {
            return {
                ...state,
                query: action.payload.query,
                wait : true
            };
        }
        case SUCCESS_USER_PAGE: {
            return {
                ...state,
                wait    : false,
                userList: action.response
            };
        }
        case SUCCESS_ADD_USER : {
            return {
                ...state,
                wait: false,
                user: action.response
            };
        }
        case CLEAR_ADD_USER_FORM: {
            return {
                ...state,
                user: initAddUserForm()
            };
        }
        case SET_USER: {
            return {
                ...state,
                user        : {...state.user, ...action.user},
                userFormOpen: true
            };
        }
        case OPEN_USER_FORM: {
            return {
                ...state,
                userFormOpen: true,
                user        : initAddUserForm()
            };
        }
        case CLOSE_USER_FORM: {
            return {
                ...state,
                user        : initAddUserForm(),
                userFormOpen: false
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;