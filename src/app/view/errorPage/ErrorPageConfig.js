import {PATH_ERROR_PAGE} from "../../constants";
import ErrorPage         from "./ErrorPage";

export const ErrorPageConfig = {
    settings: {},
    auth    : [],
    routes  : [
        {
            path     : PATH_ERROR_PAGE,
            component: ErrorPage
        }

    ]
};