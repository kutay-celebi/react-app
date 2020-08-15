import {CLOSE_SNACKBAR, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR} from "./action.types";


export const enqueueSnackbar = (msg, opt) => {
    const key = opt && opt.key;

    return {
        type        : ENQUEUE_SNACKBAR,
        notification: {
            message: msg,
            options: opt,
            key    : key || new Date().getTime() + Math.random(),
        },
    };
};

export const closeSnackbar = (key) => ({
    type      : CLOSE_SNACKBAR,
    dismissAll: !key, // dismiss all if no key has been defined
    key,
});

export const removeSnackbar = (key) => ({
    type: REMOVE_SNACKBAR,
    key,
});
