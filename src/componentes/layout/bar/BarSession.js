import React, { Component } from 'react';
import { Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionDesktop : {
        display : "none",
        [theme.breakpoints.up("md")] : {
            display : "flex"
        }
    }
});
class BarSesion extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Toolbar>
            <Typography variant="h6">
               Parqueadero MATT
            </Typography>
            <div className={classes.sectionDesktop}>
            </div>
            </Toolbar>

            </div>
        );
    }
}

export default withStyles(styles)(BarSesion);