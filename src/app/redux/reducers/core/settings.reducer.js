import {RESET_DEFAULT_SETTINGS, SET_INITIAL_SETTINGS} from "../../actions/core/action.types";
import KzSettingsConfig from "../../../config/defaultUserPreference.js";
import KzLayoutConfigs from "../../../layouts/KzLayoutConfigs";


import _ from "lodash";

const initialSettings = getInitialSettings();

const initialState = {
    defaults: _.merge({}, initialSettings),
    current: _.merge({}, initialSettings)
};

const settings = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIAL_SETTINGS: {
            return {...initialState};
        }
        case RESET_DEFAULT_SETTINGS: {
            return {
                ...state,
                defaults: _.merge({}, state.defaults),
                current: _.merge({}, state.defaults)
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
};

function getInitialSettings() {


    const defLayout = (KzSettingsConfig.layout && KzSettingsConfig.layout.style) ? KzSettingsConfig.layout.style : 'layout1';
    const layout = {
        style: defLayout,
        config: KzLayoutConfigs[defLayout].defaults
    };
    return _.merge({},  {layout}, KzSettingsConfig);
}

export default settings;