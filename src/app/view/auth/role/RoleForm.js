import React, {useEffect} from 'react';
import KzFormDialog from "@kuartz/components/form/KzFormDialog";
import {useTranslation} from "react-i18next";
import {CardHeader, DialogContent} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import KzTextField from "@kuartz/components/TextInput/KzTextField";
import {useForm} from "react-hook-form";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import PrivilegeSelectDialog from "../privilege/PrivilegeSelectDialog";
import KzTable from "@kuartz/components/KzTable/KzTable";
import {useDispatch, useSelector} from "react-redux";
import {
    addPrivilegeToRole,
    clearRoleForm,
    closeRoleForm,
    removePrivilegeRelation,
    saveRole
} from "../../../redux/actions/auth/role.actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


const RoleForm = props => {
    const dispatch     = useDispatch();
    const {roleModel, roleFormOpen} = useSelector(({authReducers }) => authReducers.role);

    let {t}                                       = useTranslation();
    const {register, handleSubmit, errors, watch} = useForm({mode: 'onChange'});

    useEffect(() => {
    }, [roleModel]);

    const addPrivilege = (selectedList) => {
        dispatch(addPrivilegeToRole(selectedList, roleModel.id));
    };

    const submitForm = (data) => {
        dispatch(saveRole({...roleModel,...data}))
    };

    return (
        <KzFormDialog open={roleFormOpen}
                      onClose={() => dispatch(closeRoleForm())}
                      headerText={t("role:title")}
                      fullWidth
                      maxWidth={"lg"}
                      onSubmit={handleSubmit(submitForm)}
                      onClear={() => dispatch(clearRoleForm())}>
            <DialogContent>
                <form>

                    <Grid container spacing={2} direction="column" className="my-5">
                        <Grid item xs={12} md={12} lg={6} xl={6}>
                            <KzTextField label={t("role:roleCode")} inputRef={register} name="code" defaultValue={roleModel.code}/>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6} xl={6}>
                            <KzTextField label={t("role:roleName")} inputRef={register} name="name" defaultValue={roleModel.name}/>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <KzTextField label={t("description")}
                                         inputRef={register}
                                         name="description"
                                         fullWidth
                                         rows={4}
                                         multiline
                                         defaultValue={roleModel.description}/>
                        </Grid>
                    </Grid>

                    <Card>
                        <CardHeader title={t("role:currentPrivilege")}/>
                        <CardActions>
                            <PrivilegeSelectDialog onSelect={addPrivilege}
                                                   disabled={roleModel.id === null}
                                                   existPrivilegeList={roleModel.rolePrivilegeRelationList}/>
                        </CardActions>
                        <KzTable
                            options={{search: false, initialPage: 1, pageSize: 20}}
                            columns={[
                                {title: t("code"), field: "privilege.code"},
                                {title: t("parent") + " " + t("code"), field: "privilege.parentPrivilege.code"},
                                {title: t("default"), field: "privilege.defaultPrivilege", type: "boolean"},
                            ]}
                            data={roleModel ? roleModel.rolePrivilegeRelationList : null}
                            totalCount={roleModel.rolePrivilegeRelationList ? roleModel.rolePrivilegeRelationList.length : 0}
                            actions={[
                                {
                                    icon   : () => <FontAwesomeIcon icon={faTrash}/>,
                                    onClick: (event, rowData) => dispatch(removePrivilegeRelation(rowData.id, roleModel.id))
                                }
                            ]}/>
                    </Card>

                </form>
            </DialogContent>
        </KzFormDialog>
    );
};


export default RoleForm;