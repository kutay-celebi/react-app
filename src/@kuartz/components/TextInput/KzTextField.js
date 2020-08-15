import React from 'react';
import PropTypes from 'prop-types';
import {InputAdornment, TextField} from "@material-ui/core";

const KzTextField = (props) => {
    return (
        <TextField InputProps={{
                       startAdornment: props.adornmentPosition === "start" && props.adornmentText ?
                           <InputAdornment position="start">{props.adornmentText}</InputAdornment> : null,
                       endAdornment  : props.adornmentPosition === "end" && props.adornmentText ?
                           <InputAdornment position="end">{props.adornmentText}</InputAdornment> : null,
                       ...props.InputProps
                   }}
                   {...props}
        />
    );
};

KzTextField.defaultProps = {};

KzTextField.propTypes = {
    ...TextField.propTypes,
    label: PropTypes.string,

    /**
     * Tema renkleri
     */
    color: PropTypes.oneOf(["primary", "secondary"]),

    /**
     * Inputtextin stili
     */
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),

    adornmentText: PropTypes.string,

    adornmentPosition: PropTypes.oneOf(['start', 'end']),
};

export default KzTextField;