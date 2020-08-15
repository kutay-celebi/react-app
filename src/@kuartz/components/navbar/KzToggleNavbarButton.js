import React                from 'react';
import PropTypes            from 'prop-types';
import {useDispatch}        from "react-redux";
import {IconButton}         from "@material-ui/core";
import {navbarOnMouseEnter} from "../../../app/redux/actions/core";
import MenuIcon             from '@material-ui/icons/Menu';

/**
 * menunun acilip kapanmasinda kullanilan buttondur.
 * @param props
 * @returns {*}
 * @constructor
 */
const KzToggleNavbarButton = props => {

    const dispatch = useDispatch();

    return (
        <IconButton className={props.className} onClick={e => dispatch(navbarOnMouseEnter())} disableRipple>
            {props.children}
        </IconButton>
    );
};

KzToggleNavbarButton.defaultProps = {
    children: <MenuIcon className="text-white"/>
};

KzToggleNavbarButton.propTypes = {
    icon     : PropTypes.string,
    className: PropTypes.string
};

export default KzToggleNavbarButton;