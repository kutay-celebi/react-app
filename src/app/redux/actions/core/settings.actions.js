import {RESET_DEFAULT_SETTINGS, SET_DEFAULT_SETTINGS, SET_INITIAL_SETTINGS, SET_SETTINGS} from "./action.types";

export const setSettings = (value) => {
    return {
        type: SET_SETTINGS,
        value
    }
};

export const setDefaultSettings = (value) => {
    return {
        type: SET_DEFAULT_SETTINGS,
        value
    }
};

export const setInitialSettings = () => {
    return {
        type: SET_INITIAL_SETTINGS
    }
};

export const resetSettings = (value) => {
    return {
        type: RESET_DEFAULT_SETTINGS,
        value
    }
};