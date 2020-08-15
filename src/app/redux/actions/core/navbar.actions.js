import {NAVBAR_MOUSE_ENTER, NAVBAR_MOUSE_LEAVE} from "./action.types";

export const navbarOnMouseEnter = () => (dispatch) => {
    return dispatch({
                        type: NAVBAR_MOUSE_ENTER
                    })
};

export const navbarOnMouseLeave = () => (dispatch) => {
    return dispatch({
                        type: NAVBAR_MOUSE_LEAVE
                    })
};