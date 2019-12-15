import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class layout extends Component {
    state = {
        showSidebar: false
    }
    sidebarShowHandler = () => {
        this.setState({
            showSidebar: true
        })
    }
    sidebarHideHandler = () => {
        this.setState({
            showSidebar: false
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar clickMenu={this.sidebarShowHandler}></Toolbar>
                <SideDrawer showSidebar={this.state.showSidebar} clickBack={this.sidebarHideHandler} ></SideDrawer>
                <main className={classes.content}>{this.props.children}</main>
            </Aux >
        )
    }


}
export default layout;