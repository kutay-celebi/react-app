import React from 'react';
import PropTypes from 'prop-types';
import CompanySelectDialog from "../../company/CompanySelectDialog";
import {useTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import CompanySummaryForm from "../../company/CompanySummaryForm";
import Button from "@material-ui/core/Button";

const UserCompanyInfoForm = (props) => {

    const {t} = useTranslation();

    const handeCompanySelect = (company) => {
        props.userModel.person.company = company;
    };

    const handleCompanyClear = () => {
        props.userModel.person.company = null;
    };

    return (
        <div>
            <div className="flex flex-1 flex-grow-1">
                <CompanySelectDialog onSelect={handeCompanySelect}/>
                <Button onClick={() => handleCompanyClear()}>
                    {t("clear")}
                </Button>
            </div>
            <div className="mt-5">
                <Typography variant="h6" className="font-bold border-solid border-0 border-b " color="secondary">{t("current")}</Typography>
                <CompanySummaryForm company={props.userModel.person.company}/>
            </div>
        </div>
    );
};

UserCompanyInfoForm.propTypes = {
    form     : PropTypes.any.isRequired,
    userModel: PropTypes.object.isRequired
};

export default UserCompanyInfoForm;