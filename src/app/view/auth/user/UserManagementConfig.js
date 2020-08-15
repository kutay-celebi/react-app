import {PATH_USER_MANAGEMENT} from "../../../constants";
import UserManagement from "./UserManagement";

export const UserManagementConfig = {
    settings: {},
    auth    : ['uaa'],
    routes  : [
        {
            path     : PATH_USER_MANAGEMENT,
            component: UserManagement,
        }

    ]
};