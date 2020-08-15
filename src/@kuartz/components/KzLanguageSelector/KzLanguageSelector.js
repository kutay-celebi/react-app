import React from 'react';
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";
import i18next from "i18next";

const useStyle = makeStyles(theme => ({
    switchLang   : {
        // background: "#3f3",
        zIndex   : 9000,
        margin: 5
    },
    langFlag     : {
        width  : 25,
        height  : 25,
        cursor   : "pointer",
        display: "inline-block"
    },
    langText     : {
        display      : "inline-block",
        marginLeft   : 5,
        verticalAlign: "top",
        cursor   : "pointer",
        marginTop    : 2
    }

}));

const KzLanguageSelector = (props) => {
    const classes = useStyle();

    const onChangeLanguage = (language) => {
        i18next.changeLanguage(language);
    }

    return (
        <div className={clsx(classes.switchLang)}>
            <span className={clsx(classes.langFlag, "flag-icon flag-icon-tr")} onClick={() => onChangeLanguage("tr")}/>
            <span className={clsx(classes.langFlag, "flag-icon flag-icon-us")} onClick={() => onChangeLanguage("en")}/>
        </div>
    );
};

KzLanguageSelector.propTypes = {};

export default KzLanguageSelector;