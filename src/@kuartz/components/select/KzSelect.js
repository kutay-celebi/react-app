import React from "react";
import PropTypes from "prop-types";
import {MenuItem, Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {useTranslation} from "react-i18next";

const KzSelect = (props) => {
    const {t} = useTranslation();
    return (
        <FormControl fullWidth>
            <InputLabel id="kzselect-inputlabel" shrink> {props.label} </InputLabel>
            <Select displayEmpty labelId="kzselect-inputlabel" {...props}>
                <MenuItem>
                    <em>{t("pleaseSelect")}</em>
                </MenuItem>
                {
                    Object.entries(props.options).map(([key, value]) => {
                                                          return (
                                                              <MenuItem key={key} value={key}>
                                                                  {t(`${value}`)}
                                                              </MenuItem>
                                                          );
                                                      }
                    )
                }
            </Select>
        </FormControl>
    );
};

KzSelect.defaultProps = {
    color    : "secondary",
    autoFocus: true
};

KzSelect.propTypes = {
    ...Select.propTypes,
    label  : PropTypes.string.isRequired,
    options: PropTypes.object.isRequired
};

export default KzSelect;