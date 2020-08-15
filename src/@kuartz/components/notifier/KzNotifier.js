import React                      from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSnackbar}           from "../../../app/redux/actions/core";
import {useSnackbar}              from "notistack";
import {useTranslation}           from "react-i18next";

let displayed = [];

const KzNotifier = (props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {t} = useTranslation();
    let notifications = useSelector(({coreReducers}) => coreReducers.notify.notifications || []);

    const storeDisplayed = (id) => {
        displayed = [...displayed, id];
    };

    const removeDisplayed = (id) => {
        displayed = [...displayed.filter((key) => id !== key)];
    };

    React.useEffect(() => {

        notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
            if (dismissed) {
                // dismiss snackbar using notistack
                closeSnackbar(key);
                return;
            }

            // do nothing if snackbar is already displayed
            if (displayed.includes(key)) {
                return;
            }

            // display snackbar using notistack
            enqueueSnackbar(t(message), {
                key,
                ...options,
                onClose: (event, reason, myKey) => {
                    if (options.onClose) {
                        options.onClose(event, reason, myKey);
                    }
                },
                onExited: (event, myKey) => {
                    // removen this snackbar from redux store
                    dispatch(removeSnackbar(myKey));
                    removeDisplayed(myKey);
                },
            });

            // keep track of snackbars that we"ve displayed
            storeDisplayed(key);
        });
    }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

    return null;
};

KzNotifier.propTypes = {

};

export default KzNotifier;