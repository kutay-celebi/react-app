import React from "react";
import KzTextField from "../../../../@kuartz/components/TextInput/KzTextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";


const UserQueryForm = (props) => {

    const {t} = useTranslation();

    const {register, handleSubmit} = useForm({mode: "onSubmit", defaultValues: props.query});
    return (
        <form onSubmit={handleSubmit(data => props.pageFunction({...props.query, ...data}))}>

            <Grid container spacing={2}>
                <Grid item>
                    <KzTextField label={t("username")}
                                 name={"username"}
                                 inputRef={register}/>
                </Grid>

                <Grid item>
                    <KzTextField label={t("email")}
                                 name={"email"}
                                 inputRef={register}/>
                </Grid>
            </Grid>

            <div id="query-form-button-group" className="my-5">
                <Button id="find-button" type="submit" variant="outlined" color="default">
                    {t("find")}
                </Button>
            </div>
        </form>
    );
};

UserQueryForm.propTypes = {
    query       : PropTypes.object.isRequired,
    pageFunction: PropTypes.func.isRequired,
    classes     : PropTypes.object
};

export default UserQueryForm;