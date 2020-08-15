import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AppContext from "../../../app/AppContext";
import {matchRoutes} from "react-router-config";
import {PATH_LOGIN_ROOT} from "../../../app/constants";
import {bindActionCreators} from "redux";
import {logout} from "../../../app/redux/actions/auth";


class KzAuth extends Component {

    constructor(props, context) {
        super(props);
        const {routes} = context;
        this.state     = {
            accessGranted: true,
            routes
        };
    }

    static getDerivedStateFromProps(props, state) {

        const {location} = props;

        const {routes} = state;

        const matched = matchRoutes(routes, location.pathname)[0];
        return {
            accessGranted: (matched && matched.route.auth && matched.route.auth.length > 0) ?
                props.authority ? props.authority.filter(auth => matched.route.auth.includes(auth.code)).length > 0 : false
                : true
        };
    }

    // fixme
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextState.accessGranted !== this.state.accessGranted;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.accessGranted) {
            this.redirectRoute()
        }
    }


    redirectRoute() {
        const {location, history, authority} = this.props;

        // kullanici giris yapmadiysa henuz bir yetkisi yoktur.
        // login ekranina gonderilir.
        if (!authority || authority.length === 0) {
            this.props.logout();
            history.push({
                             pathname: PATH_LOGIN_ROOT,
                             state   : {redirectUrl: location.pathname}
                         });
        } else {
            history.push({
                             pathname: "/"
                         });
        }
    }

    render() {
        return (
            this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : null
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
                                  logout: logout
                              }, dispatch);
};

const mapStateToProps = ({authReducers}) => {
    return {
        authority: authReducers.auth.principal.authority // todo sayfa ilk acildiginda hata veriyor inceleyelim.
    };
};

KzAuth.contextType = AppContext;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KzAuth));