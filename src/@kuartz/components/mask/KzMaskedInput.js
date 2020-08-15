import React        from "react";
import PropTypes    from "prop-types";
import KzTextField  from "../TextInput/KzTextField";
import NumberFormat from "react-number-format";
import {TextField}  from "@material-ui/core";

const KzMaskedInput = (props) => {
    return (
        <NumberFormat {...props.maskProps}
                      {...props}
                      type="text"
                      customInput={KzTextField}/>
    );
};

KzMaskedInput.defaultProps = {
    color      : "secondary",
    variant    : "outlined",
    type       : "input",
    valueReturn: "formatted",
    autoFocus  : true
};

KzMaskedInput.propTypes = {
    ...TextField.propTypes,
    valueReturn: PropTypes.oneOf(["formatted", "pure"]),
    maskProps  : PropTypes.shape({

                                     thousandSeparator       : PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([true])]),
                                     decimalSeparator        : PropTypes.string,
                                     allowedDecimalSeparators: PropTypes.arrayOf(PropTypes.string),
                                     thousandsGroupStyle     : PropTypes.oneOf(["thousand", "lakh", "wan"]),
                                     decimalScale            : PropTypes.number,
                                     fixedDecimalScale       : PropTypes.bool,
                                     displayType             : PropTypes.oneOf(["input", "text"]),
                                     prefix                  : PropTypes.string,
                                     suffix                  : PropTypes.string,
                                     format                  : PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
                                     removeFormatting        : PropTypes.func,
                                     mask                    : PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
                                     value                   : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                                     defaultValue            : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                                     isNumericString         : PropTypes.bool,
                                     customInput             : PropTypes.elementType,
                                     allowNegative           : PropTypes.bool,
                                     allowEmptyFormatting    : PropTypes.bool,
                                     allowLeadingZeros       : PropTypes.bool,
                                     onValueChange           : PropTypes.func,
                                     onKeyDown               : PropTypes.func,
                                     onMouseUp               : PropTypes.func,
                                     onChange                : PropTypes.func,
                                     onFocus                 : PropTypes.func,
                                     onBlur                  : PropTypes.func,
                                     type                    : PropTypes.oneOf(["text", "tel", "password"]),
                                     isAllowed               : PropTypes.func,
                                     renderText              : PropTypes.func,
                                     getInputRef             : PropTypes.oneOfType([PropTypes.func, // for legacy refs
                                                                                       PropTypes.shape({
                                                                                                           current: PropTypes.any
                                                                                                       })])
                                 })
};

export default KzMaskedInput;