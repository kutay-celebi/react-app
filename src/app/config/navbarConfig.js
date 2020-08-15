import {
    PATH_COMPANY_DEFINITIYON,
    PATH_HOME_PAGE,
    PATH_KIT_PROJECT_MANAGEMENT,
    PATH_ROLE_DEFINITION,
    PATH_USER_MANAGEMENT
} from "../constants";
import {HomePageConfig} from "../view/home/HomePageConfig";
import {AuthConfig} from "../view/auth/AuthConfig";
import {UserManagementConfig} from "../view/auth/user/UserManagementConfig";
import {faBuilding, faHome, faShieldAlt, faUsers, faUserTag} from "@fortawesome/free-solid-svg-icons";
import {CompanyDefinitionConfig} from "../view/company/CompanyDefinitionConfig";
import {RoleDefinitionConfig} from "../view/auth/role/RoleDefinitionConfig";
import {ProjectManagementConfig} from "../view/issue-tracker/project/ProjectManagementConfig";


/**
 *
 * @type {({auth: [string], children: [], icon: string, id: string, title: string, type: string, url: string}|{auth: [string], children: [{auth: [string], children: [], icon: string, exact: boolean, id: string, title: string, type: string, url: string}], icon: string, id: string, title: string, type: string, url: null})[]}
 */
export const navbarConfig = [
    {
        id      : "homepage",
        title   : "homepage",
        type    : "item",
        icon    : faHome,
        url     : PATH_HOME_PAGE,
        auth    : HomePageConfig.auth,
        exact   : true,
        children: []
    },
    {
        id      : "uaa",
        title   : "uaa",
        type    : "group",
        icon    : faShieldAlt,
        url     : null,
        auth    : AuthConfig.auth,
        exact   : false,
        children: [
            {
                id      : "user-definition",
                title   : "userDefinition",
                type    : "item",
                icon    : faUsers,
                url     : PATH_USER_MANAGEMENT,
                auth    : UserManagementConfig.auth,
                exact   : true,
                children: []
            },
            {
                id      : "company-definition",
                title   : "companyDefinition",
                type    : "item",
                icon    : faBuilding,
                url     : PATH_COMPANY_DEFINITIYON,
                auth    : CompanyDefinitionConfig.auth,
                exact   : true,
                children: []
            },
            {
                id      : "role-definition",
                title   : "roleDefinition",
                type    : "item",
                icon    : faUserTag,
                url     : PATH_ROLE_DEFINITION,
                auth    : RoleDefinitionConfig.auth,
                exact   : true,
                children: []
            }
        ]
    },
    {
        id      : "kit",
        title   : "kit",
        type    : "group",
        icon    : faShieldAlt,
        url     : null,
        auth    : ["kit"],
        exact   : false,
        children: [
            {
                id      : "project-management",
                title   : "projectManagement",
                type    : "item",
                icon    : faUsers,
                url     : PATH_KIT_PROJECT_MANAGEMENT,
                auth    : ProjectManagementConfig.auth,
                exact   : true,
                children: []
            },
        ]
    }
];