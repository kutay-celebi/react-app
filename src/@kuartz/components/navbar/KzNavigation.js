import React from 'react';
import {makeStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {navbarConfig} from "../../../app/config/navbarConfig";
import KzNavItem from "./KzNavItem";
import KzNavCollapseItem from "./KzNavCollapseItem";

const useStyles = makeStyles(theme => ({

    navigation        : {
        color         : theme.palette.common.white,
        '& .list-item': {
            '&:hover'             : {
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
            },
            '&:focus:not(.active)': {
                backgroundColor: 'rgba(255, 255, 255, 0.06)'
            }
        },
        "& a"         : {
            color: theme.palette.common.white,
        }
    },
    verticalNavigation: {
        '&.active-square-list': {
            '& .list-item, & .active.list-item': {
                width       : '100%',
                borderRadius: '0'
            }
        },
        '&.dense'             : {
            '& .list-item': {
                paddingTop   : 0,
                paddingBottom: 0,
                height       : 32
            }
        }
    },
    '@global'         : {
        '.popper-navigation-list': {
            '& .list-item': {
                padding            : '8px 12px 8px 12px',
                height             : 40,
                minHeight          : 40,
                '& .list-item-text': {
                    padding: '0 0 0 8px'
                }
            },
            '&.dense'     : {
                '& .list-item': {
                    minHeight          : 32,
                    height             : 32,
                    '& .list-item-text': {
                        padding: '0 0 0 8px'
                    }
                }
            }
        }
    }
}));

const KzNavigation = props => {
    const classes = useStyles(props);

    const {userRole, folded} = useSelector(({authReducers, coreReducers}) => {
        return {
            userRole: authReducers.auth.principal.authority,
            folded  : coreReducers.navbar.onHover
        }
    });

    // todo move at the login action
    const filterNav = navbarConfig.filter((item) => {
        return userRole.some(value => {
            if (value.code.startsWith(item.auth)) {
                return value.code.includes(item.auth);
            }
            return false;
        })
    });

    return (
        <List className={clsx(classes.navigation)}>
            {
                filterNav.map((item) => (
                    <React.Fragment key={item.id}>
                        {
                            item.type === "item" && <KzNavItem item={item} showText={folded}/>
                        }

                        {
                            item.type === "group" && <KzNavCollapseItem item={item} showText={folded}/>
                        }
                    </React.Fragment>
                ))
            }
        </List>
    );
};


KzNavigation.defaultProps = {
    layout: 'vertical'
};

export default withRouter(React.memo(KzNavigation));