import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import clsx from "clsx";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root           : {
        display       : 'flex',
        flex          : '1 0 auto',
        flexDirection : 'column',
        color         : theme.palette.text.secondary,
        backgroundSize: 'cover',
    },
    headerContainer: {
        display        : 'flex',
        flexDirection  : 'column',
        width          : '100%',
        boxShadow      : theme.shadows[10],
        backgroundColor: theme.palette.primary[500],
    },
    headerWrapper  : {
        display                     : 'flex',
        flexDirection               : 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    headerTitle    : {
        color: theme.palette.primary.contrastText
    },
    actionContainer: {
        [theme.breakpoints.up('md')]: {
            display      : 'flex',
            flexDirection: "column"
        }
    }
}));

const KzFormCard = props => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, "h-full")}>
            <div id="header-container" className={clsx(classes.headerContainer)}>
                <div id="back-container" className={clsx('flex-1 my-2')}>
                    {props.backText}
                </div>
                <div id="header-wrapper" className={clsx(classes.headerWrapper)}>

                    <div id="header-content" className={clsx('flex-1 my-20 flex-row flex overflow-hidden')}>
                        {
                            props.headerImage ?
                                <div className="flex max-w-xs">
                                    <img className="w-64 sm:w-32 mr-8 sm:mr-16 rounded" src={props.headerImage} alt={props.headerImage}/>
                                </div>
                                : null
                        }
                        <div id="header-title" className="overflow-hidden">
                            <Typography className={clsx(classes.headerTitle, "truncate ml-5")} variant="h4">{props.title}</Typography>
                            <Typography className="truncate">{props.headerText}</Typography>
                            <Typography className="truncate" variant="caption">{props.headerDetail}</Typography>
                        </div>
                    </div>

                    <div className={clsx(classes.actionContainer, "md:ml-10")}>
                        {props.actionElements}
                    </div>
                </div>
            </div>
            <div id="card-content" className={clsx(classes.content, "flex-1 h-full p-12")}>
                {props.children}
            </div>
        </div>
    );
};

KzFormCard.propTypes = {
    // todo header CSSleri dahil edilecektir.
    actionElements: PropTypes.element,
    title         : PropTypes.string,
    headerText    : PropTypes.string,
    headerDetail  : PropTypes.string,
    headerImage   : PropTypes.node,
    backText      : PropTypes.string,
    backPath      : PropTypes.string // required yapilacak
};

export default KzFormCard;