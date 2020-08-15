import React from "react";
import PropTypes from "prop-types";
import {Dialog, DialogActions, makeStyles, useMediaQuery} from "@material-ui/core";
import {faBackspace, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root     : {
        margin                        : 0,
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
        }
    },
    iconWhite: {
        color: theme.palette.common.white
    }
}));

const KzDialogTitle = ((props) => {

    return (
        <DialogTitle className={clsx(props.classes.root)}>
            {props.children}
            <Button className="float-right" onClick={props.onClose} variant="text">
                <FontAwesomeIcon icon={faTimes} onClick={props.onClose}/>
            </Button>
        </DialogTitle>
    );
});

const KzFormDialog = (props) => {

    const fullScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

    let {t}          = useTranslation();
    const classes    = useStyles();

    return (
        <Dialog open={props.open} fullScreen={fullScreen} {...props}>
            <KzDialogTitle onClose={props.onClose} classes={classes}>
                {props.headerText}
            </KzDialogTitle>
            {props.children}

            <DialogActions>
                {
                    props.onClear !== undefined ?
                        <Button onClick={props.onClear}
                                className="bg-blue-400"
                                variant="contained"
                                size="small"
                                startIcon={<FontAwesomeIcon icon={faBackspace} className={clsx(classes.iconWhite)} size="sm"/>}>
                            {t("clear")}
                        </Button>
                        : null
                }

                {
                    props.onSubmit !== undefined ?
                        <Button type="submit"
                                onClick={props.onSubmit}
                                className="bg-green-400"
                                variant="contained"
                                size="small"
                                startIcon={<FontAwesomeIcon icon={faSave} className={clsx(classes.iconWhite)} size="xs"/>}>
                            {t("save")}
                        </Button>
                        : null
                }

            </DialogActions>
        </Dialog>
    );
};

KzFormDialog.propTypes = {
    ...Dialog.propTypes,
    headerText: PropTypes.string.isRequired,
    open      : PropTypes.bool.isRequired,
    onClose   : PropTypes.func,
    onClear   : PropTypes.func,
    onSubmit  : PropTypes.func
};

export default KzFormDialog;