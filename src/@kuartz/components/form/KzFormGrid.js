import React  from 'react';
import {Grid} from "@material-ui/core";

const KzFormGrid = props => {
    return (
        <Grid container {...props}>
            {
                props.children !== undefined && props.children !== null && props.children.isArray ?
                    props.children.map(children => {
                        return (
                            <Grid item>
                                {children}
                            </Grid>
                        )
                    }) : props.children
            }
        </Grid>
    );
};

KzFormGrid.propTypes = {};

export default KzFormGrid;