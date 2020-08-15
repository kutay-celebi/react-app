import React from 'react';
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import KzTextField from "../../../@kuartz/components/TextInput/KzTextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";

const CompanyQueryForm = props => {

    const {t}                      = useTranslation();
    const {register, handleSubmit} = useForm({mode: "onSubmit", defaultValues: props.query});

    return (
        <div>
            <form>
                <Grid container spacing={2}>
                    <Grid item>
                        <KzTextField label={t("company:name")}
                                     name={"companyName"}
                                     defaultValue={props.query.companyName}
                                     inputRef={register}/>
                    </Grid>
                </Grid>
            </form>

            <div id="query-form-button-group" className="my-5">
                <Button id="find-button"
                        onClick={handleSubmit(data => props.pageFunction({...props.query, ...data}))}>
                    {t("find")}
                </Button>
            </div>
        </div>
    );
};

CompanyQueryForm.propTypes = {
    query       : PropTypes.object.isRequired,
    pageFunction: PropTypes.func.isRequired
};

export default CompanyQueryForm;