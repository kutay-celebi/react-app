import React from 'react';
import PropTypes from 'prop-types';
import KzTextField from "../../../../@kuartz/components/TextInput/KzTextField";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";


const RoleQueryForm = (props) => {
    let {t}                        = useTranslation();
    const {register, handleSubmit} = useForm({mode: "onSubmit", defaultValues: props.query});
    return (
        <form>
            <Grid container spacing={2} direction="column" className="my-5">
                <Grid item xs={12} md={12} lg={6} xl={6}>
                    <KzTextField label={t("role:roleCode")}
                                 name={"code"}
                                 inputRef={register}/>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                    <KzTextField label={t("role:roleName")}
                                 name={"name"}
                                 inputRef={register}/>
                </Grid>
            </Grid>
            <div id="query-form-button-group" className="my-5">
                <Button id="find-button"
                        onClick={handleSubmit(data => props.pageFunction({...props.query, ...data}))}
                        variant="outlined">
                    {t("find")}
                </Button>
            </div>
        </form>
    );
};

RoleQueryForm.propTypes = {
    query       : PropTypes.object.isRequired,
    pageFunction: PropTypes.func.isRequired
};

export default RoleQueryForm;