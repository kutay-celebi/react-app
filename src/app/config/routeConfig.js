import React from "react";
import {LoginConfig} from "../view/login/LoginConfig";
import {KzUtils} from '../../@kuartz/'
import {Redirect} from "react-router-dom";
import {ErrorPageConfig} from "../view/errorPage/ErrorPageConfig";
import {HomePageConfig} from "../view/home/HomePageConfig";
import {UserManagementConfig} from "../view/auth/user/UserManagementConfig";
import {CompanyDefinitionConfig} from "../view/company/CompanyDefinitionConfig";
import {RoleDefinitionConfig} from "../view/auth/role/RoleDefinitionConfig";
import {ProjectManagementConfig} from "../view/issue-tracker/project/ProjectManagementConfig";


/**
 * config sınıflarının arrayidir.
 *
 * @type {Array}
 */
const routeConfigs = [
    LoginConfig,
    ErrorPageConfig,
    HomePageConfig,
    UserManagementConfig,
    CompanyDefinitionConfig,
    RoleDefinitionConfig,
    ProjectManagementConfig
];


const routes = [
    ...KzUtils.generateRoutesFromConfigFiles(routeConfigs, 'temelYetki'),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/anasayfa"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];


export default routes;