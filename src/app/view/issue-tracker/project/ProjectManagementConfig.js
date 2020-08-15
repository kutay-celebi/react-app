import {PATH_KIT_PROJECT_MANAGEMENT} from "../../../constants";
import ProjectManagement from "./ProjectManagement";

export const ProjectManagementConfig = {
    settings: {},
    auth    : ["kit_project"],
    routes  : [
        { 
            path     : PATH_KIT_PROJECT_MANAGEMENT,
            component: ProjectManagement
        }

    ]
};