import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {useTranslation} from "react-i18next";
import KzTextField from "../../../@kuartz/components/TextInput/KzTextField";
import KzMaskedInput from "../../../@kuartz/components/mask/KzMaskedInput";

const ContactForm = props => {
    let {t} = useTranslation(["contact"]);
    const {register, handleSubmit, errors, watch, setValue} = props.contactForm;
    return (
        <Grid container spacing={2} direction="column" className="my-5">
            <Grid item xs={12} md={12} lg={6} xl={6}>
                <KzTextField label={t("adress")}
                             inputRef={register}
                             name={"contact.adress"}
                             defaultValue={props.contact.adress}
                             multiline
                             rows={4}
                             fullWidth/>
            </Grid>
            <Grid item md={12} lg={6}>
                <KzMaskedInput label={t("gsm1")}
                               inputRef={register}
                               name={"contact.gsm1"}
                               defaultValue={props.contact.gsm1}
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
                               name={"contact.gsm2"}
                               defaultValue={props.contact.gsm2}
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
                               name={"contact.tel"}
                               defaultValue={props.contact.tel}
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
                             name={"contact.mail"}
                             defaultValue={props.contact.mail}
                             fullWidth/>
            </Grid>

            <Grid item md={12} lg={6}>
                <KzTextField label={t("web")}
                             inputRef={register}
                             name={"person.contact.web"}
                             defaultValue={props.contact.web}
                             fullWidth/>
            </Grid>

        </Grid>
    )
};

ContactForm.propTypes = {
    contactForm: PropTypes.any.isRequired,
    contact    : PropTypes.object.isRequired
};

export default React.memo(ContactForm);