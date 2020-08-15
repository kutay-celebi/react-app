import React from 'react';
import {ErrorMessage} from "react-hook-form";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
              fontColor: {
                  color: theme.palette.error.main
              }
          }
      ));

const KzErrorMessage = (props) => {
    const classes = useStyle();
    return (
        <ErrorMessage errors={props.errors} name={props.field}>
            {
                ({message}) =>
                    <p className={clsx(classes.fontColor)}>
                        <FontAwesomeIcon icon={faExclamationCircle}/> {message}
                    </p>
            }
        </ErrorMessage>
    );
};

KzErrorMessage.propTypes = {};

export default KzErrorMessage;