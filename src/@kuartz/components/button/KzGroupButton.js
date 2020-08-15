import React      from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx       from "clsx";

const useStyles = makeStyles(theme => ({
    groupedVertical: {
        minWidth                     : 40,
        margin                       : 0,
        '&> button:not(:first-child)': {
            borderTopLeftRadius : 0,
            borderTopRightRadius: 0,
        },
        '&> button:not(:last-child)' : {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius : 0,
            borderBottom      : 'transparent'
            //    todo horizantal destek de koyulmali
        }
    },
}));

const KzGroupButton = props => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.groupedVertical, "flex flex-col")} role="group">
            {props.children}
        </div>
    );
};

KzGroupButton.propTypes = {};

export default KzGroupButton;