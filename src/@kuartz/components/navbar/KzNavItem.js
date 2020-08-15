import React from 'react';
import PropTypes from 'prop-types';
import NavLinkAdapter from "../NavLinkAdapter/NavLinkAdapter";
import clsx from "clsx";
import {ListItem, makeStyles} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    iconMargin: {
        margin: "4px 0px"
    }
}));

const KzNavItem = (props) => {
    const {t}     = useTranslation();
    const classes = useStyles();
    //todo add on click close navbar action.
    return (
        <React.Fragment>
            <ListItem button
                      key={props.key}
                      component={NavLinkAdapter}
                      to={props.item.url}
                      className={clsx("list-item")}
                      exact={props.item.exact}>
                {props.item.icon &&
                <div className={clsx("w-10 ", classes.iconMargin)}><FontAwesomeIcon icon={props.item.icon} size="lg"/></div>}
                {props.showText && <ListItemText primary={t(props.item.title)}/>}
            </ListItem>
        </React.Fragment>
    );
};

KzNavItem.propTypes = {
    item: PropTypes.object
};

export default withRouter(KzNavItem);