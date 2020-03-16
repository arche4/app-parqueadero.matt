import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSesion from './bar/BarSession';
class AppNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                  <BarSesion />
                </AppBar>
            </div>
        );
    }
}

export default AppNavbar;