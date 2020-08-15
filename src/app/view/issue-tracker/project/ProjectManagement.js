import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTranslation} from "react-i18next";
import {bindActionCreators} from "redux";
import {withStyles} from "@material-ui/core";
import {getCompany, getCompanyPage, openCompanyForm} from "../../../redux/actions/company";

const styles = (theme) => ({
    borderFrame: {
        border: "1px solid #ccc !important",
    },
});

class ProjectManagement extends Component {

    render() {
        return (
           <div>
               Project Management
           </div>
        );
    }
}

const mapStateToProps = ({companyReducers}) => {
    return {
        companyList: companyReducers.company.companyList,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
                                  handleOpenForm: openCompanyForm,
                                  getCompany    : getCompany,
                                  getPage       : getCompanyPage
                              }, dispatch)
}

export default withStyles(styles)(withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ProjectManagement)));