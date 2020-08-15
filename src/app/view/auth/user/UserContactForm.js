import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import KzTextField from "../../../../@kuartz/components/TextInput/KzTextField";
import KzMaskedInput from "../../../../@kuartz/components/mask/KzMaskedInput";
import {useTranslation} from "react-i18next";

const UserContactForm = props => {
    const {t}     = useTranslation("contact");
    const {register, handleSubmit, errors, watch, setValue} = props.form;

    return (
        <Grid container spacing={2} direction="column" className="my-5">
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzTextField label={t("adress")}
                             inputRef={register}
                             name={"person.contact.adress"}
                             defaultValue={props.userModel.person?.contact?.adress}
                             multiline
                             rows={4}
                             fullWidth/>
            </Grid>
            <Grid item md={12} lg={6}>
                <KzMaskedInput label={t("gsm1")}
                               inputRef={register}
                               name={"person.contact.gsm1"}
                               defaultValue={props.userModel.person?.contact?.gsm1}
                               fullWidth
                               maskProps={{
                                   allowEmptyFormatting: true,
                                   removeFormatting    : true,
                                   format              : "+### (###) ### ## ##",
                                   mask                : "_"
                               }}/>
            </Grid>

            <Grid item md={12} lg={6}>
                <KzMaskedInput label={t("gsm2")}
                               inputRef={register}
                               name={"person.contact.gsm2"}
                               defaultValue={props.userModel.person?.contact?.gsm2}
                               fullWidth
                               maskProps={{
                                   allowEmptyFormatting: true,
                                   removeFormatting    : true,
                                   format              : "+### (###) ### ## ##",
                                   mask                : "_"
                               }}/>
            </Grid>

            <Grid item md={12} lg={6}>
                <KzMaskedInput label={t("tel")}
                               inputRef={register}
                               name={"person.contact.tel"}
                               defaultValue={props.userModel.person?.contact?.tel}
                               fullWidth
                               maskProps={{
                                   allowEmptyFormatting: true,
                                   removeFormatting    : true,
                                   format              : "+### (###) ### ## ##",
                                   mask                : "_"
                               }}/>
            </Grid>

            <Grid item md={12} lg={6}>
                <KzTextField label={t("mail")}
                             inputRef={register}
                             name={"person.contact.mail"}
                             defaultValue={props.userModel.person?.contact?.mail}
                             fullWidth/>
            </Grid>

            <Grid item md={12} lg={6}>
                <KzTextField label={t("web")}
                             inputRef={register}
                             name={"person.contact.web"}
                             defaultValue={props.userModel.person?.contact?.web}
                             fullWidth/>
            </Grid>

        </Grid>
    );
};

UserContactForm.propTypes = {
    form    : PropTypes.any.isRequired
};

export default UserContactForm;