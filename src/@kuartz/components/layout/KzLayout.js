import React, {Component} from 'react';
import KzLayouts from "../../../app/layouts/KzLayouts";
import AppContext from "../../../app/AppContext";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    root: {
        backgroundColor: '#3f3'
    }
});


class KzLayout extends Component {
    render() {
        const Layout    = KzLayouts[this.props.settings.layout.style];
        return (
            <Layout/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        settings: state.coreReducers.settings.current
    }
};

KzLayout.contextType = AppContext;

export default withStyles(styles, {})(withRouter(connect(mapStateToProps, null)(React.memo(KzLayout))));