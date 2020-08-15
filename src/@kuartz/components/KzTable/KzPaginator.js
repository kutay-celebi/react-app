import React             from "react";
import PropTypes         from "prop-types";
import {TablePagination} from "@material-ui/core";

const KzPaginator = (props) => {
    return (
            <TablePagination rowsPerPageOptions={[20, 40, 60]}
                             count={props.count}
                             page={props.page}
                             rowsPerPage={props.rowsPerPage}
                             onChangePage={props.onChangePage}
                             onChangeRowsPerPage={props.onChangeRowsPerPage}/>
    );
};

KzPaginator.propTypes = {
    count              : PropTypes.number.isRequired,
    page               : PropTypes.number.isRequired,
    rowsPerPage        : PropTypes.number.isRequired,
    onChangePage       : PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired
};

export default KzPaginator;