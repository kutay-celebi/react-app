import {CLOSE_BACKDROP, OPEN_BACKDROP} from "./action.types";


export const openBackdrop = () => dispatch => {
    dispatch({
                 type: OPEN_BACKDROP
             })
};
export const closeBackdrop = () => dispatch => {
    dispatch({
                 type: CLOSE_BACKDROP
             })
};
