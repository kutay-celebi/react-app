import {PATH_COMPANY_DEFINITIYON} from "../../constants";
import CompanyDefinition          from "./CompanyDefinition";

export const CompanyDefinitionConfig = {
    settings: {},
    auth    : ['uaa'],
    routes  : [
        { 
            path     : PATH_COMPANY_DEFINITIYON,
            component: CompanyDefinition
        }

    ]
};