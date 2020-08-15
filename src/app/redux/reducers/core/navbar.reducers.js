import {NAVBAR_MOUSE_ENTER, NAVBAR_MOUSE_LEAVE, NAVBAR_RESET_ITEMS, NAVBAR_SET_ITEMS} from "../../actions/core";

const initialState = {
    items  : {},
    onHover: false,
    folded : true
};

const navbar = (state = initialState, action) => {
    switch (action.type) {
        case NAVBAR_SET_ITEMS: {
            return {
                ...initialState,
                items: action.payload
            }
        }
        case NAVBAR_RESET_ITEMS: {
            return initialState;
        }
        case NAVBAR_MOUSE_ENTER: {
            return {
                ...state,
                onHover: true
            }
        }
        case NAVBAR_MOUSE_LEAVE: {
            return {
                ...state,
                onHover: false
            }
        }
        default: {
            return initialState;
        }
    }
};

export default navbar;

