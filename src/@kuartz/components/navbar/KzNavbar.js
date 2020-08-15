import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import AppContext from "../../../app/AppContext";
import KzNavigation from "./KzNavigation";

const useStyles = (theme) => ({
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    },
});


class KzNavbar extends Component {

    render() {
        const {classes} = this.props;
        const navList   = (
            <KzNavigation/>
        );

        return (
            <div className={clsx("flex flex-col overflow-hidden h-full")}>
                <AppBar ref="navbar-appbar"
                        color="primary"
                        position="static"
                        elevation={0}
                        className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-2 pr-2">
                    <div className="flex flex-1 flex-col items-center text-center max-w-xs">
                        <img src={"/assets/images/logo.png"} style={{maxWidth: 40}}/>
                    </div>

                    {/*    todo toggle buton ve back button gelecek.*/}
                </AppBar>

                <div className={clsx(classes.content, this.props.className)}>
                    {navList}
                </div>
            </div>
        );
    }
}

KzNavbar.propTypes = {};

KzNavbar.contextType = AppContext;


export default withStyles(useStyles)(KzNavbar);