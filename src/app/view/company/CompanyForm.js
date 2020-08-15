import React from 'react';
import KzFormDialog from "../../../@kuartz/components/form/KzFormDialog";
import {useTranslation} from "react-i18next";
import {DialogContent} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import KzTextField from "../../../@kuartz/components/TextInput/KzTextField";
import ContactForm from "./ContactForm";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {clearCompanyForm, closeCompanyForm, saveCompanyForm} from "../../redux/actions/company";

const CompanyForm = props => {

    const dispatch     = useDispatch();
    const {company,openForm} = useSelector(({companyReducers}) => companyReducers.company);

    let {t} = useTranslation("company");

    const companyForm = useForm({mode: 'onChange', reValidateMode: "onChange"});

    return (
        <KzFormDialog open={openForm}
                      onClose={() => dispatch(closeCompanyForm())}
                      headerText={t("title")}
                      fullWidth
                      maxWidth={"lg"}
                      onSubmit={companyForm.handleSubmit((data) => dispatch(saveCompanyForm({...company, ...data})))}
                      onClear={() => dispatch(clearCompanyForm())}>
            <DialogContent>
                <form>
                    <Grid container spacing={2} direction="column" className="my-5">
                        <Grid item md={12} lg={6}>
                            <KzTextField label={t("name")}
                                         fullWidth
                                         name={"name"}
                                         defaultValue={company.name}
                                         inputRef={companyForm.register}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                            <KzTextField label={t("shortName")}
                                         fullWidth
                                         name={"shortName"}
                                         defaultValue={company.shortName}
                                         inputRef={companyForm.register}/>
                        </Grid>
                        <Grid item md={12} lg={6}>
                            <KzTextField label={t("country")}
                                         fullWidth
                                         name={"country"}
                                         defaultValue={company.country}
                                         inputRef={companyForm.register}/>
                        </Grid>
                    </Grid>
                    <ContactForm contactForm={companyForm} contact={company.contact}/>
                </form>
            </DialogContent>
        </KzFormDialog>
    );
};


export default CompanyForm;