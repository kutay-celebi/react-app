import React, {Component} from 'react';
import {connect} from 'react-redux';
import KzFormCard from "../../../@kuartz/components/form/KzFormCard";
import {withTranslation} from "react-i18next";
import clsx from "clsx";
import KzTable from "../../../@kuartz/components/KzTable/KzTable";
import {bindActionCreators} from "redux";
import {getCompany, getCompanyPage, openCompanyForm} from "../../redux/actions/company";
import {Button, withStyles} from "@material-ui/core";
import CompanyForm from "./CompanyForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import CompanyQueryForm from "./CompanyQueryForm";
import {initCompanyQuery} from "../../redux/reducers/company/company.reducers";

const styles = (theme) => ({
    borderFrame: {
        border: "1px solid #ccc !important",
    },
});

class CompanyDefinition extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            query: initCompanyQuery()
        }
    }

    handePageChange = (event) => {
        if (event !== this.state.query.pageable.pageNumber) {

            this.setState(state => {
                              state.query.pageable.pageNumber = event
                          },
                          () => {
                              this.props.getPage(this.state.query)
                          });
        }
    };

    handleRowPerPageChange = event => {
        if (event !== this.state.query.pageable.pageSize) {

            this.setState(state => {
                              state.query.pageable.pageSize = event
                          },
                          () => {
                              this.props.getPage(this.state.query)
                          });
        }
    };

    render() {
        let {t, classes} = this.props;
        return (
            <KzFormCard title={t("company:title")}>
                <div className={clsx(classes.borderFrame, "p-5")}>
                    <CompanyQueryForm pageFunction={this.props.getPage} query={this.state.query}/>
                </div>

                <div className={clsx(classes.borderFrame, "p-5 mt-5")}>
                    <Button className={"my-3"} variant="outlined" color="secondary" onClick={this.props.handleOpenForm}>
                        {t("add-new")}
                    </Button>

                    <CompanyForm/>

                    <KzTable
                        columns={[
                            {title: t("company:name"), field: "name"},
                            {title: t("company:shortName"), field: "shortName"},
                            {title: t("company:country"), field: "country"},

                        ]}
                        data={this.props.companyList.content}
                        onChangeRowsPerPage={this.handleRowPerPageChange}
                        onChangePage={this.handePageChange}
                        page={this.state.query.pageable.pageNumber}
                        pageSize={this.state.query.pageable.pageSize}
                        totalCount={this.props.companyList ? this.props.companyList.totalElements : 0}
                        actions={[
                            {
                                icon   : () => <FontAwesomeIcon icon={faEdit}/>,
                                onClick: (event, rowData) => this.props.getCompany(rowData.id)
                            }
                        ]}/>
                </div>
            </KzFormCard>
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

export default withStyles(styles)(withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CompanyDefinition)));