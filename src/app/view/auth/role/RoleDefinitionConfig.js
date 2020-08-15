import {PATH_ROLE_DEFINITION} from "../../../constants";
import RoleDefinition from "./RoleDefinition";

export const RoleDefinitionConfig = {
    settings: {},
    auth    : ['uaa'],
    routes  : [
        {
            path     : PATH_ROLE_DEFINITION,
            component: RoleDefinition,
        }

    ]
};