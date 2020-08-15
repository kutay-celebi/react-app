import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import KzTextField from "../../../@kuartz/components/TextInput/KzTextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {useForm} from "react-hook-form";
import Link from "@material-ui/core/Link";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/auth";
import axios from "axios";
import {AUTH_PATH, BASE_PATH} from "../../constants";
import {enqueueSnackbar} from "../../redux/actions/core";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    root          : {
        display       : 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        flex          : 1,
    },
    contentWrapper: {
        background  : 'rgba(20,20,20,0.6)',
        borderRadius: 25,
        boxShadow   : theme.shadows[10]
    },
    content       : {
        display                 : 'flex',
        flexDirection           : 'row',
        justifyContent          : 'center',
        '& .kzMuiInputBase-root': {
            margin: '10px 10px',
        }
    },
    form          : {
        maxWidth                      : '15rem',
        '& .kz-MuiFormControl-root-61': {
            margin: '10px 0px',
        }
    }
}));

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Required"
    }

    if (values.username.length < 3) {
        errors.username = "Dont < 3"
    }
    return errors;
};

const LoginForm = (props) => {

    useEffect(() => {
    }, [props.render]);

    const {register, handleSubmit, errors, watch} = useForm({mode: 'onChange'});
    const dispatch                                = useDispatch();
    const {t}                                     = useTranslation();

    const [renderForgot, setRenderForgot] = useState(false);
    const [rememberMe,setRememberMe]                       = useState(true);

    const handleForgotForm = (data) => {

        axios.post(BASE_PATH + AUTH_PATH + "/user/changePassword", data)
             .then(response => {
                 dispatch(enqueueSnackbar(response.data.message, {variant: "success",}));
             })
             .catch(error => dispatch(enqueueSnackbar(error, {variant: "error"})));

    };

    return (
        !renderForgot ?

            <form name="loginForm" noValidate className="flex flex-col justify-center w-full">

                <KzTextField
                    className="mb-16"
                    label="Username"
                    autoFocus
                    name="username"
                    defaultValue="kcelebi"
                    inputRef={register}
                    variant="outlined"
                    required
                    fullWidth
                />

                <KzTextField
                    className="mb-16"
                    label="Password"
                    name="password"
                    defaultValue="123"
                    inputRef={register}
                    type="password"
                    required
                    fullWidth
                />

                <div className="flex items-center justify-between">

                    <FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remember"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                            }
                            label="Remember Me"
                        />
                    </FormControl>

                    <Link className="font-medium" onClick={() => setRenderForgot(true)}>
                        {t("changePassword")}
                    </Link>
                </div>

                <Button variant="contained"
                        color="primary"
                        className="w-224 mx-auto mt-16"
                        aria-label="LOG IN"
                        type="submit"
                        onClick={handleSubmit(data => {
                            dispatch(login(data.username, data.password, rememberMe))
                        })}>
                    {t("login")}
                </Button>

            </form>

            :

            <form name="forgotForm" noValidate className="flex flex-col justify-center w-full">

                <KzTextField
                    className="mb-16"
                    label={t("username")}
                    autoFocus
                    name="username"
                    inputRef={register}
                    variant="outlined"
                    required
                    fullWidth
                />

                <KzTextField
                    className="mb-16"
                    label={t("password")}
                    autoFocus
                    type="password"
                    name="oldPassword"
                    inputRef={register}
                    variant="outlined"
                    required
                    fullWidth
                />

                <KzTextField
                    className="mb-16"
                    label={t("oldPassword")}
                    name="password"
                    inputRef={register}
                    type="password"
                    variant="outlined"
                    required
                    fullWidth/>

                <Grid container spacing={2} direction="row">
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                        <Button variant="contained"
                                className="w-full mt-16 bg-red-500 text-white"
                                onClick={() => setRenderForgot(false)}>
                            {t("cancel")}
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                        <Button variant="contained"
                                color="primary"
                                className="w-full mt-16"
                                onClick={handleSubmit(data => {
                                    handleForgotForm(data)
                                })}>
                            {t("requestPassword")}
                        </Button>
                    </Grid>
                </Grid>
                <div id="forgot-password-container">
                </div>

            </form>
    );
};

export default LoginForm