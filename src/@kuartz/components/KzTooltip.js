import React, {useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(
    (theme) => ({
        tooltip: {
            backgroundColor: theme.palette.secondary.main,
            color          : 'rgba(0, 0, 0, 0.87)',
            boxShadow      : theme.shadows[1],
            fontSize       : 12,
        },
    })
);

const KzTooltip = (props) => {
    const [open, setOpen] = useState(props.disabled && props.open);
    const classes         = useStyles();

    return (
        <Tooltip title={props.title} open={open} classes={classes} {...props}>
            {props.children}
        </Tooltip>
    );
};


KzTooltip.propTypes = {
    ...Tooltip.propTypes,
    disabled: PropTypes.bool
};

export default KzTooltip