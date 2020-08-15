import React from 'react';
// import PropTypes       from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../app/redux/actions/auth";

const useStyles = makeStyles(theme => ({
    avatarHover: {
        transition: theme.transitions.create(['box-shadow'], {
            easing  : theme.transitions.easing.crash,
            duration: theme.transitions.duration.complex
        }),
        '&:hover' : {
            boxShadow: ".1em .1em 3em rgba(200, 200, 200, 0.5)",
        }
    },
    menuColor  : {
        '& ul': {
            color: '#000' //todo temadan alinacak
        },
    }
}));

const KzUserInfo = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes                 = useStyles();

    const dispatch = useDispatch();
    const user     = useSelector(({authReducers}) => authReducers.auth.principal);

    const renderMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const userLogout = () => {
        dispatch(logout())
    };


    return (
        <div className='w-full px-5'>
            {/*alt'a kullanici photo basilacak..*/}

            <Avatar alt={user.username}
                    src="/assets/images/avatar.jpg"
                    onClick={renderMenu}
                    className={clsx(classes.avatarHover, 'float-right cursor-pointer')}
                    aria-controls="simple-menu"
                    aria-haspopup="true"/>

            <Menu id="simple-menu"
                  open={Boolean(anchorEl)}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                      vertical  : 'bottom',
                      horizontal: 'center',
                  }}
                  anchorEl={anchorEl}
                  keepMounted
                  onClose={handleClose}
                  className={classes.menuColor}>
                <MenuItem>{user.username}</MenuItem>
                <MenuItem>Ayarlar</MenuItem>
                <MenuItem onClick={userLogout}>Çıkış Yap</MenuItem>
            </Menu>
        </div>
    );
};

KzUserInfo.propTypes = {};

export default KzUserInfo;