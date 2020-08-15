import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {useTranslation} from "react-i18next";
import {KzUtils} from "@kuartz";

const CompanySummaryForm = (props) => {
    const {t} = useTranslation();

    return (
        <Grid container spacing={2}>

            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("company:name")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "name")}
                </Grid>
            </Grid>


            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("company:shortName")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "shortName")}
                </Grid>
            </Grid>


            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("contact:adress")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "contact.adress")}
                </Grid>
            </Grid>


            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("contact:gsm1")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "contact.gsm1")}
                </Grid>
            </Grid>


            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("contact:gsm2")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "contact.gsm2")}
                </Grid>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("contact:tel")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "contact.tel")}
                </Grid>
            </Grid>

            <Grid container item spacing={2}>
                <Grid item xs={4} md={4} lg={4} xl={4} className="font-bold">
                    {t("contact:tel")} :
                </Grid>
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    {KzUtils.renderNullText(props.company, "contact.web")}
                </Grid>
            </Grid>
        </Grid>
    );
};

CompanySummaryForm.propTypes = {
    company: PropTypes.object.isRequired
};

export default CompanySummaryForm;