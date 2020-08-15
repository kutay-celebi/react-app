import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../../actions/auth";

const initialAuthState = {
    access_token : null,
    token_type   : null,
    remember_me  : false,
    refresh_token: null,
    scope        : null,
    principal    : {},
    isLoggedIn   : false
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const response = action.payload.response;
            localStorage.setItem("access_token", response.access_token);
            localStorage.setItem("refresh_token", response.refresh_token);
            let isLoggedIn = false;
            if (response.expires_in > 0) {
                isLoggedIn = true;
            }
            return {
                ...state,
                ...response,
                isLoggedIn : isLoggedIn,
                remember_me: action.payload.rememberMe
            }
        }

        case LOGIN_FAIL: {
            return state
        }

        case LOGOUT_SUCCESS: {
            return initialAuthState
        }

        default: {
            return state
        }

    }
};

export default authReducer;