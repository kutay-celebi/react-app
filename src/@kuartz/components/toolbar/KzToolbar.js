import React from 'react';
import {makeStyles, Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import KzToggleNavbarButton from "../navbar/KzToggleNavbarButton";
import KzUserInfo from "../userinfo/KzUserInfo";
import {useSelector} from "react-redux";
import KzLanguageSelector from "../KzLanguageSelector/KzLanguageSelector";

const useStyles = makeStyles(theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    },
    toolbar  : {
        display        : 'flex',
        flexDirection  : 'row',
        zIndex         : 10,
        backgroundColor: theme.palette.background.default
    }
}));
const KzToolbar = (props) => {
    const classes = useStyles();
    const auth    = useSelector(({authReducers}) => authReducers.auth);
    return (
        // todo theming gelince bg color tekrardan ele alinacak.
        auth.isLoggedIn ?
        <AppBar id="kz-toolbar" className={classes.toolbar} position="sticky" color={"default"}>
            <Toolbar className="p-0 flex-1 ">
                {/*todo navbar hidden proplari degistirilince tekrar ele alinacak.*/}
                <Hidden mdUp>
                    <KzToggleNavbarButton/>
                </Hidden>
            </Toolbar>
            {
                    <Toolbar className={"p-0 flex-1"}>
                        <KzUserInfo/>
                        <KzLanguageSelector/>
                    </Toolbar>

            }
        </AppBar>
            : null
    );
};

export default KzToolbar;