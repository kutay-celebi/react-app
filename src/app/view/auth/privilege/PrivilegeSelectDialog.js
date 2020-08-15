import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import KzFormDialog from "@kuartz/components/form/KzFormDialog";
import KzTable from "@kuartz/components/KzTable/KzTable";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {initPrivilegeQuery} from "../../../redux/reducers/auth/role.reducer";
import {API_GET_PRIVILEGE_PAGE} from "../../../constants";
import {enqueueSnackbar} from "../../../redux/actions/core";
import KzTooltip from "../../../../@kuartz/components/KzTooltip";
import {DialogContent} from "@material-ui/core";
import {apiClient} from "../../../service/apiClient";

const PrivilegeSelectDialog = (props) => {
    const {t}                                                 = useTranslation();
    const [openPrivilegeQueryForm, setOpenPrivilegeQueryForm] = useState(false);
    const [privlegeQuery, setPrivilegeQuery]                  = React.useState(initPrivilegeQuery());
    const [privilegePage, setPrivilegePage]                   = React.useState({content: []});
    const [selectedList, setSelectedList]                     = React.useState();
    const dispatch                                            = useDispatch();

    useEffect(() => {
        getPrivilegePage(privlegeQuery)
    }, [openPrivilegeQueryForm]);

    const getPrivilegePage = async (query) => {
        await apiClient.post(API_GET_PRIVILEGE_PAGE, query)
                         .then((response) => {
                             setPrivilegePage(response.data);
                         })
                         .catch((error) => {
                             dispatch(enqueueSnackbar(error.response.data.message, {variant: "error"})); //todo generic error method.
                         });
    };

    const privilegePageChange = (event) => {
        if (event !== privlegeQuery.pageable.pageNumber) {
            setPrivilegeQuery(state => {
                state.pageable.pageNumber = event
            });

            getPrivilegePage(privlegeQuery);
        }
    };

    const privilegePageSizeChange = (query, event) => {
        if (event !== privlegeQuery.pageable.pageSize) {
            setPrivilegeQuery(state => {
                state.pageable.pageSize = event
            });

            getPrivilegePage(privlegeQuery);
        }
    };

    return (
        <div>
            <KzTooltip title={t("messages:firstSave")} disabled={props.disabled}>
                <span>
                <Button onClick={() => setOpenPrivilegeQueryForm(true)} disabled={props.disabled}>
                    {t("role:assocPrivilege")}
                </Button>
                </span>
            </KzTooltip>

            <KzFormDialog open={openPrivilegeQueryForm}
                          headerText={t("role:assocPrivilege")}
                          onClose={() => setOpenPrivilegeQueryForm(false)}
                          onSubmit={() => {
                              props.onSelect(selectedList);
                              setSelectedList(null);
                              setOpenPrivilegeQueryForm(false);
                          }}
                          fullWidth
                          maxWidth={"lg"}>
                <DialogContent>
                    <div className="p-5">
                        <KzTable
                            columns={[
                                {title: t("code"), field: "code"},
                                {title: t("parent") + " " + t("code"), field: "parentPrivilege.code"},
                                {title: t("default"), field: "defaultPrivilege", type: "boolean"},
                            ]}
                            options={{
                                selection            : true,
                                showSelectAllCheckbox: false,
                                selectionProps       : row => ({
                                    disabled: props.existPrivilegeList ?
                                        props.existPrivilegeList.some(
                                            value => value.privilege.uuid === row.uuid): false
                                })
                            }}
                            data={privilegePage.content ? privilegePage.content : null}
                            onChangeRowsPerPage={privilegePageSizeChange}
                            onChangePage={privilegePageChange}
                            page={privlegeQuery.pageable.pageNumber}
                            pageSize={privlegeQuery.pageable.pageSize}
                            totalCount={privilegePage.content ? privilegePage.content.totalElements : 0}
                            onSelectionChange={(data) => setSelectedList(data)}/>
                    </div>
                </DialogContent>
            </KzFormDialog>


        </div>
    );
};

PrivilegeSelectDialog.propTypes = {
    onSelect          : PropTypes.func.isRequired,
    existPrivilegeList: PropTypes.array.isRequired,
    disabled          : PropTypes.bool
};

export default PrivilegeSelectDialog;