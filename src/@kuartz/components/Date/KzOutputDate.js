import React        from "react";
import PropTypes    from "prop-types";
import moment       from "moment";
import {DD_MM_YYYY} from "../../../app/constants";

const KzOutputDate = (props) => {
    return (
        props.value !== undefined && props.value !== null && props.value !== "" ?
            moment(props.value).format(DD_MM_YYYY)
            : null
    );
};

KzOutputDate.defaultProps = {
    showTime: false
};

KzOutputDate.propTypes = {
    value   : PropTypes.any,
    showTime: PropTypes.bool
};

export default KzOutputDate;