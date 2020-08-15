import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import KzFormDialog from "../../../@kuartz/components/form/KzFormDialog";
import CompanyQueryForm from "./CompanyQueryForm";
import KzTable from "../../../@kuartz/components/KzTable/KzTable";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {getCompanyPage} from "../../redux/actions/company";
import {initCompanyQuery} from "../../redux/reducers/company/company.reducers";

const CompanySelectDialog = (props) => {
    const {t} = useTranslation("company");

    const [openCompanyQueryForm, setOpenCompanyForm] = useState(false);

    const dispatch      = useDispatch();
    const {companyList} = useSelector(({companyReducers}) => companyReducers.company);
    const query         = initCompanyQuery();

    const handePageChange = (page) => {
        const currentPage = query.pageable.pageNumber;
        if (page !== currentPage) {
            query.pageable.pageNumber = page;
            dispatch(getCompanyPage(query));
        }
    };

    const handleRowPerPageChange = (pageSize) => {
        const currentPageSize = query.pageable.pageSize;
        if (pageSize !== currentPageSize) {
            query.pageable.pageSize = pageSize;
            dispatch(getCompanyPage(query));
        }
    };

    return (
        <div>
            <Button onClick={() => setOpenCompanyForm(true)}>
                {t("common:findCompany")}
            </Button>

            <KzFormDialog open={openCompanyQueryForm}
                          headerText={t("common:findCompany")}
                          onClose={() => setOpenCompanyForm(false)}
                          fullWidth
                          maxWidth={"lg"}>
                <div className="p-5">

                    <CompanyQueryForm query={query}/>
                    <KzTable
                        columns={[
                            {title: t("name"), field: "name"},
                            {title: t("shortName"), field: "shortName"},
                            {title: t("country"), field: "country"},

                        ]}
                        options={{
                            showTextRowsSelected: false,
                            paging              : false,
                            search              : false,
                            toolbar             : false,
                        }}
                        data={companyList.content}
                        onChangeRowsPerPage={handleRowPerPageChange}
                        onChangePage={handePageChange}
                        page={query.pageable.pageNumber}
                        pageSize={query.pageable.pageSize}
                        totalCount={companyList ? companyList.totalElements : 0}
                        actions={[
                            {
                                icon   : () => <FontAwesomeIcon icon={faCheck}/>,
                                onClick: (event, rowData) => {
                                    props.onSelect(rowData);
                                    setOpenCompanyForm(false);
                                }
                            }
                        ]}/>
                </div>
            </KzFormDialog>
        </div>
    );
};

CompanySelectDialog.propTypes = {
    onSelect: PropTypes.func.isRequired
};

export default CompanySelectDialog;