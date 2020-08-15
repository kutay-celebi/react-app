import React from 'react';
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    borderFrame: {
        border: "1px solid #ccc !important",
    },
}));

const KzFormFrame = props => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.borderFrame, "p-5 mt-5")}>
            {props.children}
        </div>
    );
};

KzFormFrame.propTypes = {};

export default KzFormFrame;