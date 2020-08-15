import React                   from "react";
import {makeStyles, TableBody} from "@material-ui/core";
import clsx                    from "clsx";
import PropTypes               from "prop-types";

const useStyle = makeStyles((theme) => ({
    centerText: {
        "& td": {
            textAlign: "center"
        }
    },
    overFlowRow: {
        "& tr": {
            overflowX: "scroll"
        }
    }
}));

const KzTableBody = (props) => {
    const classes = useStyle();

    return (
        <TableBody className={clsx(props.textCenter && classes.centerText, classes.overFlowRow)}>
            {props.children}
        </TableBody>
    );
};

KzTableBody.propTypes = {
    textCenter: PropTypes.bool
};

export default KzTableBody;