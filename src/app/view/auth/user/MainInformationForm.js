import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import KzTextField from "../../../../@kuartz/components/TextInput/KzTextField";
import KzSelect from "../../../../@kuartz/components/select/KzSelect";
import {gender} from "../../../reference/Gender";
import {useTranslation} from "react-i18next";
import KzErrorMessage from "../../../../@kuartz/components/form/KzErrorMessage";
import KzKeyboardDatePicker from "../../../../@kuartz/components/Date/KzKeyboardDatePicker";

const MainInformationForm = props => {
    const {t}                                               = useTranslation();
    const {register, handleSubmit, errors, watch, setValue} = props.form;
    useEffect(() => {
        register({name: "person.gender"});
        register({name: "person.birthday"});
    }, [register]);

    return (
        <Grid container spacing={2} direction="column" className="my-5">
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzTextField label={t("username")}
                             name={"username"}
                             defaultValue={props.userModel.username}
                             fullWidth
                             inputRef={register}/>
                <KzErrorMessage errors={errors} field={"username"}/>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <KzTextField label={t("email")}
                             fullWidth
                             name={"email"}
                             defaultValue={props.userModel.email}
                             inputRef={register}/>
                <KzErrorMessage errors={errors} field={"email"}/>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzTextField label={t("name")}
                             fullWidth
                             name={"person.name"}
                             defaultValue={props.userModel.person?.name}
                             inputRef={register}/>
                <KzErrorMessage errors={errors} field={"person.name"}/>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzTextField label={t("surname")}
                             name={"person.lastName"}
                             fullWidth
                             defaultValue={props.userModel.person?.lastName}
                             inputRef={register}/>
                <KzErrorMessage errors={errors} field={"person.lastName"}/>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzSelect options={gender}
                          label={t("gender")}
                          value={watch("person.gender")}
                          onChange={event => setValue("person.gender", event.target.value)}
                          variant="outlined"
                          fullWidth
                          defaultValue={props.userModel.person?.gender}
                          ref={register}/>
                <KzErrorMessage errors={errors} field={"gender"}/>
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
                {/*fixme*/}
                <KzKeyboardDatePicker label={t("birthday")}
                                      name={"person.birthday"}
                                      maxDate={new Date()}
                                      inputRef={register}
                                      defaultValue={props.userModel.person?.birthday}
                                      onChange={(date, value) => {
                                          setValue("person.birthday", date)
                                      }}
                                      value={watch("person.birthday")}/>
            </Grid>
        </Grid>
    );
};

MainInformationForm.propTypes = {
    userUuid : PropTypes.string,
    form     : PropTypes.any.isRequired,
    userModel: PropTypes.object.isRequired
};

export default MainInformationForm;