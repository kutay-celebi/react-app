import React                   from "react";
import {makeStyles, TableHead} from "@material-ui/core";
import clsx                    from "clsx";
import PropTypes               from "prop-types";

const useStyle = makeStyles((theme) => ({
    boldFont  : {
        "& th": {
            fontWeight: theme.typography.fontWeightBold,
        }
    },
    centerText: {
        "& th": {
            textAlign: "center"
        }
    }
}));

const KzTableHead = (props) => {
    const classes = useStyle();

    return (
        <TableHead className={clsx(classes.boldFont, props.textCenter && classes.centerText)}>
            {props.children}
        </TableHead>
    );
};

KzTableHead.propTypes = {
    textCenter: PropTypes.bool
};

export default KzTableHead;