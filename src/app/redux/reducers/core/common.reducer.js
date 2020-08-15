import {CLOSE_BACKDROP, OPEN_BACKDROP} from "../../actions/core";

const defaultState = {
    backdrop: false
};

const common = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_BACKDROP:
            return {
                ...state,
                backdrop: true
            };

        case CLOSE_BACKDROP:
            return {
                ...state,
                backdrop: false
            };

        default:
            return state;
    }
};

export default common;