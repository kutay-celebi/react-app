import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import KzTextField from "../TextInput/KzTextField";
import {useTranslation} from "react-i18next";
import {InputAdornment} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import List from "@material-ui/core/List";

const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const {children, role, ...other} = props;
    const data                       = React.Children.toArray(children);

    return (
        <div ref={ref}>
            <div {...other}>
                <List role={role}>
                    {/*todo add header*/}
                    {
                        data.map(value => {
                            return value
                        })
                    }
                </List>
            </div>
        </div>
    );
});

const KzAutocomplete = (props) => {
    const [value, setValue]         = React.useState([]);
    const [waitDelay, setWaitDelay] = React.useState(false);
    const {t}                       = useTranslation();


    const renderTextField = (params) => {
        return (
            <KzTextField
                label={t("autocompleteHelper")}
                fullWidth
                {...params}
                InputProps={{
                    ...params.InputProps,
                    endAdornment:
                        <InputAdornment position={"end"}>
                            <React.Fragment>
                                {props.loading || waitDelay ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        </InputAdornment>
                }}
                {...props.textFieldProps}
            />
        )
    };

    const handleInputChange = (value) => {
        if (value.length >= props.fireOnCharacter) {
            setWaitDelay(true);

            setTimeout(function () {
                props.asyncFunc(value);
                setWaitDelay(false);
            }, props.apiCallDelay)
        }
    };

    return (
        <div className={clsx(props.containerClassName, "flex")}>
            <Autocomplete
                value={value}
                filterSelectedOptions
                className={clsx(props.className, "flex-1")}
                multiple
                ListboxComponent={ListboxComponent}
                noOptionsText={t("noResult")}
                loadingText={t("loading")}
                onInputChange={(event, text) => handleInputChange(text)}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                renderInput={(params) => {
                    return renderTextField(params);
                }}

                {...props}
            />
            {
                props.addButton && props.addFunc !== undefined ?
                    <Button onClick={() => {
                        props.addFunc(value);
                        setValue([]);
                    }}
                            color="secondary"
                            disabled={props.loading || waitDelay || (value === undefined || value === null || value.length <= 0)}>
                        {t("add")}
                    </Button>
                    : null
            }
        </div>
    );
};

KzAutocomplete.defaultProps = {
    fireOnCharacter: 3,
    apiCallDelay   : 1000,
    addButton      : false
};

KzAutocomplete.propTypes = {

    headerRender: PropTypes.node,

    apiCallDelay: PropTypes.number,

    containerClassName: PropTypes.any,

    /**
     * If `true` a button will add on end of text field.
     */
    addButton: PropTypes.bool,

    /**
     * Callback fired when the "add button" clicked.
     *
     * @param {any[]} values
     */
    addFunc: PropTypes.func,

    /**
     * API call fired when the input value changes.
     *
     * @param {string} text
     */
    asyncFunc: PropTypes.func.isRequired,

    textFieldProps: PropTypes.shape({
                                        ...TextField.propTypes
                                    }),
    /**
     * If `true`, the portion of the selected suggestion that has not been typed by the user,
     * known as the completion string, appears inline after the input cursor in the textbox.
     * The inline completion string is visually highlighted and has a selected state.
     */
    autoComplete  : PropTypes.bool,

    /**
     * If `true`, the first option is automatically highlighted.
     */
    autoHighlight: PropTypes.bool,

    /**
     * If `true`, the selected option becomes the value of the input
     * when the Autocomplete loses focus unless the user chooses
     * a different option or changes the character string in the input.
     */
    autoSelect: PropTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.object,

    /**
     * @ignore
     */
    className: PropTypes.string,

    /**
     * If `true`, clear all values when the user presses escape and the popup is closed.
     */
    clearOnEscape: PropTypes.bool,

    /**
     * The icon to display in place of the default close icon.
     */
    closeIcon: PropTypes.node,

    /**
     * If `true`, the popup will ignore the blur event if the input if filled.
     * You can inspect the popup markup with your browser tools.
     * Consider this option when you need to customize the component.
     */
    debug: PropTypes.bool,

    /**
     * The default input value. Use when the component is not controlled.
     */
    defaultValue: PropTypes.any,

    /**
     * If `true`, the input can't be cleared.
     */
    disableClearable: PropTypes.bool,

    /**
     * If `true`, the popup won't close when a value is selected.
     */
    disableCloseOnSelect: PropTypes.bool,

    /**
     * If `true`, the input will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If `true`, the list box in the popup will not wrap focus.
     */
    disableListWrap: PropTypes.bool,

    /**
     * If `true`, the popup won't open on input focus.
     */
    disableOpenOnFocus: PropTypes.bool,

    /**
     * Disable the portal behavior.
     * The children stay within it's parent DOM hierarchy.
     */
    disablePortal: PropTypes.bool,

    /**
     * A filter function that determines the options that are eligible.
     *
     * @param {any[]} options The options to render.
     * @param {object} state The state of the component.
     * @returns {any[]}
     */
    filterOptions: PropTypes.func,

    /**
     * If `true`, hide the selected options from the list box.
     */
    filterSelectedOptions: PropTypes.bool,

    /**
     * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
     */
    freeSolo: PropTypes.bool,

    /**
     * Used to determine the disabled state for a given option.
     */
    getOptionDisabled: PropTypes.func,

    /**
     * Used to determine the string value for a given option.
     * It's used to fill the input (and the list box options if `renderOption` is not provided).
     */
    getOptionLabel: PropTypes.func.isRequired,

    /**
     * If provided, the options will be grouped under the returned string.
     * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
     *
     * @param {any} options The option to group.
     * @returns {string}
     */
    groupBy: PropTypes.func,

    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id: PropTypes.string,

    /**
     * If `true`, the highlight can move to the input.
     */
    includeInputInList: PropTypes.bool,

    /**
     * The input value.
     */
    inputValue: PropTypes.string,

    /**
     * The component used to render the listbox.
     */
    ListboxComponent: PropTypes.elementType,

    /**
     * If `true`, the component is in a loading state.
     */
    loading: PropTypes.bool,

    /**
     * Text to display when in a loading state.
     */
    loadingText: PropTypes.node,

    /**
     * If true, `value` must be an array and the menu will support multiple selections.
     */
    multiple: PropTypes.bool,

    /**
     * Text to display when there are no options.
     */
    noOptionsText: PropTypes.node,

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {any} value
     */
    onChange: PropTypes.func,

    /**
     * Callback fired when the popup requests to be closed.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback.
     */
    onClose: PropTypes.func,

    /**
     * Callback fired when the input value changes.
     *
     * @param {object} event The event source of the callback.
     * @param {string} value
     */
    onInputChange: PropTypes.func,

    /**
     * Callback fired when the popup requests to be opened.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback.
     */
    onOpen: PropTypes.func,

    /**
     * Control the popup` open state.
     */
    open: PropTypes.bool,

    /**
     * Array of options.
     */
    options: PropTypes.array,

    /**
     * The component used to render the body of the popup.
     */
    PaperComponent: PropTypes.elementType,

    /**
     * The component used to position the popup.
     */
    PopperComponent: PropTypes.elementType,

    /**
     * The icon to display in place of the default popup icon.
     */
    popupIcon: PropTypes.node,

    /**
     * Render the group.
     *
     * @param {any} option The group to render.
     * @returns {ReactNode}
     */
    renderGroup: PropTypes.func,

    /**
     * Render the option, use `getOptionLabel` by default.
     *
     * @param {any} option The option to render.
     * @param {object} state The state of the component.
     * @returns {ReactNode}
     */
    renderOption: PropTypes.func,

    /**
     * Render the selected value.
     *
     * @param {any} value The `value` provided to the component.
     * @param {function} getTagProps A tag props getter.
     * @returns {ReactNode}
     */
    renderTags: PropTypes.func,

    /**
     * The value of the autocomplete.
     */
    value: PropTypes.any

};

export default KzAutocomplete;