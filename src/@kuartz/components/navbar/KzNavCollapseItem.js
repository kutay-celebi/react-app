import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import {Collapse, ListItemText, makeStyles} from "@material-ui/core";
import KzNavItem from "./KzNavItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    iconMargin: {
        margin: "4px 0px"
    }
}));

const KzNavCollapseItem = (props) => {
    const classes                 = useStyles();
    const [collapse, setCollapse] = React.useState(false);
    const {t}                     = useTranslation();

    const handleItemClick = () => {
        setCollapse(!collapse)
    };

    return (
        <React.Fragment>
            <ListItem onClick={handleItemClick}
                      key={props.item.id}
                      button
                      className={clsx("list-item")}>
                {props.item.icon &&
                <div className={clsx("w-10 ", classes.iconMargin)}><FontAwesomeIcon icon={props.item.icon} size="lg"/></div>}
                {props.showText && <ListItemText primary={t(props.item.title)}/>}
            </ListItem>
            {
                props.item.children && (
                    <Collapse in={collapse && props.showText} className="pl-5">
                        {
                            props.item.children.map((item) => (
                                <React.Fragment>
                                    {
                                        item.type === "item" && (
                                            <KzNavItem key={item.id} item={item} showText={props.showText}/>
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </Collapse>
                )
            }
        </React.Fragment>
    );
};

KzNavCollapseItem.propTypes = {
    item: PropTypes.shape({
                              id   : PropTypes.string.isRequired,
                              title: PropTypes.string,
                              url  : PropTypes.string
                          })
};

export default KzNavCollapseItem;