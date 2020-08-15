import React, {useState} from 'react';
import PropTypes from 'prop-types';
import KzTable from "../../../../@kuartz/components/KzTable/KzTable";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@material-ui/core";
import clsx from "clsx";
import KzAutocomplete from "../../../../@kuartz/components/autocomplete/KzAutocomplete";
import ListItemText from "@material-ui/core/ListItemText";
import {initRoleQuery} from "../../../redux/reducers/auth/role.reducer";
import {API_GET_ROLE_PAGE} from "../../../constants";
import {apiClient} from "../../../service/apiClient";
import {addRoleToUser, removeRoleToUser} from "../../../redux/actions/auth";


const UserRoleRelationForm = (props) => {

    // const {roleList, wait} = useSelector(({authReducers}) => authReducers.role);

    const dispatch = useDispatch();

    const [roleList, setRoleList] = useState({content: []});
    const [roleWait, setRoleWait] = useState(false);

    const roleQuery = initRoleQuery();
    const {t}       = useTranslation();
    const theme     = useTheme();

    const asyncAutocomplete = async (text) => {
        roleQuery.code = text;
        setRoleWait(true);
        await apiClient.post(API_GET_ROLE_PAGE, roleQuery)
                       .then((response) => {
                           setRoleList(response.data);
                           setRoleWait(false);
                       }).catch((error) => {
                setRoleWait(false);
            });
    };

    const addRoleToList = (values) => {
        dispatch(addRoleToUser(values, props.userModel));
    };

    const handleRemoveRole = (role) => {
        dispatch(removeRoleToUser(role, props.userModel));
    };

    return (
        <React.Fragment>
            <KzAutocomplete options={roleList.content}
                            containerClassName="mb-5"
                            loading={roleWait}
                            getOptionLabel={(option) => option.name}
                            getOptionDisabled={(option) => option.defaultRole}
                            addButton
                            renderOption={(option) => (
                                <React.Fragment>
                                    <ListItemText>
                                        {option.code}
                                    </ListItemText>
                                    <ListItemText>
                                        {option.name}
                                    </ListItemText>
                                    <ListItemText>
                                        {option.description}
                                    </ListItemText>
                                    <ListItemText>
                                        {option.defaultRole ? t("default") : null}
                                    </ListItemText>
                                </React.Fragment>
                            )}
                            addFunc={values => addRoleToList(values)}
                            asyncFunc={text => asyncAutocomplete(text)}/>

            <KzTable columns={[
                {title: t("code"), field: "role.code"},
                {title: t("name"), field: "role.name"},
                {title: t("description"), field: "role.description"},
            ]}
                     options={{
                         showTextRowsSelected: false,
                         paging              : false,
                         search              : false,
                         toolbar             : false,
                     }}
                     data={props.userModel?.roleList ? props.userModel.roleList : []}
                     actions={[
                         rowData => ({
                             icon   : () => <FontAwesomeIcon color={clsx(theme.palette.error.main)} icon={faTrashAlt} size="sm"/>,
                             onClick: (event, rowData) => handleRemoveRole(rowData),
                             hidden : rowData.role.defaultRole !== undefined && rowData.role.defaultRole === true
                         })
                     ]}/>
        </React.Fragment>
    );
};

UserRoleRelationForm.propTypes = {
    form     : PropTypes.any.isRequired,
    userModel: PropTypes.object.isRequired
};

export default UserRoleRelationForm;