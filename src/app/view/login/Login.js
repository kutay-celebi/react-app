import React, {Component} from 'react';
import {darken, withStyles} from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LoginForm from "./LoginForm";

const styles = (theme) => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

class Login extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            renderForgot: false
        }
    }

    render() {
        const {classes} = this.props;

        return (
            // <div className={clsx(classes.root, 'flex flex-1 justify-center p-24 w-full')}>
            //     <LoginForm handleForm={this.onFormSubmit}/>
            // </div>
            <div className={clsx(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">
                    <Card className="w-full max-w-384">
                        <CardContent className="flex flex-col items-center justify-center p-32">

                            <img className="w-128 m-32" src={"/assets/images/logo.png"} alt="logo"/>

                            <Typography variant="h6" className="mt-16 mb-32">LOGIN TO YOUR ACCOUNT</Typography>

                            <LoginForm/>

                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);

