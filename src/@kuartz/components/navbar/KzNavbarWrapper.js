import React from 'react';
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import {navbarOnMouseEnter, navbarOnMouseLeave} from "../../../app/redux/actions/core";
import KzNavbar from "./KzNavbar";
import Drawer from "@material-ui/core/Drawer";

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
    wrapper        : {
        display                     : 'flex',
        flexDirection               : 'column',
        zIndex       : theme.zIndex.drawer,
        [theme.breakpoints.up('md')]: {
            width   : navbarWidth,
            minWidth: navbarWidth
        }
    },
    wrapperFolded  : {
        [theme.breakpoints.up('md')]: {
            width   : 58,
            minWidth: 58
        }
    },
    navbar         : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        flex         : '1 1 auto',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        zIndex       : theme.zIndex.drawer,
        boxShadow    : theme.shadows[3],
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
    },
    folded         : {
        position: 'relative',
        width   : 58,
        minWidth: 58,
        top     : 0,
        bottom  : 0
    },
    foldedAndOpened: {
        width   : navbarWidth,
        minWidth: navbarWidth,
    },
    navbarContent  : {
        flex      : '1 1 auto',
        background: theme.palette.primary[600]
    },
    foldedAndClosed: {
        '& $navbarContent': {
            '& .logo-icon'                                   : {
                width : 32,
                height: 32
            },
            '& .logo-text'                                   : {
                opacity: 0
            },
            '& .react-badge'                                 : {
                opacity: 0
            },
            '& .list-item-text, & .arrow-icon, & .item-badge': {
                opacity: 0
            },
            '& .list-subheader .list-subheader-text'         : {
                opacity: 0
            },
            '& .list-subheader:before'                       : {
                content  : '""',
                display  : 'block',
                position : 'absolute',
                minWidth : 16,
                borderTop: '2px solid',
                opacity  : .2
            },
            '& .collapse-children'                           : {
                display: 'none'
            },
            '& .user'                                        : {
                '& .username, & .email': {
                    opacity: 0
                },
                '& .avatar'            : {
                    width  : 40,
                    height : 40,
                    top    : 32,
                    padding: 0
                }
            },
            '& .list-item.active'                            : {
                marginLeft  : 12,
                width       : 40,
                padding     : 12,
                borderRadius: 20,
                '&.square'  : {
                    borderRadius: 0,
                    marginLeft  : 0,
                    paddingLeft : 24,
                    width       : '100%'
                }
            }
        }
    }
}));

/**
 * Navbar icin wrapper siniftir.
 * @returns {*}
 * @constructor
 */
const KzNavbarWrapper = () => {

    const classes           = useStyles();
    const dispatch          = useDispatch();
    const {onHover, folded} = useSelector(({coreReducers}) => coreReducers.navbar);
    const auth              = useSelector(({authReducers}) => authReducers.auth);

    // const foldedAndClosed = folded && !onHover;
    const foldedAndOpened = folded && onHover;
    if (auth.isLoggedIn) {
        return (
            <div id="kz-navbar-wrapper" className={clsx(classes.wrapper,
                                                        folded && classes.wrapperFolded)}>

                {/* todo yeniden duzenlenmeli test icin boyle birakildi. mdDown*/}
                <Hidden smDown>
                    <div id="hidden-navbar"
                         className={
                             clsx(classes.navbar,
                                  folded && classes.folded,
                                  foldedAndOpened && classes.foldedAndOpened
                             )
                         }
                         onMouseEnter={() => dispatch(navbarOnMouseEnter())}
                         onMouseLeave={() => dispatch(navbarOnMouseLeave())}
                    >
                        <KzNavbar className={classes.navbarContent}/>
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <Drawer
                        // anchor={config.navbar.position}
                        variant="temporary"
                        open={onHover}
                        classes={{
                            paper: classes.navbar
                        }}
                        onClose={() => dispatch(navbarOnMouseLeave())}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <KzNavbar className={classes.navbarContent}/>
                    </Drawer>
                </Hidden>
            </div>
        );
    } else {
        return null;
    }
};

export default KzNavbarWrapper;