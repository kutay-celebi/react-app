import {DEFAULT_QUERY_PAGE_NUMBER, DEFAULT_QUERY_PAGE_SIZE} from "../../../constants";
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
} from "../../actions/company";

export const initCompanyForm = () => {
    return {
        id       : null,
        createdAt: null,
        updatedAt: null,
        deleted  : false,
        deletedAt: null,
        country  : null,
        name     : null,
        shortName: null,
        uuid     : null,
        contact  : {
            id       : null,
            updatedAt: null,
            createdAt: null,
            uuid     : null,
            deleted  : false,
            deletedAt: null,
            adress   : null,
            gsm1     : null,
            gsm2     : null,
            mail     : null,
            tel      : null,
            web      : null
        },
    }
};

export const initCompanyQuery = () => {
    return {
        companyName: null,
        pageable   : {
            pageNumber: DEFAULT_QUERY_PAGE_NUMBER,
            pageSize  : DEFAULT_QUERY_PAGE_SIZE,
            sort      : {}
        }
    }
}

const initialState = {
    openForm   : false,
    wait       : false,
    company    : initCompanyForm(),
    companyList: {}
};

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_GET_PAGE: {
            return {
                ...state,
                wait: true
            }
        }
        case COMPANY_GET_PAGE_SUCCESS: {
            return {
                ...state,
                wait       : false,
                companyList: action.response
            }
        }
        case COMPANY_OPEN_FORM: {
            return {
                ...state,
                openForm: true,
                company : initCompanyForm()
            }
        }
        case COMPANY_CLOSE_FORM: {
            return {
                ...state,
                openForm: false,
                company : initCompanyForm()
            }
        }
        case COMPANY_CLEAR_FORM: {
            return {
                ...state,
                company: initCompanyForm()
            }
        }
        case COMPANY_SAVE : {
            return {
                ...state,
                wait: true
            }
        }
        case COMPANY_SAVE_SUCCESS: {
            return {
                ...state,
                company: action.response.body,
                wait   : false
            }
        }
        case COMPANY_GET: {
            return {
                ...state,
                wait: true
            }
        }
        case COMPANY_GET_SUCCESS: {
            return {
                ...state,
                company : action.company,
                wait    : false,
                openForm: true
            }
        }
        default : {
            return state;
        }
    }

};