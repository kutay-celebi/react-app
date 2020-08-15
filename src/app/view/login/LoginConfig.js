import {PATH_LOGIN_ROOT} from "../../constants";
import Login             from "./Login";

/**
 * Login ekranının konfügirasyonlarının bulunduğu sınıftır.
 * @type {{settings: {}, routes: {path: *, component: *}[], auth: []}}
 */
export const LoginConfig = {
    settings: {},
    auth    : [], // anonymous ekrandir.
    routes  : [
        {
            path     : PATH_LOGIN_ROOT,
            component: Login
        }

    ]
};