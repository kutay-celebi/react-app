import Layout1     from "./Layout1";
import {PATH_ROOT} from "../../constants";

const config = {
    title   : 'LAYOUT 1',
    defaults: {
        navbar: {
            display: true
        }
    },
    auth    : null,
    routes  : [
        {
            path     : PATH_ROOT,
            component: Layout1
        }

    ]
};

export default config;