import React, {useContext} from "react";
import {renderRoutes} from 'react-router-config'
import AppContext from "../../AppContext";
import KzToolbar from "../../../@kuartz/components/toolbar/KzToolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import KzNavbarWrapper from "../../../@kuartz/components/navbar/KzNavbarWrapper";
import KzNotifier from "../../../@kuartz/components/notifier/KzNotifier";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root          : {
        position          : 'relative',
        display           : 'flex',
        flexDirection     : 'row',
        width             : '100%',
        height            : '100%',
        overflow          : 'hidden',
        // backgroundColor   : theme.palette.background.default,
        // color             : theme.palette.text.primary,
        '&.boxed'         : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body'   : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content': {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '& .navigation'   : {
            '& .list-subheader-text, & .list-item-text, & .item-badge, & .arrow-icon': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            },
        }
    },
    wrapper       : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%',
        flex    : '1 1 auto',
    },
    contentWrapper: {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        // zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto',

    },
    content       : {
        background                  : theme.palette.background.default,
        position                    : 'relative',
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        // zIndex                      : 2
    },
    backdrop      : {
        zIndex: theme.zIndex.backdrop,
        color : '#fff',
    },
}));

const Layout1 = (props) => {

    const appContext = useContext(AppContext);
    // todo routeslerin hepsi contexte gececek sekilde duzeltilmeli (navbar)
    const {routes}   = appContext;

    const classes    = useStyles(props);
    const {backdrop} = useSelector(({coreReducers}) => coreReducers.common);

    return (
        <div id="layoutRoot" className={clsx(classes.root)}>
            <div id="layoutRootInner" className="flex flex-1 flex-col overflow-hidden relative">
                <div id="layoutWrapper" className={classes.wrapper}>
                    <KzNavbarWrapper/>
                    <div id="layoutContentWrapper" className={classes.contentWrapper}>
                        <KzToolbar/>
                        <div id="layoutContent" className={clsx(classes.content)}>
                            <React.Suspense fallback={<h1>Loaading</h1>}>
                                <KzNotifier/>
                                <Backdrop id="kz-backdrop" className={classes.backdrop} open={backdrop}>
                                    <CircularProgress color="inherit"/>
                                </Backdrop>
                                {renderRoutes(routes)}
                            </React.Suspense>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout1;
