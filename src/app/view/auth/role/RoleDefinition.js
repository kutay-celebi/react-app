import React, {Component} from 'react';
import KzFormCard from "../../../../@kuartz/components/form/KzFormCard";
import {withTranslation} from "react-i18next";
import RoleQueryForm from "./RoleQueryForm";
import KzFormFrame from "../../../../@kuartz/components/form/KzFormFrame";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import RoleForm from "./RoleForm";
import {deleteRole, getRole, getRolePage, openRoleForm} from "../../../redux/actions/auth/role.actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import KzTable from "../../../../@kuartz/components/KzTable/KzTable";
import {initRoleQuery} from "../../../redux/reducers/auth/role.reducer";

class RoleDefinition extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            query: initRoleQuery()
        }
    }

    handePageChange = (event) => {
        if (event !== this.state.query.pageable.pageNumber) {

            this.setState(state => {
                              state.query.pageable.pageNumber = event
                          },
                          () => {
                              this.props.getRolePage(this.state.query)
                          });
        }
    };

    handleRowPerPageChange = event => {
        if (event !== this.state.query.pageable.pageSize) {
            this.setState(state => {
                              state.query.pageable.pageSize = event
                          },
                          () => {
                              this.props.getRolePage(this.state.query)
                          })

        }
    };

    render() {
        const {t} = this.props;

        return (
            <KzFormCard title={t("role:title")}>
                <KzFormFrame>
                    <RoleQueryForm query={this.state.query} pageFunction={this.props.getRolePage}/>
                </KzFormFrame>
                <KzFormFrame>
                    <Button className="my-3" onClick={this.props.handleOpenForm}>
                        {t("add-new")}
                    </Button>
                    <RoleForm/>

                    <KzTable
                        columns={[
                            {title: t("role:roleCode"), field: "code"},
                            {title: t("role:roleName"), field: "name"},
                            {title: t("default"), field: "defaultRole", type: "boolean"},

                        ]}
                        data={this.props.roleList.content}
                        onChangeRowsPerPage={this.handleRowPerPageChange}
                        onChangePage={this.handePageChange}
                        page={this.state.query.pageable.pageNumber}
                        pageSize={this.state.query.pageable.pageSize}
                        totalCount={this.props.roleList ? this.props.roleList.totalElements : 0}
                        actions={[
                            {
                                icon   : () => <FontAwesomeIcon icon={faEdit}/>,
                                onClick: (event, rowData) => this.props.getRole(rowData.id)
                            },
                            rowData =>  ({
                                icon   : () => <FontAwesomeIcon icon={faTrash}/>,
                                disabled: rowData.defaultRole,
                                onClick: (event, rowData) => this.props.deleteRole(rowData.id, this.state.query)
                            })
                        ]}/>

                </KzFormFrame>
            </KzFormCard>

        );
    }
}

const mapStateToProps = ({authReducers}) => {
    return {
        roleList: authReducers.role.roleList
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
                                  handleOpenForm: openRoleForm,
                                  getRolePage   : getRolePage,
                                  getRole       : getRole,
                                  deleteRole    : deleteRole
                              }, dispatch)
}


RoleDefinition.propTypes = {};

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(RoleDefinition));