import React from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {DD_MM_YYYY} from "../../../app/constants";
import {KeyboardDatePickerProps} from "@material-ui/pickers/DatePicker/DatePicker";
import {useTranslation} from "react-i18next";

const KzKeyboardDatePicker = (props) => {
    const {t} = useTranslation();
    return (
        <KeyboardDatePicker
            invalidDateMessage={t("validation:invalid.date")}
            {...props}/>
    );
};

KzKeyboardDatePicker.defaultProps = {
    color             : "secondary",
    fullWidth         : true,
    inputVariant      : "outlined",
    format            : DD_MM_YYYY,
    initialFocusedDate: new Date(),
    variant           : "inline"
};

KzKeyboardDatePicker.propTypes = {
    ...KeyboardDatePickerProps,
};

export default KzKeyboardDatePicker;